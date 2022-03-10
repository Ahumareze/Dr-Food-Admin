import React from 'react';
import { Button } from '../../../Components';

function Quantity() {
    return (
        <div className='Quantity'>
            <Button onClick={() => console.log('')} name='+' width={40} height={40} />
            <p className='Quantity_num'>2</p>
            <Button onClick={() => console.log('')} name='-' width={40} height={40} />
        </div>
    );
}

export default Quantity;