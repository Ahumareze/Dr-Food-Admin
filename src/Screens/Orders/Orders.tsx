import React from 'react';
import './Orders.css';

import { Header } from '../../Components';
import Item from './Components/Item';

function Orders(props: any) {
    return (
        <div className='OrderPage'>
            <Header props={props}/>
            <section>
                <Item />
                <Item />
                <Item />
            </section>
        </div>
    );
}

export default Orders;