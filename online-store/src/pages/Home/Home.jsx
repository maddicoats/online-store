import style from './Home.module.scss'
import { seedSwords, getSwords } from '../../services/server';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';

const Home = () => {
    const [swords, setSwords] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const getData = async () => {
        const data = await getSwords()
        setSwords(data);
    } 
    
    useEffect(() => {
        getData();
    }, [])

    const onInputChange = (event) => {
        const filter = event.target.value;
        if (!filter) {
            return setSearchParams({})
        }
        setSearchParams({ filter })
    }


    return (
        <div className={style.Box}>
        {/* <button onClick={seedSwords}>seed</button> */}
        <div className={style.Feat}>
            <h2>FEATURED🗡PRODUCTS</h2>
            <Carousel>
                {swords.slice(2,5).map((sword, i) => {
            return (
                <div key={i}>
                <Link  
                    to={`/product/${sword.sid}`}
                    state={{ sword: sword }}
                >
                    <img className={style.Home__Cards_Image} src={sword.image} />
                    <h3 className={style.Home__Cards_Name}>{sword.name}</h3>
                </Link>
                <p ><b>{sword.price}</b></p>
                </div>
            )
            })}
            </Carousel>
        </div>
        
        <div className={style.Home}>
        <h2>⚔ ALL PRODUCTS ⚔</h2>

        <input 
            className={style.Home__Input}
            value={searchParams.get('filter') || ''}
            onChange={onInputChange}
            placeholder='enter your search here...' 
        /> 


        <div className={style.Home__Cards}>
            {swords
            .filter((item) => {
                const filter = searchParams.get('filter'); 
                if(!filter) return true;
                const name = item.name.toLowerCase();
                return (
                    name.includes(filter.toLowerCase())
                )
            })
            
            .map((sword, i) => {
            return (
                <div key={i}>
                <Link  
                    to={`/product/${sword.sid}`}
                    state={{ sword: sword }}
                >
                    <img className={style.Home__Cards_Image} src={sword.image} />
                    <h3 className={style.Home__Cards_Name}>{sword.name}</h3>
                </Link>
                <p ><b>{sword.price}</b></p>
                </div>
            )
            })}
            
        </div>
        </div>
        </div>
    )
}

export default Home