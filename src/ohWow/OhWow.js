import Header from "../header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./wow-style.scss";
import Footer from "../footer/Footer";
import Loader from "../utils/Loader";

function OhWow(){
    const [postsWow, setPostsWow] = useState([]);
    const [Loading, setLoading] = useState(false);
    const urlApiOhWow = process.env.REACT_APP_API_WOW;

    const getWowPost =  async () => {
        try{
            const result = await axios.get(urlApiOhWow);
            setPostsWow(result.data);
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
                    <div className="wow-container" key={item.id}>
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