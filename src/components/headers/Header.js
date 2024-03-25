import React from 'react';
import '../../styles/components/header/header.scss';
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