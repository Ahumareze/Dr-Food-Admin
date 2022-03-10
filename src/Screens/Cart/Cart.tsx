import React from 'react';
import './Cart.css';

import Item from './Components/Item';

import chicken from '../../Assets/chicken.jpg';
import cream from '../../Assets/cream.jpg';
import { Button } from '../../Components';

function Cart() {
    return (
        <div className='CartPage'>
            <div className='CartHeader'>
                <p>Cart</p>
            </div>
            <section>
                <Item img={chicken} name='Chicken and chips' price={1900} quantity={1} />
                <Item img={cream} name='Cream salad' price={9000} quantity={3} />
                <p className='CartTotal'>Total: <span>N11,900</span></p>
                <div className='ProceedToCheckoutContainer'>
                    <Button onClick={() => console.log('')} name='Proceed to checkout' height={45} width={250} />
                </div>
            </section>
        </div>
    );
}

export default Cart;