import React, { useEffect, useState } from 'react';
import './Orders.css';

import { Header, Loader } from '../../Components';
import Item from './Components/Item';
import axios from 'axios';
import { dbUrl } from '../../config/urls';

function Orders(props: any) {
    const [data, setData] = useState<any>([]);
    const [alert, setAlert] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [deliveryId, setDeliveryId] = useState<any>({});
    const [reload, setReload] = useState<number>(0);

    useEffect(() => {
        fetchData()
    }, [reload]);

    const fetchData = () => {
        setLoading(true);
        const arr: any[] = [];
        axios.get(dbUrl + 'orders')
            .then(r => {
                r.data?.map((i: any) => (
                    arr.unshift(i)
                ))
                setData(arr);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setLoading(false)
            })
    };

    const changeStatus = (id: string, status: boolean) => {
        setAlert(false);
        setLoading(true);
        const data = {
            id,
            status: !status
        }
        axios.put(dbUrl + 'update_orders', data)
            .then(r => {
                setReload(prev => prev + 1)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const view = (
        <section>
            {data?.map((i: any, idx: number) => (
                <Item 
                    name={i.name}
                    phone={i.phone}
                    address={i.address}
                    date={i.date}
                    cart={i.cart}
                    status={i.status}
                    key={idx}
                    changeStatus={() => {
                        setDeliveryId({id: i._id,status: i.status});
                        setAlert(true)
                    }}
                />
            ))}
        </section>
    )

    const alertDiv = (
        <div className='AlertContainer'>
            <div className='AlertMain'>
                <p className='PCD' >Please confirm delivery</p>
                <div className='AlertButtons'>
                    <div className='cancleButton' onClick={() => setAlert(false)} >Cancle</div>
                    <div className='confirmButton' onClick={() => changeStatus(deliveryId.id, deliveryId.status)}>Confirm</div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='OrderPage'>
            <Header props={props}/>
            {!loading ? view : <Loader /> }
            {alert && alertDiv}
        </div>
    );
}

export default Orders;