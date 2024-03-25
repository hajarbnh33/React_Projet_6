import React, { useState } from 'react';
//import '../styles/app.css';
import Accordion from '../components/accordion_components/Accordion';
import Banner from '../components/headers/Banner';

function About({bannerImage,showTitle}) {
   // Définir l'état initial de chaque section
   const [contentData] = useState([
      { 
          name: 'Fiabilité', 
          state: false, 
          content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' 
      },
      { 
          name: 'Respect', 
          state: false, 
          content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' 
      },
      { 
          name: 'Service', 
          state: false, 
          content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' 
      },
      { 
          name: 'Sécurité', 
          state: false, 
          content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' 
      }
   ]);

  return (
    <div>     
      <Banner bannerImage={bannerImage} showTitle= {false}/>
      <Accordion contentData={contentData}/>
    </div>
  );
}

export default About;
