import './animal-totem.scss';
import { useState } from 'react';

function AnimalTotemComponent({name, image, description1, description2, conseil}){

const [close, setClose] = useState(true)

const  closeAnimal = () => {
    setClose(false)
}

    return(
        <div className={close ?`animal-wrapper` : `close-animal`}>
            <h2 className="animal-title">Animal totem : {name}</h2>
            <img className="animal-img" src={image}/>
            <p className="animal-p">{description1}</p>
            <p className="animal-p">{description2}</p>
            <p className="animal-conseil">Conseil : {conseil}</p>
            <button  onClick={closeAnimal}
            className='animal-close'>fermer</button>
        </div>
    )
}

export default AnimalTotemComponent;