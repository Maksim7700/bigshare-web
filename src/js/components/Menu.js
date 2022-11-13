import '../../css/main.css';
import '../../css/menu.css';
import '../../css/hover.css';

import { useState } from 'react';
import { Link } from "react-router-dom";
import Navigate from '../../UI/Navigate';
import {Link as Scroll} from 'react-scroll';
import React from 'react';

const Menu = () => {

    const [changeHeadColor, setChangeHeadColor] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 20) {
            setChangeHeadColor(true);
        } else {
            setChangeHeadColor(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <header className={changeHeadColor ? 'posi-fix header header-white' : 'posi-fix header'}>
            <Navigate className='nav'><Link aria-current="page" className="" to={'/'}>
                <div className={'hero-logo'}>
                    <div className={'logo'}><img src={process.env.PUBLIC_URL + '/logo.svg'}
                        alt="bigshare" /></div>
                </div>
            </Link>
                {/* <ul className="nav-list">
                    <li className="nav-list__item em-05"><Link className="nav-list__link" to={'/about'}>About us</Link></li>
                    <li className="nav-list__item em-05"><Link className="nav-list__link" to={'/portfolio'}>Portfolio</Link>
                    </li>
                    <li className="nav-list__item em-05"><Link className="nav-list__link" to={'/career'}>We are hiring</Link>
                    </li>
                    <li className="nav-list__item em-05"><Link className="nav-list__link" to={'/blog'}>Blog</Link></li>
                </ul> */}
                <Scroll to='anketa' spy={true} smooth={true}><div className="nav__button em-05 Montserrat-500">Contact us</div></Scroll>
            </Navigate>
        </header>
    );
}

export default Menu;
