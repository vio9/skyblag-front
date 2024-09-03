import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import './error.scss'
import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="error-wrapper">
        <Header/>
        <h1 className="error-title">Erreur 404</h1>
        <div className="error-wrapper-p">
        <p className="error-p">Oups ! Il semble que la page demandée n'existe pas. Voici un joli paysage à la place.</p>
        <p className="error-p">Retourner à <Link to="/" className="error-link">l'accueil 🪴</Link></p>
        <img className='error-img' src='https://i.postimg.cc/4xsJfM7Y/reunion-paysage-montagne.jpg'/>
        </div>
        <Footer/>
        </div>
    )
}

export default Error;