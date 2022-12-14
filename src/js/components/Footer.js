import Navigate from '../../UI/Navigate';
import '../../css/main.css';
import '../../css/menu.css';
import '../../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer em-5'>
            <header className='header'>
                <Navigate className='nav footer-1'><Link aria-current="page" to={'/'}>
                    <div className={'hero-logo'}>
                        <div className={'logo'}><img src={process.env.PUBLIC_URL + '/logo.svg'}
                            alt="bigshare" /></div>
                    </div>
                </Link>
                    <ul className='nav-list'>
                        <li className='social linked-in' />
                        <li className='social behance' />
                        <li className='social instagram' />
                    </ul>
                </Navigate>
                <Navigate><hr className='hr' /></Navigate>
                <Navigate className='nav footer-2'><div aria-current="page">

                    <div className={'hero-logo d-flex'}>
                        <div className={'logo white hover_location'}><div className='location_img'></div></div> <a className='location Montserrat-400' href="https://www.google.com/maps/place/Akademika+Andriya+Sakharova+St,+L'viv,+L'vivs'ka+oblast,+79000/@49.824909,24.0091385,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7881abf8e6f:0x6803f4eb256bd70f!8m2!3d49.824909!4d24.0113272">Sakharova street, Lviv, Ukraine</a></div>

                </div>
                    <ul className="nav-list">
                        <li className="nav-list__item em-05 Montserrat-400"><Link className="nav-list__link c-8" to={'/about'}>Terms of Use</Link></li>
                        <li className="nav-list__item em-05 Montserrat-400"><Link className="nav-list__link c-8" to={'/portfolio'}>Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul className='nav-list mail-list'>
                        <li><div className='social_media'></div></li><span className='email Montserrat-400'>bigshare@gmail.com</span>
                    </ul>
                </Navigate>


            </header>
        </div>
    )
}


export default Footer;
