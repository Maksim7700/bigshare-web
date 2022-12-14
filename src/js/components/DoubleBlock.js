import '../../css/main.css';
import '../../css/double-block.css';
import '../../css/block.modules.css';
import '../../css/hover.css';
import '../../css/fonts.css';
import React from 'react';


const DoubleBlock = (props) => {
    return (
        <div className='main__dobule__block d-flex l-h-24'>
            <div className='double__middle_block'>
                <div className='double__block__logo'><img src={process.env.PUBLIC_URL + props.logo1} alt='img' /></div>
                <div className='double__block__title Gilroy-500'>{props.title1}</div>
                <div className='double__block__text Montserrat-400 p-block em-05'>{props.text1}</div>
            </div>
            <div className='double__middle_block__2'>
                <div className='double__block__logo'><img src={process.env.PUBLIC_URL + props.logo2} alt='img' /></div>
                <div className='double__block__title Gilroy-500'>{props.title2}</div>
                <div className='double__block__text Montserrat-400 p-block em-05'>{props.text2}</div></div>
        </div>
    );
}

export default DoubleBlock;
