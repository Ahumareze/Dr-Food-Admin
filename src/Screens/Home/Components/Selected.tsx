import React from 'react';
import { Input } from '../../../Components';

import { width } from '../../../config/dimensions';

function Selected() {
    return (
        <div className='SelectedItem'>
            <div className='SelectedItemMain' style={{width: width - 20}}>
                <div className='SelectedImgContainer'></div>
                <Input title='Name' onChange={(e) => console.log(e)} type='text'/>
                <Input title='Price' onChange={(e) => console.log(e)} type='text'/>
            </div>
        </div>
    );
}

export default Selected;