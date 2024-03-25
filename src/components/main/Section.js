import React from 'react';
import '../../styles/components/main/section.scss';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Main (){
    const [logements, updateLogements] = useState([])
    useEffect (()=> { 
      fetch ('http://localhost:3000/logements.json')
        .then (response => response.json())
        .then (data => updateLogements(data))
    }, [])

    return (
        <main>
            <div className='background_housing'>
              <div className='housing-cards'>
                {logements.map(housing => (
                        <div key={housing.id} className='housing-card'>
                            <div className='container_housing'>  
                                <Link to={`/logement/${housing.id}`}>
                                <img src={housing.cover} alt={housing.title} className='img_housing'/>
                                <h3>{housing.title}</h3>
                                </Link>
                            </div>
                        </div>
                ))}

            </div>  
            </div>  
            
        </main>
    )
}

export default Main;