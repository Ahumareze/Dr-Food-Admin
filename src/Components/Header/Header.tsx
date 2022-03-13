import React from 'react';
import './Header.css';

import {FiBell} from 'react-icons/fi';

function Header(props: any) {
    return (
        <div className='Header'>
            <div className='H_d1'>
                <p>Dr <span>Food</span></p>
            </div>
            <div className='H_d2'>
                <FiBell size={25} color='#ED7C0B' onClick={() => props.props.history.push('/orders')} />
            </div>
        </div>
    );
}

export default Header;