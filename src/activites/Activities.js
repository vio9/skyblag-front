import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import './activites.scss';

function Activities(){
    return(
        <div className="actvites-wrapper">
            <Header/>
            <p>coucou game header</p>
          
            <NavLink className='activites-link'to='./quiz'>
                Découvre quel est ton animal totem
            </NavLink>
       
            <Footer/>
        </div>
    )
}

export default Activities;