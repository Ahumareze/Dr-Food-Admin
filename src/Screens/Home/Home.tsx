import React, { useEffect, useState } from 'react';
import './Home.css';

//Imported Components
import { Header } from '../../Components';
import Item from './Components/Item';
import Selected from './Components/Selected';

import img from '../../Assets/img3.jpg';
import NewButton from './Components/NewButton';
import axios from 'axios';
import { dbUrl } from '../../config/urls';

function Home(props: any) {
    const [selected, setSelected] = useState<any>();
    const [data, setData] = useState<any>();

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        console.log('start')
        axios.get(dbUrl + 'foods')
            .then(r => {
                setData(r.data);
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const view = (
        <>
            {data?.map((i: any) => (
                    <Item 
                    name={i.name} 
                    price={i.price} 
                    img={i.img} 
                    description={i.description}
                    id={i.id}
                    onEdit={(e) => setSelected(e)}
                    onDelete={(e) => console.log(e)}
                />
            ))}
        </>
    )

    return (
        <>
            <div className='HomePage'>
                <Header />
                <section>
                    <p className='HomePageTitle'>All</p>
                    {view}
                </section>
                <NewButton onClick={() => props.history.push('/new')} />
            </div>
            {selected && <Selected data={selected} close={() => setSelected(null)} />}
        </>
    );
}

export default Home;