import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

function CheckoutHeader(props: any) {
    const navigate = () => {
        props.props.history.push('/cart')
    }

    return (
        <div className='CartHeader' >
            <div className='CartBox' onClick={() => navigate()} >
                <FiChevronLeft size={30} color='#B786D9' style={{paddingLeft: 5}} /><p>Cart</p>
            </div>
            <div className='CartTitle'>
                <p>Checkout</p>
            </div>
        </div>
    );
}

export default CheckoutHeader;