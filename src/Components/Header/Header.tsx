import React from 'react';
import './Header.css';

import {FiShoppingCart} from 'react-icons/fi';

function Header() {
    return (
        <div className='Header'>
            <div className='H_d1'>
                <p>Dr <span>Food</span></p>
            </div>
            <div className='H_d2'>
                <FiShoppingCart size={25} color='#ED7C0B' />
            </div>
        </div>
    );
}

export default Header;