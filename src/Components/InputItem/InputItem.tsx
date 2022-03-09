import React, {FC} from 'react';
import './InputItem.css';

interface InputProps {
    name: string,
    setValue: (e: string) => void
}

const InputItem:FC<InputProps> = ({name, setValue}):JSX.Element => {

    let view = <input onChange={(e) => setValue(e.target.value)} />
    if(name === 'Content'){
        view = <textarea placeholder='Type messages here...' onChange={(e) => setValue(e.target.value)}/>
    }else if(name === 'Recieving mails'){
        view = <textarea placeholder='example@gmail.com example2@yahoo.com example3@hotmail.com' onChange={(e) => setValue(e.target.value)}/>
    }
    return (
        <div className='InputItem' style={{width: window.innerWidth - 30}} >
            <p>{name}:</p>
            {view}
        </div>
    );
}

export default InputItem;