import React from 'react';

import { width } from '../../../config/dimensions';

function Item() {
    return (
        <div className='OrderItem' style={{width: width - 20}}>
            <p className='OR_title' >Ifeanyi Ahumareze, 12 march 2021</p>
            <p className='OR_details'>0802318898</p>
            <p className='OR_details'>12 bishops court, owerri</p>
            <div className='OR_main'></div>
        </div>
    );
}

export default Item;