import { useParams } from "react-router-dom";
import React from 'react';
import '../styles/app.css';
import House from '../components/housing_components/House';

const Housing = () => {
    let { id } = useParams();

    return (
    <div>
        <House houseId={id}/>
    </div>
  
    
    );
};

export default Housing;