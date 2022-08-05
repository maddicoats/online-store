import style from './Product.module.scss'
import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { updateSword, getSword } from '../../services/server';


const Product = () => {
    const { state } = useLocation();
    const [isFav, setIsFav] = useState(state.sword.fav);
    const [sword, setSword] = useState(state.sword);
    const [isInCart, setIsInCart] = useState(state.sword.inCart)

    useEffect(() => {
        getData();
        setIsFav(Boolean(sword.fav))
    }, [])

    const handleFav = () => {
        setIsFav(!isFav)
        updateSword(sword.id.toString(), { "fav": !isFav })
        getData()
    };
    console.log(isFav)

    const handleCart = () => {
        setIsInCart(!isInCart)
        updateSword(sword.id.toString(), { "inCart": !isInCart })
        getData()
    };
    console.log(isInCart)

    const handleAlert = () => {
        alert("item is currently out of stock");
    }

    const getData = async () => {
        const data = await getSword(sword.id.toString())
        setSword(data);
    }

    // const handleAddToCart = () => {
    //     addToCart({
    //         name: state.sword.name,
    //         sid: state.sword.sid,
    //         image: state.sword.image,
    //         price: state.sword.price,
    //         stock: state.sword.quantity,
    //         quantity: 1
    //     })
    // }
    

    return (
    <div className={style.Cardbox}>
        <Link className={style.Cardbox__Back} to='/'>
            <p>{`<<`}</p>
        </Link>
    
    <div className={style.Card}>    
        <img src={state.sword.image} />

        <h1>{state.sword.name}</h1>     

        <h2>{state.sword.price}</h2>
        
        <div className={style.Select}>
        <label htmlFor="length">Length: </label>
        <select name="length" id="length">
            {state.sword.variants.map((v, index) => {
                return (
                    <option 
                    key={index} 
                    value={state.sword.variants[index]}>
                        {state.sword.variants[index]}
                    </option>
                )
            })}
        </select>
        </div>

        {state.sword.quantity <= 0? <p>Out of stock :(</p> : <p>There are currently {state.sword.quantity} in stock</p>}

        <div>
            <button title={isFav? "unfavourite" : "favourite"} className={isFav? style.Fav : null} 
                onClick={handleFav}>❤</button>
            <button 
            onClick={state.sword.quantity > 0? handleCart : handleAlert}
            >{isInCart? `Remove from cart` : `Add to cart`}</button>
        </div>
        
    </div>
    </div>
  )
}

export default Product