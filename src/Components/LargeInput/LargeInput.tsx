import React, {FC} from 'react';
import './LargeInput.css';

interface InputProps{
    title: string,
    onChange: (e: any) => void
}

const LargeInput:FC<InputProps> = ({title, onChange}) => {
    return (
        <div className='LargeInputItem'>
            <p>{title}</p>
            <textarea onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default LargeInput;