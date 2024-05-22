import './animal-totem.scss';
import { useState, useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

function AnimalTotemComponent({name, image, description1, description2, conseil, isAppears}){

const [close, setClose] = useState(true);

const confettiRef = useRef();
const canvaRef = useRef();

const  closeAnimal = () => {
    setClose(false)
}

if(isAppears){
    confettiRef.current = new JSConfetti({canva: canvaRef.current})
    confettiRef.current.addConfetti({
        emojis: ['🦜', '🐕', '🦦', '🦊'],
        confettiRadius:5,
        confettiNumber: 42
    });
}

    return(
        <div className={close ?`animal-wrapper` : `close-animal`}>
             <canvas className="canvas" ref={canvaRef} />
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