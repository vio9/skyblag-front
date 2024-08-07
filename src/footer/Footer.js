import { Link } from "react-router-dom";
import "./footer-style.scss"

function Footer(){
    return(
        <div className="footer">
            <p className="p-footer">Réseaux : <a className='link-footer'href='https://www.linkedin.com/in/violaine-ernotte/'>Linkedin </a>
             et <a className='link-footer' href='https://github.com/vio9'>Github</a> - </p>
            <p className="p-footer"><Link className="link-footer" to="/mentions-legales">Mentions légales</Link></p>
        </div>
    )
}

export default Footer;