import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import '../styles/app.css';
import '../styles/components/housing_component/house.scss';
import Host from '../components/housing_components/Host';
import Rating from '../components/housing_components/Rating';
import Tags from '../components/housing_components/Tag';
import Slide from '../components/housing_components/Slides';
import Accordion from '../components/accordion_components/Accordion';

const Housing = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    //états locaux
    const [houseData, setHouseData] = useState({});
    const [picturesHouse, setPictures] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/logements.json`);
                const data = await response.json();
                const house = data.find(house => house.id === id); //Cette ligne recherche dans les données des logements la maison dont l'identifiant correspond à celui extrait de l'URL à l'aide de useParams
                if (!house) {
                    navigate('/404');
                    return;
                }
                const housePictures = house ? house.pictures : []; //si logement trouvé
                setPictures(housePictures);
                setHouseData(house ? house : {});
                setDataLoaded(true);
            } catch (error) {
                console.error('Erreur lors de la récupération des images de maison:', error);
            }
        };

        if (!dataLoaded) {
            fetchData(); 
        }
    }, [dataLoaded, id, navigate]); //l'effet est exécuté lorsque l'une des valeurs listées dans le tableau change. 

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % picturesHouse.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + picturesHouse.length) % picturesHouse.length);
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
                                { name: 'Equipements', content: houseData.equipments || [] } //si valeur null, tab vide, Cela garantit que le composant Accordion peut toujours rendre correctement les données, même si houseData.equipments est absent ou non défini.
                            ]} 
                        />
                    )}   
                </div>
            </section> 
        </div>          
    );
};

export default Housing;