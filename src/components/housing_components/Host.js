import '../../styles/components/housing_component/host.scss';

function Host ({houseData}){
    return(
    <div>
    {houseData.host && (
        <div className='host_infos'>
            <p className='host_name'>{houseData.host.name}</p>
            <img src={houseData.host.picture} alt={houseData.host.name} className='host_picture'/>
        </div> 
    )} 

</div>)
}

export default Host;