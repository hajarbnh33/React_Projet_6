import React from 'react';
import '../../styles/app.css';
import banner from '../../assets/banner.webp';

function Banner (){
    return (
    <div className="header_up">
        <img src={banner} alt="falaise" className="banner"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
    );
}

export default Banner;