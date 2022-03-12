import React, {FC} from 'react';
import { FiPlus } from 'react-icons/fi';

interface NewButtonProps{
    onClick: () => void
}

const NewButton:FC<NewButtonProps> = ({onClick}):JSX.Element => {
    return (
        <div className='NewButton' onClick={() => onClick()} >
            <FiPlus color='#fff' size={25} />
        </div>
    );
}

export default NewButton;