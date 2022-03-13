import React, { useEffect, useState } from 'react';
import './Orders.css';

import { Header, Loader } from '../../Components';
import Item from './Components/Item';
import axios from 'axios';
import { dbUrl } from '../../config/urls';

function Orders(props: any) {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get(dbUrl + 'orders')
            .then(r => {
                setData(r.data);
                setLoading(false);
                console.log(r.data)
            })
            .catch(e => {
                console.log(e);
                setLoading(false)
            })
    };

    const view = (
        <section>
            {data?.map((i: any, idx: number) => (
                <Item 
                    name={i.name}
                    phone={i.phone}
                    address={i.address}
                    date={i.date}
                    cart={i.cart}
                />
            ))}
        </section>
    )

    return (
        <div className='OrderPage'>
            <Header props={props}/>
            {!loading ? view : <Loader /> } 
        </div>
    );
}

export default Orders;