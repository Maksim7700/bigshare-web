import '../../css/main.css';
import '../../css/hover.css';
import '../../css/fonts.css';
import '../../css/technologies.css';

import Language from "./Language";
import { isDesign, isMobile, isWeb } from '../reducers/technologiesReducer';
import { useDispatch, useSelector } from 'react-redux';

const Technologies = () => {

    const dispatch = useDispatch();
    const design = useSelector((state) => state.technologies.isDesign)
    const web = useSelector((state) => state.technologies.isWeb)
    const mobile = useSelector((state) => state.technologies.isMobile)


    const getDesign = () => {
        dispatch((isDesign()));
    }

    const getWeb = () => {
        dispatch(isWeb());
    }

    const getMobile = () => {
        dispatch(isMobile());
    }

    return (
        <div className='middle__down__info em-05'>
            <div className="container">
                <div className='logo__type'>
                    <div className='loggo'/>
                </div>
                <div className='middle__down__info__title l-h-72 Gilroy-700'>
                    <div className='info__title_mobile'>
                    Creating digital innovations with the<br /> latest <span id='green__text' className='Gilroy-700'>technologies</span>
                    </div>
                </div>
                <div className='middle_down__info__text l-h-24 Montserrat-400'>
                    Our team consists of enthusiastic technologists who love bringing real world solutions to our
                    clients’ problems. Our ideas stem from a deep understanding of our clients’ markets, solutions, and
                    visions.
                </div>
                <div className="scrolling-wrapper">
                <div className='middle__down__info__buttons d-flex'>
                    <div>
                        <button onClick={getDesign} className={design ? 'Montserrat-500 em-05 middle__down__info__button e-h' : 'Montserrat-500 em-05 e-h'}>Design</button>
                    </div>
                    <div>
                        <button onClick={getWeb} className={web ? 'Montserrat-500 middle__down__info__button em-05 e-h' : 'Montserrat-500 em-05 e-h'}>Web dev.</button>
                    </div>
                    <div>
                        <button onClick={getMobile} className={mobile ? 'Montserrat-500 middle__down__info__button em-05 e-h last' : 'Montserrat-500 em-05 e-h last'}>Mobile dev.</button>
                    </div>
                </div>
                </div>
                {design && <div className='list__technologies d-flex'>
                    <div className='d-flex display one'>
                    <Language className='figma' logo={'/figma.svg'}alt={'figma'} title='Figma'/>
                    <Language className='photoshop' logo={'/photoshop.svg'} alt={'css'} title='Photoshop'/>
                    <Language className='illustrator last-item' logo={'/illustrator.svg'} alt={'react'} title='Illustrator'/>
                    </div>
                    <div className='d-flex display'>
                    <Language className='after_effect' logo={'/after_effect.svg'} alt={'wp'} title='After Effect'/>
                    <Language className='indesign' logo={'/indesign.svg'} alt={'html'} title='Indesign'/>
                    </div>
                </div>}
                {web && <div className='list__technologies d-flex'>
                    <div className='d-flex display one'>
                    <Language className='js' logo={'/js.svg'} alt={'js'} title='JavaScript'/>
                    <Language className='css' logo={'/css.svg'} alt={'css'} title='CSS'/>
                    <Language className='react last-item' logo={'/react_native.svg'} alt={'react'} title='React'/>
                    </div>
                    <div className='d-flex display'>
                    <Language className='wp' logo={'/wp.svg'} alt={'wp'} title='WordPress'/>
                    <Language className='html' logo={'/html.svg'} alt={'html'} title='HTML'/>
                    </div>
                </div>}
                {mobile && <div className='list__technologies d-flex'>
                    <div className='d-flex display one'>
                    <Language className='java' logo={'/java.svg'} alt={'java'} title='Java'/>
                    <Language className='kotlin' logo={'/kotlin.svg'} alt={'css'} title='Kotlin'/>
                    <Language className='react_native last-item' logo={'/react_native.svg'} alt={'react'} title='React Native'/>
                    </div>
                    <div className='d-flex display'>
                    <Language className='angular' logo={'/angular.svg'} alt={'wp'} title='Angular'/>
                    <Language className='flutter' logo={'/flutter.svg'} alt={'html'} title='Flutter'/>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Technologies;
