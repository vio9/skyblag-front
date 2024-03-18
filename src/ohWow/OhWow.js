import Header from "../header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./wow-style.scss";
import Footer from "../footer/Footer";
import Loader from "../utils/Loader";

function OhWow(){
    const [postsWow, setPostsWow] = useState([]);
    const [Loading, setLoading] = useState(true);

    const getWowPost =  async () => {
        try{
            const result = await axios.get('http://localhost:4400/api/getAllOhWow');
            setPostsWow(result.data);
            setLoading(false);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getWowPost()
    }, [])

    return(
        <div className="oh-wow">
            <Header/>
            <p className="wow-presentation">Des photos avec des titres ! WOW</p>
            <div className="wow-imgs-container">
            {
                postsWow.map(item => (
                    <div className="wow-container">
                    <h2 className="wow-title">{item.title}</h2>
                    {
                        Loading ?  <Loader/> : <img className="wow-image" src={item.image} alt="paysages"/> 
                    } 
                    </div>
                ))
            }
            </div>
            <Footer/>
        </div>
    )
}

export default OhWow;