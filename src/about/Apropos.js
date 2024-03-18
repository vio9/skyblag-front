import { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import './apropos.scss';
import Player from "../utils/Player";
import StarContainer from "../utils/StarContainer";
import Cloud from "../utils/Cloud";

function Apropos(){

    const infosVideos = [

        {
              "_id": "65e8696c51b21f53a3ac6773",
              "title": "la Zone d'intérêt",
              "src": "https://www.youtube-nocookie.com/embed/m6cz6xTgkIY?si=_qCBeQ5wLbSaQT2i&amp;controls=0",
              "__v": 0
        },
        {
              "_id": "65e86ba4c3f788360cccc745",
              "title": "Dune - 2eme partie",
              "src": "https://www.youtube-nocookie.com/embed/XyGGWcr0uhc?si=f6LCmWKccXHdi_Lo&amp;controls=0",
              "__v": 0
        }
  
  ]
    // const [infosVideos, setInfosVideos] = useState([]);


    
    // const getInfosVideos = async () => {
    //     try{
    //         const result = await axios.get('http://localhost:4400/api/getAllVideos')
    //         setInfosVideos(result.data)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getInfosVideos()
    // }, [])


    return(
        <div className="a-propos">
             <Header color="white"/>
            <div className="about-content">
              <Cloud/>  
            <StarContainer/>
                <div className="mini-wrapper-about">
                <h3 className="about-title">Informations pros : </h3>
                <p className="about-p">Rendez-vous sur mon LinkedIn <a className='about-link' href="https://www.linkedin.com/in/violaine-ernotte/" target="_blank" rel="noopener noreferrer">par ici </a></p>
                <p className="about-p">Retrouvez ce site  ainsi que d'autres projets sur <a className='about-link' href="https://github.com/vio9" target="_blank" rel="noopener noreferrer">mon profil Github</a></p>            
                <h3 className="about-title">Derniers films vus : </h3>
               {
                infosVideos.map(item => (
                    <Player
                        key={item.id}
                        title={item.title}
                        src={item.src}
                    />
                ))
               }
               <h3 className="about-title">Podcasts préférés</h3>
               <a className="about-link" href="https://www.radiofrance.fr/franceinter/podcasts/quand-les-dieux-rodaient-sur-la-terre/quand-les-dieux-rodaient-sur-la-terre-du-samedi-04-novembre-2023-1272749"> 🎧 Quand les dieux rodaient sur la terre, les épisodes sur Achille</a>
              <a className="about-link" href= "https://embed.acast.com/$/63a6f9cd471563001006a3a8/dune-2?feed=true">🎧 Réalisé sans trucage, podcast critique ciné</a>
              <h3 className="about-title">Jeu vidéo du moment</h3>
                <p>Baldur's Gate 3</p>
                <Player
                title="Baldur's Gate 3"
                src="https://www.youtube.com/embed/fxOGBxg8nsY?si=sLacyFIZGtHlbZzG"
                />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Apropos;