import React from 'react';
import './Selected.css';

import chicken from '../../Assets/chicken.jpg';
import Quantity from './Components/Quantity';

const Selected = () => {
    return (
        <div className='SelectedPage'>
            <div className='SelectedPageTop' style={{backgroundImage: `url(${chicken})`}} ></div>
            <div className='SelectedPageBottom'>
                <p className='SelectionPage_Name'>Chicken Wings</p>
                <p className='Selectionpage_Price'>N3000</p>
                <p className='SelectionPage_Details'>Cream pie made from the finest cream in lagos state, perfect for a valentine date with your spouse.</p>
                <Quantity />
            </div>
        </div>
    );
}

export default Selected;