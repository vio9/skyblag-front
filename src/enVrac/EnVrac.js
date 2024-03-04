import Header from "../header/Header";
import Footer from "../footer/Footer";
import './envrac.scss';
import Construction from "../utils/Construction";

function EnVrac(){
    return(
        <div className="en-vrac">
            <Header/>
            <Construction/>
            <Footer/>

        </div>
    )
}

export default EnVrac;