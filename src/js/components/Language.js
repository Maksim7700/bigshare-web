import '../../css/main.css';
import '../../css/language.css';
import React from 'react';

const Language = (props) => {
    return (
        <div className='block em-05'>
            <div target="_blank">
                <img src={`${props.logo}`} className={`image-tech ${props.className}`} border="0" alt={props.alt}/>
             </div>
             <div className='lang-text color-white Montserrat-500'>{props.title}</div>
        </div>
    );
}

export default Language;
