import React, { useEffect, useState } from 'react';
import './Selected.css';

import chicken from '../../Assets/chicken.jpg';
import Quantity from './Components/Quantity';
import { Button } from '../../Components';
import { FiChevronLeft } from 'react-icons/fi';

import { Loader } from '../../Components';

import data from '../../config/testData';

const Selected = (props: any) => {
    const [foodData, setFoodData] = useState<any>();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        const id = localStorage.getItem('@selectedId');
        if(id){
            const newId = JSON.parse(id);
            setFoodData(data[newId])
        }
    }

    const price = foodData?.quantity * foodData?.price;

    let view = (
        <>
            <div className='SelectedPageTop' style={{backgroundImage: `url(${foodData?.img})`}} >
                <div className='SelectedItemBack' onClick={() => props.history.push('/foods')} >
                    <FiChevronLeft size={30} color={'#fff'} />
                </div>
            </div>
            <div className='SelectedPageBottom'>
                <p className='SelectionPage_Name'>{foodData?.name}</p>
                <p className='Selectionpage_Price'>N{price}</p>
                <p className='SelectionPage_Details'>{foodData?.description}</p>
                <Quantity quantity={foodData?.quantity} setQuantity={(e) => setFoodData({...foodData, quantity: e}) } />
                <div className='SelectionPage_Button'>
                    <Button onClick={() => console.log('')} name='Buy' width={120} height={45} />
                </div>
            </div>
        </>
    )

    return (
        <div className='SelectedPage'>
            {foodData ? view : <Loader />}
        </div>
    );
}

export default Selected;