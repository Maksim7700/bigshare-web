import Comment from './Comment';
import '../../css/main.css';
import '../../css/client.css';
import React from 'react';
import {Link as Scroll} from 'react-scroll';

const Client = () => {
    return (
        <div className='client em-05'>
            <div className='container client-inside d-flex'>
                <div className='client-mobile'>
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
                    {/* <div><img src={process.env.PUBLIC_URL + '/client.svg'} alt='client'/></div> */}
                    <div className='outsidex inside-inline'>
                        <div className='client-projects-inside'>
                            <div className='icon i-1 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_1.svg'} className='inside inside-1' alt='logo'></img></div>
                            <Scroll to='anketa' spy={true} smooth={true}><div className='icon i-2 inside inside-2 cl'><div className='cl_add2'></div><div className='cl_add Gilroy-500'>Add my company</div></div></Scroll>
                            <div className='icon i-3 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_2.svg'} className='inside inside-3' alt='logo'></img></div>
                            <div className='icon i-4 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_3.svg'} className='inside inside-4' alt='logo'></img></div>
                            <div className='icon i-5 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_4.svg'} className='inside inside-5' alt='logo'></img></div>
                            <div className='icon i-6 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_5.svg'} className='inside inside-6' alt='logo'></img></div>
                            <div className='icon i-7 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_6.svg'} className='inside inside-7' alt='logo'></img></div>
                            <div className='icon i-8 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_7.svg'} className='inside inside-8' alt='logo'></img></div>
                            <div className='icon i-9 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_8.svg'} className='inside inside-9' alt='logo'></img></div>
                            <div className='icon i-10 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_9.svg'} className='inside inside-10' alt='logo'></img></div>
                            <div className='icon i-11 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_10.svg'} className='inside inside-11' alt='logo'></img></div>
                            <div className='icon i-12 hover-client'><img src= {process.env.PUBLIC_URL + '/logo_11.svg'} className='inside inside-12' alt='logo'></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
