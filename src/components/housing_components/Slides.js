import '../../styles/components/housing_component/slides.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slide ({picturesHouse,currentSlide,nextSlide,prevSlide}){

    return(
        <section className='section_housing'>
            <div className='slideshow'>
                <div className="slide">
                {picturesHouse.length > 1 && (
                    <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide}  className='fa-chevron-left arrow' /> 
                )}
                    <img src={picturesHouse[currentSlide]} alt={`logement ${currentSlide + 1}`} /> 
                    {picturesHouse.length > 1 && (
                      <div className='image_number'>{currentSlide + 1}/{picturesHouse.length}</div>  
                    )} 
                    {picturesHouse.length > 1 && (
                    <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} className='fa-chevron-right arrow'/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Slide;