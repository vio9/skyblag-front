import { useState, useEffect, Suspense, lazy } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import './apropos.scss';
import StarContainer from "../utils/StarContainer";
import Cloud from "../utils/Cloud";
import Loader from "../utils/loader/Loader";
import HandleScroll from "../utils/handlescroll/HandleScroll";

function Apropos(){

    const [infosVideos, setInfosVideos] = useState([]);
    const [infosSeries, setInfosSeries] = useState([]);

    const urlApiVideos = process.env.REACT_APP_API_VIDEOS;
    const urlApiSeries = process.env.REACT_APP_API_SERIES;
    
    const getInfosVideos = async () => {
        try{
            const result = await axios.get(urlApiVideos)
            setInfosVideos(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    const getInfosSeries = async () => {
        try{
            const result = await axios.get(urlApiSeries)
            setInfosSeries(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getInfosVideos()
        getInfosSeries()
    }, []);

    const LazyPlayer = lazy(() => import('../utils/LazyPlayer'));

    return(
        <div className="a-propos">
             <Header color="white"/>
            <div className="about-content">
              <Cloud/>  
            <StarContainer/>
                <div className="mini-wrapper-about">
                    <HandleScroll/>
                <h3 className="about-title">Informations pros : </h3>
                <p className="about-p">Rendez-vous sur mon LinkedIn <a className='about-link' href="https://www.linkedin.com/in/violaine-ernotte/" target="_blank" rel="noopener noreferrer">par ici </a></p>
                <p className="about-p">Retrouvez ce site  ainsi que d'autres projets sur <a className='about-link' href="https://github.com/vio9" target="_blank" rel="noopener noreferrer">mon profil Github</a></p>            
                <h3 className="about-title">Derniers films vus : </h3>
               {
                infosVideos.map(item => (
                    <Suspense fallback={<div><Loader/></div>}>
                         <LazyPlayer
                        key={item.id}
                        title={item.title}
                        src={item.src}
                    />
                    </Suspense>
                   
                ))
               }
               
               <h3 className="about-title">Dernières séries vues: </h3>
               {
                infosSeries.map(item => (
                    <Suspense fallback={<div><Loader/></div>}>
                        <LazyPlayer
                            key={item.id}
                            title={item.title}
                            src={item.src}
                        />
                    </Suspense>
                ))
               }
               <h3 className="about-title">Podcasts préférés</h3>
              <p className="about-p"><a className="about-link" href="https://www.radiofrance.fr/franceinter/podcasts/quand-les-dieux-rodaient-sur-la-terre/quand-les-dieux-rodaient-sur-la-terre-du-samedi-04-novembre-2023-1272749"> 🎧 Quand les dieux rodaient sur la terre, les épisodes sur Achille</a></p> 
              <p className="about-p"><a className="about-link" href= "https://embed.acast.com/$/63a6f9cd471563001006a3a8/dune-2?feed=true">🎧 Réalisé sans trucage, podcast critique ciné</a></p>
              <h3 className="about-title">Jeu vidéo du moment</h3>
                <p className="about-p">Baldur's Gate 3</p>
                <Suspense fallback={<div><Loader/></div>}>
                    <LazyPlayer
                    title="Baldur's Gate 3"
                    src="https://www.youtube.com/embed/fxOGBxg8nsY?si=sLacyFIZGtHlbZzG"
                    />
                </Suspense>
                
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Apropos;