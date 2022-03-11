import React, {FC} from 'react';
import './LargeInput.css';

interface InputProps{
    title: string,
    placeholder: string,
    onChange: (e: any) => void
}

const LargeInput:FC<InputProps> = ({title, onChange, placeholder}) => {
    return (
        <div className='LargeInputItem'>
            <p>{title}</p>
            <textarea placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default LargeInput;