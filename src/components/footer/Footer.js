import React from 'react';
import '../../styles/components/footer/footer.scss';
import Logo from '../../assets/Logo_footer.png';

function Footer (){
    return <footer className='footer_banner'>
        <img src={Logo} alt='Logo Kasa' className='logo_footer'/>
        <div className='copyright'>
          <p>© 2020 Kasa.All rights reserved</p>  
        </div>
    </footer>
}

export default Footer;