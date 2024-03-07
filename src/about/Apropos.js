import { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import './apropos.scss';
import Player from "../utils/Player";

function Apropos(){
    const [infosVideos, setInfosVideos] = useState([]);
    
    const getInfosVideos = async () => {
        try{
            const result = await axios.get('http://localhost:4400/api/getAllVideos')
            console.log(result.data)
            setInfosVideos(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getInfosVideos()
    }, [])


    return(
        <div className="a-propos">
             <Header color="white"/>
            <div className="about-content">
            <i class="cloud"></i>​
                <div className="mini-wrapper-about">
                <h2 className="about-title">Informations pros : </h2>
                <p className="about-p">Rendez-vous sur mon LinkedIn <a className='about-link' href="https://www.linkedin.com/in/violaine-ernotte/" target="_blank" rel="noopener noreferrer">par ici </a></p>
                <p className="about-p">Retrouvez ce site  ainsi que d'autres projets sur <a className='about-link' href="https://github.com/vio9" target="_blank" rel="noopener noreferrer">mon profil Github</a></p>            
               <p className="about-p">Derniers films vus : </p>
               {
                infosVideos.map(item => (
                    <Player
                        title={item.title}
                        src={item.src}
                    />
                ))
               }
                </div>
                <img className="about-image" src="https://i.postimg.cc/kMtHhpYD/20231102-182604.jpg" />
            </div>
            <i class="cloud2"></i>
            <i class="cloud3"></i>
            <Footer/>
        </div>
    )
}

export default Apropos;