import './apropos-home.scss';
import LinkGeneric from '../utils/LinkGeneric';

function AproposHome(){
    return(
        <div className="about-home-wrapper">
            <h2 className='about-home-title'>Bienvenue sur mon blog !</h2>
            <p className='about-home-text'>Je vous propose de voyager avec moi à la Réunion, de découvrir les paysages et les endroits extraordinaires de cette île.</p>
            <p className='about-home-text'>Ce blog est entièrement codé par mes soins (front, back, base de données et API), 
            et vous pouvez retrouver le projet sur mon <LinkGeneric adress='https://github.com/vio9' text='profil Github'/></p>
            <div className='about-home-wrap-img'>
                <img className='about-home-img' src='https://i.postimg.cc/tRscCsPm/coucher-soleil-ocean.jpg' />
            </div>
  
        </div>
    )
}

export default AproposHome;