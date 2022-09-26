import Hero from "./Hero";
import Service from './Service';
import Technologies from "./Technologies";
import Client from './Client';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Anketa from './Anketa';
import { checkUser } from "../service/requestService";
import { useEffect } from 'react';
import '../../css/main.css';
import React from 'react';
import Footer from './Footer';

const HomePage = () => {
    useEffect(() => {
        checkUser();
    })
    return (
        <div>
            <div><Hero /></div>
            <div><Service /></div>
            <div><Technologies /></div>
            <div><Client /></div>
            <div><Portfolio /></div>
            <div><Blog /></div>
            <div><Anketa /></div>
            <div><Footer /></div>
        </div>
    );
};

export default HomePage;
