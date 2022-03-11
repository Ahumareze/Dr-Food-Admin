import React, {FC} from 'react';
import './Input.css';

interface InputProps{
    title: string,
    type: string,
    onChange: (e: any) => void
}

const Input:FC<InputProps> = ({title, type, onChange}):JSX.Element => {
    return (
        <div className='InputItem'>
            <p>{title}</p>
            <input type={type} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default Input;