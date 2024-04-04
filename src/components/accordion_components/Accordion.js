import React, { useState } from 'react';
import '../../styles/components/accordion/accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion ({contentData}) { 
    const [activeIndex, setActiveIndex] = useState([]);

    //basculer l'état du collapse
    const toggleAccordion = (index) => {
    if (activeIndex.includes(index)) {
        //fermer en le retirant du tableau si ouvert
        setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
        // Sinon ouvrir en ajoutant l'index au tableau
        setActiveIndex([...activeIndex, index]);
    }
};

    return (
        <section className='section_about'>
        <div className='collapse'>
            {contentData.map((content, index) => (
                <div
                    className={`collapse__item ${activeIndex.includes(index) ? '' : 'collapse__item--closed'}`}
                    key={index}
                    onClick={() => toggleAccordion(index)}
                >
                    <div className='collapse__menu'>
                        {content.name}
                        <FontAwesomeIcon icon={faChevronUp} className='fa-chevron-up'/>
                    </div>
                    <p className='collapse__content'>{content.content}</p>
                </div>
            ))}
        </div> 
    </section>)
}

export default Accordion;
