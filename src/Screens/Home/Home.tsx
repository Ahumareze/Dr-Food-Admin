import React, { useState } from 'react';
import './Home.css';

//Imported Components
import { Header } from '../../Components';
import Item from './Components/Item';
import Selected from './Components/Selected';

import img from '../../Assets/img3.jpg';

function Home() {
    const [selected, setSelected] = useState();

    return (
        <>
            <div className='HomePage'>
                <Header />
                <section>
                    <p className='HomePageTitle'>All</p>
                    <Item 
                        name='Italian Stake' 
                        price={2000} 
                        img={img} 
                        description='Enjoy Italian stake'
                        id='dkfjakj'
                        onEdit={(e) => setSelected(e)}
                        onDelete={(e) => console.log(e)}
                    />
                </section>
            </div>
            {selected && <Selected />}
        </>
    );
}

export default Home;