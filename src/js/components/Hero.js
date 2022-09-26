import '../../css/main.css';
import Container from '../../UI/Container';
import '../../css/hero.css';
import '../../css/hover.css';
import React from 'react';

const Hero = () => {
    return (
        <div className='head em-05'>
            <Container>
                <div className='header__info em-05 l-h-72'>
                    Let’s make software
                </div>
                <div className='header__second_info em-05 l-h-72'>Together</div>
                <div className='header__third_info em-05'>Big or small, immediate or ongoing projects, individual or
                    team-based
                    projects: get them all done
                    with Big Share professionals.
                    <br/>Develop your business together with us.
                </div>
                <div className='btn__body'>
                    <button className='btn__started f-w-500 em-05'><div className='text__button d-flex'><div className='get__started'>Get Started </div><div className='get__started arrow_img'><img src={process.env.PUBLIC_URL + '/arrow-right.svg'} alt='arrow-right' /></div></div></button>
                </div>
                <div className='icon__mouser d-flex'>
                    <div><img src={process.env.PUBLIC_URL + '/mouser.jpg'} alt='img' /></div>
                    <div className='text__scroll em-05'>Scroll down</div>
                </div>
                <div className='line__line'>
                    <div className='line__rectangle'><img src={process.env.PUBLIC_URL + '/rectangle.png'} alt='img' /></div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
