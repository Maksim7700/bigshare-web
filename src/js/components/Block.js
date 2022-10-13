import '../../css/main.css';
import '../../css/block.modules.css';
import '../../css/hover.css';
import React from 'react';

const Block = (props) => {
    return (
        <div className='middle_block'>
            <div className='block__logo f-w-500 em-05'><img src={process.env.PUBLIC_URL + props.logo} alt='img' /></div>
            <div className='block__title f-w-500 em-05'>{props.title}</div>
            <div className='block__text l-h-24 p-block em-05 f-w-400'>{props.text}</div>
        </div>
    );
}

export default Block;
