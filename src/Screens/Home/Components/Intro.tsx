import React from 'react';

import {Button} from '../../../Components'

function Intro() {
    return (
        <div className='Intro'>
            <p className='Intro_name'>Dr Food</p>
            <p className='Intro_tag_line'>Confectionery</p>
            <p className='Intro_extraTagLine'>Tasty looking treats in Owerri, <br />
                now with door to door delivery
            </p>
            <Button onClick={() => console.log('')} name='Order now' height={45} width={140} />
        </div>
    );
}

export default Intro;