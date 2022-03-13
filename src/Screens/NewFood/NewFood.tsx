import React, { useState, useEffect } from 'react';
import './NewFood.css';

import { FiPlus } from 'react-icons/fi';
import { Button, Header, Input, LargeInput, Loader } from '../../Components';
import { width } from '../../config/dimensions';

import axios from 'axios';
import { dbUrl } from '../../config/urls';

function NewFood(props: any) {
    const [imgSrc, setImgSrc] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [posting, setPosting] = useState<boolean>(false)

    const [img, setImg] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState<any>();
    const [description, setDescription] = useState();

    useEffect(() => {
        if(imgSrc){
            uploadImg(imgSrc[0])
        }
    }, [imgSrc])
    
    const uploadImg = (img: any) => {
        setLoading(true)
        const formData = new FormData()
        formData.append('file', img);
        formData.append('upload_preset', 'kqiuojxc');

        axios.post('https://api.cloudinary.com/v1_1/ahumareze/image/upload', formData)
            .then(r => {
                setImg(r.data.url);
                setLoading(false)
            })
            .catch(e => {
                setLoading(false);
                setImgSrc(null);
            })
    };

    const postData = () => {
        if(name && price && img){
            setPosting(true);
            const data = {
                name,
                price: JSON.parse(price),
                img,
                description
            }
            axios.post(dbUrl + 'add_foods', data)
                .then(r => console.log(r.data))
                .catch(e => console.log(e))
        }
    }

    const view = (
        <div className='SelectedItem'>
            <div className='SelectedItemMain' style={{width: width - 20}}>
                <div className='SelectedImgContainer' style={{backgroundImage: `url(${img})`}} >
                    <label htmlFor="file-input">
                        {!loading ? <FiPlus size={40} style={img ? {opacity: 0} : {}} /> : <Loader /> }
                        <input id="file-input" type="file" onChange={(e) => setImgSrc(e.target.files)} />
                    </label>
                </div>
                <Input title='Name' placeholder='' onChange={(e) => setName(e)} type='text'/>
                <Input title='Price' placeholder='' onChange={(e) => setPrice(e)} type='number'/>
                <LargeInput placeholder='' title='Description' onChange={(e) => setDescription(e)}  />
                <div className='SelectedBottom'>
                    <div className='SelectedCancle' onClick={() => props.history.push('/') }>Cancle</div>
                    <div className='SB_UC'>
                        <Button name='Update' height={40} width={140} onClick={() => postData()} />
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <div className='NewFoodPage'>
            <Header props={props} />
            {!posting ? view : <Loader />}
        </div>
    );
}

export default NewFood;