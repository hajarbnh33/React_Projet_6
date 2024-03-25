import React from 'react';
import '../styles/app.css';

function Error() {
  return (
    <div>
      <main className='error_content'>
          <p className='error'>404</p>
          <p className='error_second'>Oups! La page que vous demandez n'existe pas.</p>
          <a href="http://localhost:3000/"className='link_home'>Retourner sur la page d'accueil</a>
      </main>
    </div>
  

  );
}

export default Error;