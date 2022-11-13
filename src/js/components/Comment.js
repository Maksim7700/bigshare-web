import '../../css/main.css';
import '../../css/hover.css';
import '../../css/comment.css';
import React, { useEffect, useState } from 'react';

const Comment = () => {

    const comments = [
    {
        img: '/face.svg',
        name: 'Alexandru Szentgyorgyi',
        position: 'Byggito',
        text: `"This guy has an amazing imagination and ability to come up with creative ideas. I just had to ask him and he would come up with things I would never think of. I can be a bit annoying because I am a perfectionist but everytime I asked him to change something or come up with something else he would do it directly. It was ..."`    
    },
    {
        img: '/face2.svg',
        name: 'Ruchi Goenka',
        position: 'Desire Trip',
        text: `“Andrii developed the best UI/UX that came along perfectly. We have asked for multiple revisions as we were looking for a suitable option for a particular section and Andrii helped us with the same without any hassle. He not only made these versions many times but at the same time, his creative feedback was the reason f...”`    
    },
    {
        img: '/face3.svg',
        name: 'Andre Bush',
        position: 'WolfPad',
        text: `“Andrii understood our requirements well and came out with an awesome output. He used very good colour combination and the flow of UI/UX was just perfect with the right images. Thanks a ton and looking forward to work for more pages of the website. Thanks!”`    
    },
    {
        img: '/face4.svg',
        name: 'Ishwar Jha',
        position: 'Wistec Assessments',
        text: `“Andril is a very proactive designer. He is supportive, understands the requirement in detail, and approaches the job with lots of flexibility. I placed the order to him even though he didn't have any earning here on upwork, but I think I won't have taken a better choice than assigning work to Andril. Thank you Andril for being a...”`
    },
    {
        img: '/face5.svg',
        name: 'Med Supply',
        position: 'Pedal 2 Earn',
        text: `"Very happy working with Andrii again. I knew that he will do the illustration job I asked him to do very well. But this time, he even went out of his way to try doing extra for this job which was a short animation in my case. If you need a person who not only would do great work for you but go the extra mile to make sure it is deliv...”`    
    }
]

const [comment, setComment] = useState(0);

const [current, setCurrent] = useState(comments[0]);

const next = () => {
    if (comment !== 4) {
        setComment(comment + 1);
    } else {
        setComment(0);
    }
}

const previous = () => {
    if (comment !== 0) {
        setComment(comment - 1);
    } else {
        setComment(4);
    }
}

useEffect(()=> {
    setCurrent(comments[comment])
    // eslint-disable-next-line
}, [comment])

    return (
        <div className='em-05'>
            <div className='comment__header d-flex'>
                <div><img src={process.env.PUBLIC_URL + `${current.img}`} alt='face'/></div>
                <div className='comment__info'>
                    <div className='comment__name em-05 Montserrat-500 l-h-24'>{current.name}</div>
                    <div className='comment__position em-05 Montserrat-500 l-h-24'>{current.position}</div>
                </div>
            </div>
            <div className='comment__rating'>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
                <span><img src={process.env.PUBLIC_URL + '/star.svg'} alt='star'/></span>
            </div>
            <div className='comment__comment em-02 Montserrat-400'>
                <i>
                   {current.text}
                </i>
            </div>
            <div className='comment__navigation'>
                <button onClick={previous} className='comment__button__next'><img src={process.env.PUBLIC_URL + '/arrow-left-24.svg'} alt='arrow-left'/></button>
                <button onClick={next} className='comment__button__next m-16'><img src={process.env.PUBLIC_URL + '/arrow-right-24.svg'} alt='arrow-right'/></button>
            </div>
        </div>
    );
}

export default Comment;
