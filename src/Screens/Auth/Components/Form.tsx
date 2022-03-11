import React from 'react';

import { Input } from '../../../Components';
import { width } from '../../../config/dimensions';

function Form() {
    return (
        <div className='Form' style={{width: width - 30}} >
            <p className='Form_title'>Sign In</p>
            <Input />
        </div>
    );
}

export default Form;