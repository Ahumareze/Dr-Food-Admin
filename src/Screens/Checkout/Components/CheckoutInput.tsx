import React, {FC} from 'react';

const width = window.innerWidth

interface InputProps{
    name: string,
    setInput: (e: any) => void
}

const  CheckoutInput:FC<InputProps> = ({name, setInput}):JSX.Element =>  {
    return (
        <div className='CheckoutInput' style={{width: width - 60}} >
            <p>{name}</p>
            <input onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default CheckoutInput;