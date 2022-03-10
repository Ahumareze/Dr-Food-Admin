import React, {FC} from 'react';
import './Button.css';

interface ButtonProps{
    name: string,
    width: number,
    height: number,
    onClick: () => void
}

const Button:FC<ButtonProps> = ({name, width, height, onClick}):JSX.Element => {
    return (
        <button style={{width: width, height: height}} onClick={() => onClick()} >
            {name}
        </button>
    );
}

export default Button;