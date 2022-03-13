import React from 'react';
import './Auth.css';

import { Header } from '../../Components';
import Form from './Components/Form';

function Auth(props: any) {
    return (
        <div className='AuthPage'>
            <Header props={props} />
            <Form />
        </div>
    );
}

export default Auth;