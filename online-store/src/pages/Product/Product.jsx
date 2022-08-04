import style from './Product.module.scss'
import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { updateSword, getSword } from '../../services/server';

import firestore from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Product = () => {
    const { state } = useLocation();
    const [isFav, setIsFav] = useState(false);

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


    const [sword, setSword] = useState(state.sword);
    console.log("1: " + sword.id.toString())


    const getData = async () => {
        const data = await getSword(sword.id.toString())
        setSword(data);
    }

    const updateSword = async (id, record) => {
        const collRef = firestore.collection('swords')
        const docRef = collRef.doc(id)
        await docRef.update(record)

    }
    

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