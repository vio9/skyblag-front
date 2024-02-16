
import { Link } from "react-router-dom";

function Header(){
return(
    <>
    <div className="header">
        <h1 className="title-blog">Bienvenue sur mon Skyblag</h1>
        <ul className="navbar">
            <li><Link to="/" className="link_navbar">Accueil 🪴</Link></li>
            <li><Link to="/apropos" className="link_navbar">A propos 👩🏻‍💻</Link></li>
            <li><Link to="/envrac" className="link_navbar">En vrac 🧺 </Link></li>
            <li><Link to="/ohwow" className="link_navbar">Oh WOW ✨</Link></li>
        </ul>
    </div>

    </>
)
}

export default Header;