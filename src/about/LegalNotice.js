import Footer from "../footer/Footer";
import Header from "../header/Header";
import './legal-notice.scss';

function LegalNotice(){
return(
    <div className="legal-wrapper">
        <Header/>
        <h2 className="legal-title">Mentions légales</h2>
        <div className="legal-text">
            <p className="legal-p"><strong>Editeur du site :</strong>  Violaine E.</p>
            <p className="legal-p"><strong>Directrice de la publication:</strong> Violaine E.</p>
            <p className="legal-p"><strong>Courrier electronique :</strong> skyblag-blog@proton.me</p>
            <p className="legal-p">Ce site est hébergé par la société Vercel Inc., 
                située 340 S Lemon Ave #4133 Walnut, CA 91789, USA
                et joignable au (559) 288-7060
            </p>
            <p className="legal-p"><strong>Site internet hébergeur : </strong>https://vercel.com</p>
        </div>
        <Footer/>
    </div>
   
)
}

export default LegalNotice;