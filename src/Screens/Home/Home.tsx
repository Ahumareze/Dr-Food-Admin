import React, { useEffect, useState } from 'react';
import './Home.css';

//Imported Components
import { Header, Loader } from '../../Components';
import Item from './Components/Item';
import Selected from './Components/Selected';

import img from '../../Assets/img3.jpg';
import NewButton from './Components/NewButton';
import axios from 'axios';
import { dbUrl } from '../../config/urls';

function Home(props: any) {
    const [selected, setSelected] = useState<any>();
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true);
        axios.get(dbUrl + 'foods')
            .then(r => {
                setData(r.data);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setLoading(false);
            })
    }

    const deleteById = (id: string) => {
        setLoading(true)
        const formData = {
            id
        }
        axios.post(dbUrl + 'delete_food', formData)
            .then(r => {
                window.location.reload()
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
            })
    }

    let view = (
        <>
            {data?.map((i: any) => (
                <Item 
                    name={i.name} 
                    price={i.price} 
                    img={i.img} 
                    description={i.description}
                    id={i._id}
                    onEdit={(e) => setSelected(e)}
                    onDelete={() => deleteById(i._id)}
                />
            ))}
        </>
    );

    if(!data){
        view = <p>Error fetching data</p>
    }

    return (
        <>
            <div className='HomePage'>
                <Header props={props} />
                <section>
                    <p className='HomePageTitle'>All</p>
                    {!loading ? view : <Loader /> }
                </section>
                <NewButton onClick={() => props.history.push('/new')} />
            </div>
            {selected && <Selected data={selected} close={() => setSelected(null)} />}
        </>
    );
}

export default Home;