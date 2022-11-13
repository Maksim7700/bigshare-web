import '../../css/main.css';
import '../../css/blog.css';
import '../../css/hover.css';
import BlogBlock from "./BlogBlock";
import Container from '../../UI/Container';
import React from 'react';

const Blog = () => {
    return (
        <div className='blog em-05'>
            <Container>
                <div className='logo__type'>
                    <img className='logotype' src={process.env.PUBLIC_URL + '/logo_.svg'} alt={'logo'} />
                </div>
                <div className='blog__title l-h-72 Gilroy-600'>
                    <span id='green__text'>Discover</span> insights and trends
                </div>
                <div className='em-02 blog__text l-h-24 Montserrat-400' >
                    We estimate professional knowledge and expertise as the most valuable things a company should possess. Our blog is a platform for promoting and sharing those things to make the knowledge work for the goals and for the best purposes.
                </div>
                <div className='blog__blocks'>
                    <BlogBlock logo='/objects.svg' alt='objects' />
                    <BlogBlock logo='/objects.svg' alt='objects' />
                    <BlogBlock logo='/objects.svg' alt='objects' />
                </div>
                <div className='Gilroy-500 view blog_ l-h-24 f-w-500'>
                    <p>View all blog</p>
                </div>
                <div className='buttom-pad'></div>
            </Container>
        </div>
    );
};

export default Blog;
