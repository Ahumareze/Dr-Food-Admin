import React, {FC} from 'react';

interface ItemProps{
    name: string,
    price: number,
    img: any,
    id: string,
    description: string,
    onEdit: (e: any) => void,
    onDelete: (e: string) => void 
}

const Item:FC<ItemProps> = ({name, price, img, id, description, onEdit, onDelete}) => {

    const onSelect = () => {
        const data = {
            name,
            price,
            img,
            id,
            description
        }
        onEdit(data)
    }

    return (
        <div className='HomePageItem'>
            <div className='HomePageItemImage' style={{backgroundImage: `url(${img})`}} ></div>
            <div className='HomePageItemMain'>
                <p className='HomePageItemP'>{name}</p>
                <p className='HomePageItemP HomePageItemPrice'>N{price}</p>
                <div className='HomePageItemBottom'>
                    <div className='HomePIButton' onClick={() => onSelect()}>Edit</div>
                    <div className='HomePIButton2' onClick={() => onDelete(id)}>Delete</div>
                </div>
            </div>
        </div>
    );
}

export default Item;