import axios from 'axios';
import React, {FC, useState} from 'react';
import { Button, Input, LargeInput, Loader } from '../../../Components';

import { width } from '../../../config/dimensions';
import { dbUrl } from '../../../config/urls';

interface SelectedProps{
    data: any,
    close: () => void
}

const Selected:FC<SelectedProps> = ({data, close}):JSX.Element => {
    const [name, setName] = useState(data.name);
    const [price, setPrice] = useState(data.price);
    const [description, setDescription] = useState(data.description);

    const [loading, setLoading] = useState<boolean>(false);

    const update = () => {
        setLoading(true);
        const obj = {
            id: data.id,
            name,
            price,
            description
        }
        axios.put(dbUrl + 'update_food', obj)
            .then(r => {
                console.log(r.data);
                window.location.reload();
            })
            .catch(e => {
                console.log(e)
            })
    };

    const view = (
        <div className='SelectedItemMain' style={{width: width - 20}}>
            <div className='SelectedImgContainer' style={{backgroundImage: `url(${data.img})`}} ></div>
            <Input title='Name' placeholder={name} onChange={(e) => setName(e)} type='text'/>
            <Input title='Price' placeholder={price} onChange={(e) => setPrice(e)} type='text'/>
            <LargeInput placeholder={description} title='Description' onChange={(e) => setDescription(e)}  />
            <div className='SelectedBottom'>
                <div className='SelectedCancle' onClick={() => close()}>Cancle</div>
                <div className='SB_UC'>
                    <Button name='Update' height={40} width={140} onClick={() => update()} />
                </div>
            </div>
        </div>
    )
    
    return (
        <div className='SelectedItem'>
            {!loading ? view: <Loader />}
        </div>
    );
}

export default Selected;