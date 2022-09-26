import '../../css/main.css';
import '../../css/blog.css';
import React from 'react';

const BlogBlock = (props) => {
    return (
        <div className='blog__block em-05'>
            <div className='first__blog'>
                <div className='first__title f-w-500 l-h-24'>
                    JavaScript
                </div>
                <div className='first__text l-h-24 f-w-300'>
                    We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.
                </div>
                <div className='first__url l-h-24 f-w-300 d-flex'>
                    <div>Read More</div>
                    <div className='img-arrow-green'><img src={process.env.PUBLIC_URL + '/arrow-right-green.svg'} alt={props.alt} /></div>

                </div>
            </div>
            <div className='second__blog'>
                <div><img src={process.env.PUBLIC_URL + props.logo} alt={props.alt} /></div>
            </div>
        </div>
    );
};

export default BlogBlock;
