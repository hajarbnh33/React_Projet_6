import React, { useState } from 'react';
import '../../styles/components/accordion/accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion ({contentData}) { 
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => { 
        if (activeIndex === index) { 
            setActiveIndex(null); 
        } else {
            setActiveIndex(index);
        }
    };


    return (
        <section className='section_about'>
        <div className='collapse'>
            {contentData.map((content, index) => (
                <div
                    className={`collapse__item ${activeIndex === index ? '' : 'collapse__item--closed'}`}
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
