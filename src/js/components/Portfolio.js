
import PortfolioBlock from "./PortfolioBlock";
import AddPortfolio from "./AddPortfolio";
import Container from '../../UI/Container';
import '../../css/main.css';
import '../../css/portfolio.css';
import React from 'react';


const Portfolio = () => {

    return (
        <div className='projects em-05'>
            <Container>
                <div className='projects__head'>
                    <div className='projects__title l-h-72 Gilroy-700'>
                        See some of our popular <span id='green__text'>Portfolio</span>
                    </div>
                    <div className='projects__text l-h-24 Montserrat-400'>
                        Our team helped global brands design, build, launch, and scale their digital products! We bring
                        digital transformation across multiple industries (from social, finTech and healthTech to
                        IoT and Transportation)
                    </div>
                </div>
                <div className='projects__'>
                    <div className='d-flex'>
                        <PortfolioBlock right={false} leftImg={'/bike-1.png'} rightImg={'/bike-2.png'}/>
                        <PortfolioBlock right={true} leftImg={'/accebody-1.png'} rightImg={'/accebody-2.png'} />
                    </div>
                    <div className='d-flex'>
                        <PortfolioBlock right={false} center={true} leftImg={'/car-1.png'} rightImg={'/car-2.png'} />
                        <PortfolioBlock right={true} center={true} leftImg={'/buggito-1.png'} rightImg={'/buggito-2.png'} />
                    </div>
                    <div className='d-flex'>
                        <PortfolioBlock right={false} leftImg={'/beoon-1.png'} rightImg={'/beoon-2.png'} />
                        <AddPortfolio />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;
