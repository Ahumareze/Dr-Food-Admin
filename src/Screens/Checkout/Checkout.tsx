import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Button, Header } from '../../Components';
import './Checkout.css';

import CheckoutHeader from './Components/CheckoutHeader';
import CheckoutInput from './Components/CheckoutInput';

import {width} from '../../config/dimensions';

function Checkout(props: any) {
    const [alert, setAlert] = useState(false);

    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<any>();
    const [address, setAddress] = useState<any>();

    const postData = () => {
        const data = {
            name: name,
            phone: phone,
            address: address
        }
        console.log(data);
        setAlert(true)
    }

    const view = (
        <div className='CheckoutAlertDiv'>
            <div className="CheckoutAlert">
                <p className='PCD' >Please confirm delivery</p>
                <div className='AlertButtons'>
                    <div className='cancleButton' onClick={() => setAlert(false)} >Cancle</div>
                    <div className='confirmButton' onClick={() => postData()}>Confirm</div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className='CheckoutPage'>
                <Header/>
                <section>
                    <div className='CheckoutForm' style={{width: width - 30}}>
                        <p className='CheckoutHeader' >Details</p>
                        <CheckoutInput name='Name' setInput={(e) => setName(e)} />
                        <CheckoutInput name='Phone number' setInput={(e) => setPhone(e)} />
                        <CheckoutInput name='Delivery Address' setInput={(e) => setAddress(e)} />
                        <div className='PayOnDeliveryDiv'>
                            <p>Pay on delivery</p>  
                            <FiCheck size={20} color='salmon' />
                        </div>
                        <Button onClick={() => postData()} name='Request Delivery' width={width - 60} height={45} />
                    </div>
                </section>
            </div>
            {alert && view}
        </>
    );
}

export default Checkout;