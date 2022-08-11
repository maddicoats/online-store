import React, { useState, useEffect } from 'react'
import style from './Cart.module.scss'
import { getItems, deleteItem } from '../../services/server'

const Cart = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getItems()
        setItems(data);
    } 
    //console.log(items[0].id)

    const handleDelete = async (event) => {
        await deleteItem(event.target.value.toString())
        //console.log(event.target.value.toString())
        getData();
    }


    // PRICE TOTAL:
    const cartItemsArray = items.filter((item) => item.inCart === true)

    const total = cartItemsArray.map( item => parseInt(item.price.replace(/\s/g, '').substring(1))).reduce((prev, a) => prev + a, 0);

    return (
        <main>
        <div className={style.Cart}>
            <h1>Shopping Cart:</h1>
            <div className={style.Cart__Cards}>
                {items.map((item, i) => {
                return (
                    <div id="items" className={style.Cart__Cards_Box} key={i}>
                        
                        <div className={style.Cart__Cards_Box_Box}>
                        <img className={style.Cart__Cards_Image} src={item.image} alt={`a ${item.name} on a white background`} />

                        <div className={style.Cart__Cards_Details}>

                            <h3 className={style.Cart__Cards_Name}>{item.name}</h3>

                            <p><b id={i}>{item.price}</b></p>
                            
                            <div className={style.Select}>
                            <label htmlFor="quantity">Quantity: </label>
                            <select name="quantity" id={i}>
                            
                                {Array.apply(null, Array(item.quantity)).map(function (x, i) { return i+1; }).map((i) => {
                                    return (<option key={i} value={i}>{i}</option>)
                                })} 
                            </select>
                            </div>

                        </div>
                        </div>

                        <div className={style.Cart__Cards_Delete}>
                            <button 
                            value={item.id}
                            onClick={handleDelete}
                            title="delete"
                            >✖</button>
                        </div>
                    </div> 
                ) 
                })}
            <h2>Total: ${total}</h2>
            </div> 
        </div>
        </main>
    )
}

export default Cart