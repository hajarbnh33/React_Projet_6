import React from 'react';
import '../../styles/components/header/navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
return (
<nav>
<ul className="nav_bar">
    <li className="nav_link"><Link to="/">Acceuil</Link></li>
    <li className="nav_link"><Link to="/about">A Propos</Link></li>
</ul>
</nav>
);
};

export default Navigation;