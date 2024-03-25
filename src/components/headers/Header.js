import React from 'react';
import '../../styles/app.css';
import Navigation from './Navigation';
import Logo from './Logo';

const Header = () => {
return (
<header>
    <div className="header_top">
      <Logo/>
      <Navigation/>  
    </div>  
</header>

);
};

export default Header;