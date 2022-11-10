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
        text: `"This guy has an amazing imagination and ability to come up with
        creative ideas. I just had to ask him and he would come up with things I would never think of.
        I can be a bit annoying because I am a perfectionist but everytime I asked him to change something
        or
        come up with something else he would do ..."`    
    },
    {
        img: '/face2.svg',
        name: 'Ozair Memon',
        position: 'Acebuddy world',
        text: `"Andrii was awesome to work with, excellent at his job and patient with any changes that were needed. Would 100% recommend for any design work and will be using him for any other design work we need!"`    
    },
    {
        img: '/face3.svg',
        name: 'Chisom Nintons',
        position: 'Current CSM',
        text: `"Given a short timeline. Provided quality work 👍"`    
    },
    {
        img: '/face4.svg',
        name: 'Ishwar Jha',
        position: 'Wistec Assessments',
        text: `"Andrii is a very proactive designer. He is supportive, understands the requirement in detail, and approaches the job with lots of flexibility. I placed the order to him even though he didn't have any earning here on upwork, but I think I won't have taken a better choice than assigning work to Andrii..."`
    },
    {
        img: '/face5.svg',
        name: 'Med Supply',
        position: 'Pedal 2 Earn',
        text: `"Very good work. Thank you."`    
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
