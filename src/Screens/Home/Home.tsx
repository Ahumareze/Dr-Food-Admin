import React, { useState } from 'react';
import './Home.css';

//Imported Components
import { Header } from '../../Components';
import Item from './Components/Item';
import Selected from './Components/Selected';

import img from '../../Assets/img3.jpg';
import NewButton from './Components/NewButton';

function Home(props: any) {
    const [selected, setSelected] = useState<any>();

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
                <NewButton onClick={() => props.history.push('/new')} />
            </div>
            {selected && <Selected data={selected} close={() => setSelected(null)} />}
        </>
    );
}

export default Home;