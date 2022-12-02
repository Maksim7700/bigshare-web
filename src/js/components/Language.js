import '../../css/main.css';
import '../../css/language.css';
import '../../css/hover.css';

import React from 'react';

const Language = (props) => {

    const classes = props.className.split(' ')[1];
    return (
        <div className={`block classBlock em-05 ${classes}`}>
            <div target="_blank">
                <img src={`${props.logo}`} className={`image-tech ${props.className.split(' ')[0]}`} border="0" alt={props.alt}/>
             </div>
             <div className='lang-text color-white Montserrat-500'>{props.title}</div>
        </div>
    );
}

export default Language;
