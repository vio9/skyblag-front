import './animal-totem.scss';

function AnimalTotemComponent({name, image, description1, description2, conseil}){
    return(
        <div className="animal-wrapper">
            <h2 className="animal-title">Animal totem : {name}</h2>
            <img className="animal-img" src={image}/>
            <p className="animal-p">{description1}</p>
            <p className="animal-p">{description2}</p>
            <p className="animal-conseil">Conseil : {conseil}</p>
        </div>
    )
}

export default AnimalTotemComponent;