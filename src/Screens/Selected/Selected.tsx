import React from 'react';
import './Selected.css';

import chicken from '../../Assets/chicken.jpg';

const Selected = () => {
    return (
        <div className='SelectedPage'>
            <div className='SelectedPageTop' style={{backgroundImage: `url(${chicken})`}} ></div>
            <div className='SelectedPageBottom'></div>
        </div>
    );
}

export default Selected;