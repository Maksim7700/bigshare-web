import React from 'react';
import '../../css/main.css';
import '../../css/hover.css';
import '../../css/portfolio.css';

const PortfolioBlock = (props) => {
    const isRight = props.right === true ? 'margin__left' : '';
    const isCenter = props.center === true ? 'center' : '';
    return (
        <div className={`b-n em-05 projects__project ${isRight} d-flex w-706`}>
            <div className='first'>
                <img id={`${props.className}-left`} src={process.env.PUBLIC_URL + props.leftImg} alt='bike' />
            </div>
            <div className={`second ${isCenter}`}>
                <img id={`${props.className}-right`} src={process.env.PUBLIC_URL + props.rightImg} alt='bike' />
            </div>
        </div>
    );
};

export default PortfolioBlock;
