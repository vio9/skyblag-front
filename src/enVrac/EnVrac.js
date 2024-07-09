import Header from "../header/Header";
import Footer from "../footer/Footer";
import './envrac.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import EnVracPost from "./EnVracPost";
import HandleScroll from "../utils/handlescroll/HandleScroll";

function EnVrac(){

    const [enVracPosts, setEnVracPosts] = useState([]);
    const urlAPiEnVrac = process.env.REACT_APP_API_ENVRAC;

    const getEnVracPosts = async () => {
        try{
             const result = await axios.get(urlAPiEnVrac);
            setEnVracPosts(result.data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getEnVracPosts();
    }, [])

    return(
        <div className="en-vrac">
            <Header color="three"/>
            <h3 className="big-title-en-vrac">Des choses en vrac</h3>
            <div className="wrapper-general">
            {
                enVracPosts.map(item => (
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
            <Footer/>
            <HandleScroll/>

        </div>
    )
}

export default EnVrac;