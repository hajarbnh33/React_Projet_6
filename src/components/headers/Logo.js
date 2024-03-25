import React from 'react';
import logo from '../../assets/Logo.png';
import '../../styles/components/header/logo.scss'

function Logo (){
    return <img src={logo} alt="Logo du site" className="logo"/>;
}

export default Logo;