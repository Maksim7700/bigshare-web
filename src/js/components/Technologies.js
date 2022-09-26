import '../../css/main.css';
import '../../css/hover.css';

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
                    <img className='logotype' src={process.env.PUBLIC_URL + '/logo_.svg'} alt={'logo'} />
                </div>
                <div className='middle__down__info__title l-h-72'>
                    Creating digital innovations with the<br /> latest <span id='green__text'>technologies</span>
                </div>
                <div className='middle_down__info__text l-h-24'>
                    Our team consists of enthusiastic technologists who love bringing real world solutions to our
                    clients’ problems. Our ideas stem from a deep understanding of our clients’ markets, solutions, and
                    visions.
                </div>
                <div className='middle__down__info__buttons d-flex'>
                    <div>
                        <button onClick={getDesign} className={design ? 'em-05 middle__down__info__button e-h' : 'em-05 e-h'}>Design</button>
                    </div>
                    <div>
                        <button onClick={getWeb} className={web ? 'middle__down__info__button em-05 e-h' : 'em-05 e-h'}>Web dev.</button>
                    </div>
                    <div>
                        <button onClick={getMobile} className={mobile ? 'middle__down__info__button em-05 e-h' : 'em-05 e-h'}>Mobile dev.</button>
                    </div>
                </div>
                {design && <div className='list__technologies d-flex'>
                    <Language logo={'/figma.svg'} alt={'js'} />
                    <Language logo={'/photoshop.svg'} alt={'css'} />
                    <Language logo={'/illustrator.svg'} alt={'react'} />
                    <Language logo={'/after_effect.svg'} alt={'wp'} />
                    <Language logo={'/indesign.svg'} alt={'html'} />
                </div>}
                {web && <div className='list__technologies d-flex'>
                    <Language logo={'/js.svg'} alt={'js'} />
                    <Language logo={'/css.svg'} alt={'css'} />
                    <Language logo={'/react.svg'} alt={'react'} />
                    <Language logo={'/wp.svg'} alt={'wp'} />
                    <Language logo={'/html.svg'} alt={'html'} />
                </div>}
                {mobile && <div className='list__technologies d-flex'>
                    <Language logo={'/java.svg'} alt={'js'} />
                    <Language logo={'/kotlin.svg'} alt={'css'} />
                    <Language logo={'/react_native.svg'} alt={'react'} />
                    <Language logo={'/angular.svg'} alt={'wp'} />
                    <Language logo={'/flutter.svg'} alt={'html'} />
                </div>}
            </div>
        </div>
    );
}

export default Technologies;
