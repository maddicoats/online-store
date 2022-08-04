import React, { useState, useEffect } from 'react'
import style from './Cart.module.scss'
import { getItems } from '../../services/server'

const Cart = () => {
    const [items, setItems] = useState([])

    const getData = async () => {
        const data = await getItems()
        setItems(data);
    } 
    
    useEffect(() => {
        getData();
    }, [])

    
    console.log(items)

    return (
        <div className={style.Cart}>
            <div className={style.Cart__Cards}>
                {items.map((item, i) => {
                return (
                    <div className={style.Cart__Cards_Box} key={i}>
                        
                        <img className={style.Cart__Cards_Image} src={item.image} />

                        <div className={style.Cart__Cards_Details}>
                            <h3 className={style.Cart__Cards_Name}>{item.name}</h3>
                            <p><b>{item.price}</b></p>
                            
                            <div className={style.Select}>
                            <label htmlFor="quantity">Quantity: </label>
                            <select name="quantity" id="quantity">
                            
                            {Array.apply(null, Array(item.stock)).map(function (x, i) { return i+1; }).map((i) => {
                                return (<option key={i} value={i}>{i}</option>)
                            })}
                                
                            </select>
                            </div>
                        </div>

                        <div className={style.Cart__Cards_Delete}>
                            <button>X</button>
                        </div>
                        

                    </div>
                )
                })}
                
            </div>
            
        </div>
    )
}

export default Cart