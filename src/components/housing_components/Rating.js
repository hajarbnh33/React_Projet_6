import '../../styles/app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Rating ({houseData}){
    return (
        <div className='raiting'>
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < houseData.rating ? 'star-filled' : ''}`}>
                    <FontAwesomeIcon icon={solidStar} />
                </span>
            ))}
        </div>
    )
}

export default Rating;