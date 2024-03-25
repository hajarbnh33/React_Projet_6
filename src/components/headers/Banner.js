import React from 'react';
import '../../styles/app.css';

function Banner({bannerImage, showTitle = true}) {
  return (
    <div className="header_up">
      <img src={bannerImage} alt="falaise" className="banner" />
      {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;