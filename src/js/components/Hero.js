import '../../css/main.css';
import Container from '../../UI/Container';
import '../../css/hero.css';
import '../../css/hover.css';
import '../../css/fonts.css';
import React from 'react';

const Hero = () => {
    return (
        <div className='head em-05'>
            <Container>
                <div className='header__info em-05 l-h-72 Gilroy-700'>
                    Let’s Make Software
                </div>
                <div className='header__second_info em-05 l-h-72 Gilroy-700'>Together</div>
                <div className='header__third_info em-05 Montserrat-500'>Big or small, immediate or ongoing projects, individual or
                    team-based
                    projects: get them all done
                    with Big Share professionals.
                    <br/>Develop your business together with us.
                </div>
                <div className='btn__body'>
                    <button className='btn__started Montserrat-600 em-05'><div className='text__button d-flex'><div className='get__started Montserrat-600'>Get Started </div><div className='get__started arrow_img'><img className='btn__started__arrow' src={process.env.PUBLIC_URL + '/arrow-right.svg'} alt='arrow-right' /></div></div></button>
                </div>
                <div className='icon__mouser d-flex'>
                    <div><img src={process.env.PUBLIC_URL + '/mouser.jpg'} alt='img' /></div>
                    <div className='text__scroll em-05 Montserrat-400'>Scroll down</div>
                </div>
                <div className='line__line'>
                    <div className='line__rectangle'><img src={process.env.PUBLIC_URL + '/rectangle.png'} alt='img' /></div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
