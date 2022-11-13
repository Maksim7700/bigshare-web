import React from 'react';
import '../../css/main.css';
import '../../css/service.css';
import '../../css/fonts.css';
import Block from './Block';
import DoubleBlock from './DoubleBlock';

const Service = () => {
    return (
        <div className='middle em-05'>
            <div className="container">
                <div className='middle__title Gilroy-600'>At your <span className='middle__service_text Gilroy-600'>service,</span> every step
                    of the way
                </div>
                <div className='middle_info'><span className='center Montserrat-400'>Innowise Group can cover the entire software development process, from
                    product vision discussion to applications design and
                    software enhancement. Our multi-skilled experienced team facilitates businesses worldwide on their
                    way to digital transformation and helps companies take full advantage of IT innovations.</span>
                </div>
                <Block logo='/pen-tool-1.svg' title='Ecommerce Development'
                       text='Today’s business world is competitive, and while it’s relatively easy to get started, it’s very hard to rise to the top. We can help. Set your mind at ease by taking this opportunity to learn more about how Big Share can turn your ecommerce project into an income-generating, sales-making machine.'/>
                <div className='double__block_middle'>
                    <DoubleBlock logo1='/pen-tool-2.svg' title1='Branding & Logo Design'
                                 text1='Just started a business and need a lift? Or just a little refresher? Can do, just hit us up! Research, logos, fonts, colors, and even something if you need it.'
                                 logo2='/pen-tool-3.svg' title2='Web & Mobile Design'
                                 text2='Create the best user experience. Your users will appreciate fast and clear navigation, easy transitions, seamless flow, and beautiful looks. Our approach to design is to solve user and business problems and make the experience of using your product delightful. '/>
                    <DoubleBlock logo1='/pen-tool-4.svg' title1='Web Development'
                                 text1='Get top-notch talent that will do its best to create a great web application. All of our engineers follow coding standards and our internal rules to write clean code. We will make sure that the delivered product meets your expectations and needs of users.'
                                 logo2='/pen-tool-5.svg' title2='Mobile Development'
                                 text2='Deliver speed, flexibility and mobility with our bespoke app development services. We ensure your apps meet users wherever they are, and work across any range of device types.'/>
                </div>
            </div>
        </div>
    );
}

export default Service;
