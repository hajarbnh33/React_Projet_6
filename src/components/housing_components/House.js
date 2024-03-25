import React, { useState, useEffect } from 'react';
import '../../styles/app.css';
import Host from './Host';
import Rating from './Rating';
import Tags from './Tag'
import Slide from './Slides';
import Accordion from '../accordion_components/Accordion';
import { useNavigate } from "react-router-dom";


function House({ houseId }) {
    const [houseData, setHouseData] = useState({});
    const [picturesHouse, setPictures] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();
    const goTo404 = () => navigate('/404');

    useEffect(() => {
        
        if (!dataLoaded){    
        fetch('http://localhost:3000/logements.json')
            .then(response => response.json()) //transforme réponse en objet JSON reutilisable
            .then(data => {
                const house = data.find(house => house.id === houseId);
                if (!house){
                   goTo404()
                }
                const housePictures = house ? house.pictures : [];// pictures est initialiament un tableau vide
                setPictures(housePictures);
                setHouseData(house ? house : {});// house est un objet vide (garanti que toutes les propriétés du logement peuvent etre ajoutées dynamiquement)
                setDataLoaded(true);
            })
            .catch(error => console.error('Erreur lors de la récupération des images de maison:', error));
        }
    },[]);


    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % picturesHouse.length); //modulo va permettre d'assurer que l'index reste dans les limite du nombre total d'image
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + picturesHouse.length) % picturesHouse.length); //index reste toujours positif
    };


    return (
    <div>
        <Slide picturesHouse={picturesHouse} currentSlide={currentSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
        <section className='container'>
            <div className='container_text'>
               <h2>{houseData.title}</h2>
            <p className='location'>{houseData.location}</p>
            <Tags houseData={houseData} />
            </div>
            <div className='container_subtile'>
                  <Host houseData={houseData} />
                  <Rating houseData={houseData} />
            </div>

              <div className='collapse_house'>
          {dataLoaded && (
                <Accordion 
                    contentData={[
                        { name: 'Description', content: houseData.description },
                        { name: 'Equipements', content: houseData.equipments || [] }
                    ]} 
                />
            
        )}   
        </div>
        </section> 

      
    </div>          
    );
}

export default House;
