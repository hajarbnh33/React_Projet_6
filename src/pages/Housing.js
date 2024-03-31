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

    const [houseData, setHouseData] = useState({});
    const [picturesHouse, setPictures] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/logements.json`);
                const data = await response.json();
                const house = data.find(house => house.id === id);
                if (!house) {
                    navigate('/404');
                    return;
                }
                const housePictures = house ? house.pictures : []; 
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
    }, [dataLoaded, id, navigate]);

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
                                { name: 'Equipements', content: houseData.equipments || [] }
                            ]} 
                        />
                    )}   
                </div>
            </section> 
        </div>          
    );
};

export default Housing;