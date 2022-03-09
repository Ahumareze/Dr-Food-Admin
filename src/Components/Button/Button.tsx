import React, {FC} from 'react';
import './Button.css';

interface ButtonProps{
    name: string,
    width: number;
    height: number
}

const Button:FC<ButtonProps> = ({name, width, height}):JSX.Element => {
    return (
        <button style={{width: width, height: height}}>
            {name}
        </button>
    );
}

export default Button;