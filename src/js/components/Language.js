import '../../css/main.css';
import '../../css/language.css';
import React from 'react';

const Language = (props) => {
    return (
        <div className='block em-05'>
            <div className='hie'>
                <div className='icon'>
                    <img id='image' src={process.env.PUBLIC_URL + props.logo} alt={props.alt} />
                </div>
                <div className='color-white'>{props.title}</div>
            </div>
        </div>
    );
}

export default Language;
