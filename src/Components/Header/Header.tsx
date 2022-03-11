import React from 'react';
import './Header.css';

import {FiShoppingCart} from 'react-icons/fi';

function Header(props: any) {
    return (
        <div className='Header'>
            <div className='H_d1'>
                <p>Dr <span>Food</span></p>
            </div>
            {/* <div className='H_d2'>
                <FiShoppingCart size={25} color='#ED7C0B' onClick={() => props.props.history.push('/cart')} />
            </div> */}
        </div>
    );
}

export default Header;