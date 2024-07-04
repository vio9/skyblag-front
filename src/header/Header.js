import { Link } from "react-router-dom";
import './header-style.scss';

function Header({color}){



return(
    <>
    <div className="header">
        <h1 className={`title-blog ${color}`}>Skyblag</h1>
        <hr className="title-blog-separator"/>
        <ul className="navbar">
            <li><Link to="/" className="link_navbar">Accueil 🪴</Link></li>
            <li><Link to="/ohwow" className="link_navbar">Oh wow ✨</Link></li>
            <li><Link to="/envrac" className="link_navbar">En vrac 🧺 </Link></li> 
            <li><Link to="/apropos" className="link_navbar">A propos 👩🏻‍💻</Link></li>
            <li><Link to="/quiz" className="link_navbar">Activités 🎮</Link></li>
        </ul>
    </div>

    </>
)
}

export default Header;