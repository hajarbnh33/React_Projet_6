import React from 'react';
import '../../styles/app.css';
import Navigation from './Navigation';
import Logo from './Logo';
import Banner from './Banner';



const Header = () => {
return (
<header>
    <div className="header_top">
      <Logo/>
      <Navigation/>  
    </div>  
    <Banner />
</header>

);
};

export default Header;