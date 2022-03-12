import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Button, Header, Input, LargeInput } from '../../Components';
import { width } from '../../config/dimensions';
import './NewFood.css';

import img1 from '../../Assets/img4.jpg';

function NewFood() {
    const [imgSrc, setImgSrc] = useState(img1);

    return (
        <div className='NewFoodPage'>
            <Header />
            <div className='SelectedItem'>
            <div className='SelectedItemMain' style={{width: width - 20}}>
                <div className='SelectedImgContainer' style={{backgroundImage: `url(${imgSrc})`}} >
                    <label htmlFor="file-input">
                        <FiPlus size={40} />
                        <input id="file-input" type="file" onChange={(e) => setImgSrc(e.target.value)} />
                    </label>
                </div>
                <Input title='Name' placeholder='' onChange={(e) => console.log(e)} type='text'/>
                <Input title='Price' placeholder='' onChange={(e) => console.log(e)} type='text'/>
                <LargeInput placeholder='' title='Description' onChange={(e) => console.log(e)}  />
                <div className='SelectedBottom'>
                    <div className='SelectedCancle' onClick={() => console.log('')}>Cancle</div>
                    <div className='SB_UC'>
                        <Button name='Update' height={40} width={140} onClick={() => console.log('')} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewFood;