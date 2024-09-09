import Header from "../header/Header";
import Footer from "../footer/Footer";
import './envrac.scss';
import EnVracPost from "./EnVracPost";
import HandleScroll from "../utils/handlescroll/HandleScroll";
import UseFetch from "../utils/hook/UseFetch";
import Loader from "../utils/loader/Loader";

function EnVrac(){
    const urlAPiEnVrac = process.env.REACT_APP_API_ENVRAC;
    const { data, loading, error} = UseFetch(urlAPiEnVrac);

    return(
        <div className="en-vrac">       
            <Header color="three"/>
            <h3 className="big-title-en-vrac">Des choses en vrac</h3>
            {
                error ? <p>Une erreur est survenue</p>
                : 
                null
            }
            {
                loading? 
                (<Loader/>)
                :
                (
                    <div className="wrapper-general">
                    {
                        data.map(item => (
                            <>
                            <EnVracPost
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                content={item.content}
                            />
                            </>
                        ))      
                    }     
                    </div>
                )
            }
            <Footer/>
            <HandleScroll/>
        </div>
    )
}

export default EnVrac;