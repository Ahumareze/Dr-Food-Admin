import React, {FC} from 'react';
import { Button, Input, LargeInput } from '../../../Components';

import { width } from '../../../config/dimensions';

interface SelectedProps{
    data: any,
    close: () => void
}

const Selected:FC<SelectedProps> = ({data, close}):JSX.Element => {
    return (
        <div className='SelectedItem'>
            <div className='SelectedItemMain' style={{width: width - 20}}>
                <div className='SelectedImgContainer' style={{backgroundImage: `url(${data.img})`}} ></div>
                <Input title='Name' placeholder={data.name}onChange={(e) => console.log(e)} type='text'/>
                <Input title='Price' placeholder={data.price}onChange={(e) => console.log(e)} type='text'/>
                <LargeInput placeholder={data.description} title='Description' onChange={(e) => console.log(e)}  />
                <div className='SelectedBottom'>
                    <div className='SelectedCancle' onClick={() => close()}>Cancle</div>
                    <div className='SB_UC'>
                        <Button name='Update' height={40} width={140} onClick={() => console.log('')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selected;