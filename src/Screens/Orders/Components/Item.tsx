import React from 'react';

import { width } from '../../../config/dimensions';

function Item() {
    return (
        <div className='OrderItem' style={{width: width - 20}}>
            <p className='OR_title' >Ifeanyi Ahumareze, 12 march 2021</p>
            <p className='OR_details'>0802318898</p>
            <p className='OR_details'>12 bishops court, owerri</p>
            <div className='OR_main'>
                <p className='OR_Item' >Potato fries x2 @N3000</p>
                <p className='OR_Item' >Potato fries x2 @N3000</p>
            </div>
            <div className='OR_Bottom'>
                <div className='OR_d1'>
                    <p>Total: <span>N2000</span></p>
                </div>
                <div className='OR_d2'>
                    <p>status: <span>pending</span></p>
                </div>
            </div>
        </div>
    );
}

export default Item;