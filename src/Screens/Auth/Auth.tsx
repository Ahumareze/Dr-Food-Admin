import React from 'react';
import './Auth.css';

import { Header } from '../../Components';
import Form from './Components/Form';

function Auth() {
    return (
        <div className='AuthPage'>
            <Header />
            <Form />
        </div>
    );
}

export default Auth;