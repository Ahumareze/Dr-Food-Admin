import React from 'react';
import './Selected.css';

import chicken from '../../Assets/chicken.jpg';
import Quantity from './Components/Quantity';
import { Button } from '../../Components';
import { FiChevronLeft } from 'react-icons/fi';

const Selected = () => {
    return (
        <div className='SelectedPage'>
            <div className='SelectedPageTop' style={{backgroundImage: `url(${chicken})`}} >
                <div className='SelectedItemBack'>
                    <FiChevronLeft size={30} color={'#fff'} />
                </div>
            </div>
            <div className='SelectedPageBottom'>
                <p className='SelectionPage_Name'>Chicken Wings</p>
                <p className='Selectionpage_Price'>N3000</p>
                <p className='SelectionPage_Details'>Cream pie made from the finest cream in lagos state, perfect for a valentine date with your spouse.</p>
                <Quantity />
                <div className='SelectionPage_Button'>
                    <Button onClick={() => console.log('')} name='Buy' width={120} height={45} />
                </div>
            </div>
        </div>
    );
}

export default Selected;