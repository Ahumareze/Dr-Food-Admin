import React, {FC, useEffect, useState} from 'react';

import { width } from '../../../config/dimensions';

interface ItemProps{
    name: string,
    phone: string,
    date: string,
    address: string,
    status: boolean,
    cart: any,
    changeStatus: () => void
}

const Item:FC<ItemProps> = ({name, phone, date, address, cart, status, changeStatus}):JSX.Element => {
    const [total, setTotal] = useState<number>()
    
    useEffect(() => {
        calcTotal();
    }, []);

    const calcTotal = () => {
        const arr: any[] = [];
        {cart.map((i: any) => {
            arr.push(i.price)
        })}
        const total = arr?.reduce((a, b) => a + b, 0);
        setTotal(total)
    }

    return (
        <div className='OrderItem' style={{width: width - 20}}>
            <p className='OR_title' >{name}, {date}</p>
            <p className='OR_details'>{phone}</p>
            <p className='OR_details'>{address}</p>
            <div className='OR_main'>
                {cart.map((i: any) => (
                    <p className='OR_Item' >{i.name} x{i.quantity} @N{i.price}</p>
                ))}
            </div>
            <div className='OR_Bottom'>
                <div className='OR_d1'>
                    <p>Total: <span>N{total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                </div>
                <div className='OR_d2' onClick={() => {!status ? changeStatus() : alert('order already delivered') } } >
                    <p>status: <span>{status ? 'delivered' : 'pending' }</span></p>
                </div>
            </div>
        </div>
    );
}

export default Item;