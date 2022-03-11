import React, { useState } from 'react';

import { Button, Input } from '../../../Components';
import { width } from '../../../config/dimensions';

function Form() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submit = () => {
        console.log(username, password)
    }

    return (
        <div className='Form' style={{width: width - 30}} >
            <p className='Form_title'>Sign In</p>
            <Input title='Username' type='text' onChange={(e) => setUsername(e)} />
            <Input title='Password' type='password' onChange={(e) => setPassword(e)}/>
            <div className='Form_btn_container'>
                <Button name='Continue' height={40} width={200} onClick={() => submit()} />
            </div>
        </div>
    );
}

export default Form;