import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Input } from '../../../Components';
import { width } from '../../../config/dimensions';
import * as actions from '../../../Redux/actions/actions';

function Form(props: any) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submit = () => {
        props.auth(username, password)
    }

    return (
        <div className='Form' style={{width: width - 30}} >
            <p className='Form_title'>Sign In</p>
            <Input title='Username' placeholder='' type='text' onChange={(e) => setUsername(e)} />
            <Input title='Password' placeholder='' type='password' onChange={(e) => setPassword(e)}/>
            <div className='Form_btn_container'>
                <Button name='Continue' height={40} width={200} onClick={() => submit()} />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        auth: (username: string, password: string) => dispatch(actions.AUTH(username, password))
    }
}

export default connect(null, mapDispatchToProps)(Form);