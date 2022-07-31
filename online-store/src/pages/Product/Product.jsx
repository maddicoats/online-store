import style from './Product.module.scss'
import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from 'react';

const Product = () => {
    const { state } = useLocation();
    const [isFav, setIsFav] = useState(false);

    const handleFav = () => {
        setIsFav(!isFav);
        console.log(isFav)
    };

    // useEffect(() => {
    //     handleUpdate({
    //         ...state.sword,
    //         fav: !state.sword.fav,
    //     });
    // }, [isFav]);
    

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
            <button>Add to cart</button>
        </div>
        
    </div>
    </div>
  )
}

export default Product