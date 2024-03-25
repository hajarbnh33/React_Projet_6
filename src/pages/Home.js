import React from 'react';
import '../styles/app.css';
import Main from '../components/main/Section';
import Banner from '../components/headers/Banner';

function Home({bannerImage}) {
  return <div>
  <Banner bannerImage={bannerImage}/>
   <Main />
    </div>;
}

export default Home;