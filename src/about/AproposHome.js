import './apropos-home.scss';
import LinkGeneric from '../utils/LinkGeneric';

function AproposHome(){
    return(
        <div className="about-home-wrapper">
            <h2 className='about-home-title'>Bienvenue sur mon blog !</h2>
            <p className='about-home-text'>Vous retrouverez ici des photos de lieux et paysages de la Réunion, mais pas seulement. </p>
            <p className='about-home-text'>Ce site est entièrement codé par mes soins (front, back, base de données et API), 
            et vous pouvez retrouver le projet sur mon <LinkGeneric adress='https://github.com/vio9' text='profil Github'/>.</p>
            <p className='about-home-text'>Pour plus d'infos c'est par <LinkGeneric adress='https://skyblag-sage.vercel.app/apropos' text='ici' /></p>
            <div className='about-home-wrap-img'>
                <img className='about-home-img' src='https://i.postimg.cc/tRscCsPm/coucher-soleil-ocean.jpg' />
            </div>
  
        </div>
    )
}

export default AproposHome;