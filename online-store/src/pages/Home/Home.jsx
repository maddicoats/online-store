import style from './Home.module.scss'
import { seedSwords, getSwords } from '../../services/server';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { updateSword } from '../../services/server';

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

    const handleUpdate = async (newRecord) => {
    const {id, ...record} = newRecord;
    await updateSword(id, record);
    getData();
    }


    return (
        <>
        {/* <button onClick={seedSwords}>seed</button> */}
        <div className={style.Feat}>
            <h2>FEATURED🗡PRODUCTS</h2>
            <div></div>
        </div>
        
        <div className={style.Home}>
        <h2>⚔ ALL PRODUCTS ⚔</h2>

        <input 
            value={searchParams.get('filter') || ''}
            onChange={onInputChange}
            placeholder='search here' 
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
                    to={`/product/${sword.id}`}
                    state={{ sword: sword }}
                >
                    <img src={sword.image} />
                    <h3>{sword.name}</h3>
                </Link>
                <p><b>{sword.price}</b></p>
                </div>
            )
            })}
            
        </div>
        </div>
        </>
    )
}

export default Home