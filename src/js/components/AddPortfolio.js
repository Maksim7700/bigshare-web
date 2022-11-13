import '../../css/main.css';
import '../../css/hover.css';
import '../../css/portfolio.css';
import {Link as Scroll} from 'react-scroll';

const AddPortfolio = () => {
    return (
        <div>
                <div className='decor-portfolio'>
                <Scroll to='anketa' spy={true} smooth={true}>
                <div className='back-non projects__project w-704 em-05'>
                    <div className='text'>
                        <div className='add__project d-flex'>
                            <span className='add__project__text Gilroy-500'>Add my project</span>
                            <span className="p-l-175 size-40 add__project__start"></span>
                        </div>
                    </div>
                </div>
                </Scroll>
                </div>
            
        </div>
        
    );
};

export default AddPortfolio;
