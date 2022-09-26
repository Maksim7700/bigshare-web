import '../../css/main.css';
import '../../css/hover.css';
import '../../css/comment.css';
import React from 'react';

const Comment = () => {
    return (
        <div className='em-05'>
            <div className='comment__header d-flex'>
                <div><img src={process.env.PUBLIC_URL + '/face.svg'} alt='face'/></div>
                <div className='comment__info'>
                    <div className='comment__name em-05 f-w-500 l-h-24'>Alexandru Szentgyorgyi</div>
                    <div className='comment__position em-05 f-w-500 l-h-24'>Byggito</div>
                </div>
            </div>
            <div className='comment__rating'>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
            </div>
            <div className='comment__comment em-05'>
                <i>
                    "This guy has an amazing imagination and ability to come up with
                    creative ideas. I just had to ask him and he would come up with things I would never think of.
                    I can be a bit annoying because I am a perfectionist but everytime I asked him to change something
                    or
                    come up with something else he would do ..."
                </i>
            </div>
            <div className='comment__navigation'>
                <button className='comment__button__next'><img src={process.env.PUBLIC_URL + '/arrow-left-24.svg'} alt='arrow-left'/></button>
                <button className='comment__button__next m-16'><img src={process.env.PUBLIC_URL + '/arrow-right-24.svg'} alt='arrow-right'/></button>
            </div>
        </div>
    );
}

export default Comment;
