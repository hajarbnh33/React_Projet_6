import React, { useState } from 'react';
import '../../styles/components/accordion/accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion ({contentData}) { 
    const [activeIndex, setActiveIndex] = useState(null);
//basculer l'état du collapse
    const toggleAccordion = (index) => { 
        if (activeIndex === index) { 
            setActiveIndex(null); //on ferme la section car index identique
        } else {
            setActiveIndex(index); //on ouvre la nouvelle section et met a jour index   
        }
    };


    return (
        <section className='section_about'>
        <div className='collapse'>
            {contentData.map((content, index) => (
                <div
                    className={`collapse__item ${activeIndex === index ? '' : 'collapse__item--closed'}`} //classe conditionnelle: contrôle l'apparence visuelle des éléments de l'accordéon qui sont fermés.
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
