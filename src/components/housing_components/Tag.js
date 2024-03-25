import '../../styles/app.css';

function Tags ({houseData}){
    return(
    <ul className='tags'>
        {houseData.tags && houseData.tags.map((item, index)=>(
            <li key={index} className='tags_text'>{item}</li>
        ))}
    </ul> 
)

}

export default Tags;