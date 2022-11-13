import Comment from './Comment';
import '../../css/main.css';
import '../../css/client.css';
import React from 'react';

const Client = () => {
    return (
        <div className='client em-05'>
            <div className='container d-flex'>
                <div>
                    <div className='text__title Gilroy-600'>
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
                    {/* <div><img src={process.env.PUBLIC_URL + '/client.svg'} alt='client'/></div> */}
                    <div className='outsidex inside-inline'>
                        <div className='float01 inside-first'>
                        <div><img src= {process.env.PUBLIC_URL + '/logo_1.svg'} className='inside inside-1' alt='logo'></img></div>
                            <div className='inside inside-2 cl'><div className='cl_add2'></div><div className='cl_add Gilroy-500'>Add my company</div></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_2.svg'} className='inside inside-3' alt='logo'></img></div>
                        </div>
                        <div className='float01 inside-second'>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_3.svg'} className='inside inside-4' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_4.svg'} className='inside inside-5' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_5.svg'} className='inside inside-6' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_6.svg'} className='inside inside-7' alt='logo'></img></div>
                        </div>
                        <div className='float01 inside-third'>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_7.svg'} className='inside inside-8' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_8.svg'} className='inside inside-9' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_9.svg'} className='inside inside-10' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_10.svg'} className='inside inside-11' alt='logo'></img></div>
                            <div><img src= {process.env.PUBLIC_URL + '/logo_11.svg'} className='inside inside-12' alt='logo'></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
