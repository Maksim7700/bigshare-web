import Comment from './Comment';
import '../../css/main.css';
import '../../css/client.css';
import React from 'react';

const Client = () => {
    return (
        <div className='client em-05'>
            <div className='container d-flex'>
                <div>
                    <div className='text__title Gilroy-700'>
                        We work with the <span id='green__text'> best</span>
                    </div>
                    <div className='text__text l-h-24 Montserrat-400'>
                        We bring real world solutions to each client’s problem through a deep understanding of their
                        market, product, and vision.
                    </div>
                    <div>
                        <Comment/>
                    </div>
                </div>
                <div className='container-right'>
                    <div><img src={process.env.PUBLIC_URL + '/client.svg'} alt='client'/></div>
                </div>
            </div>
        </div>
    );
}

export default Client;
