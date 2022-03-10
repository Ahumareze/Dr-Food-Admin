import React, {FC} from 'react';
import { Button } from '../../../Components';

interface QuantityProps{
    quantity: number,
    setQuantity: (e: number) => void
}

const Quantity:FC<QuantityProps> = ({quantity, setQuantity}):JSX.Element => {

    const onAdd = () => {
        if(quantity < 5){
            setQuantity(quantity + 1)
        }
    }

    const onRed = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Quantity'>
            <Button onClick={() => onRed()} name='-' width={40} height={40} />
            <p className='Quantity_num'>{quantity}</p>
            <Button onClick={() => onAdd()} name='+' width={40} height={40} />
        </div>
    );
}

export default Quantity;