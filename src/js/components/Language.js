import '../../css/main.css';
import '../../css/language.css';
import React from 'react';

const Language = (props) => {
    return (
        <div className='block em-05'>
            <div><img id='image' src={process.env.PUBLIC_URL + props.logo} alt={props.alt} /></div>
        </div>
    );
}

export default Language;
