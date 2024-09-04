import Header from "../header/Header";
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import "./wow-style.scss";
import Footer from "../footer/Footer";
import Loader from "../utils/loader/Loader";
import HandleScroll from "../utils/handlescroll/HandleScroll";

function OhWow(){
    const [postsWow, setPostsWow] = useState([]);
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

    const LazyImage = lazy(() => import('../utils/lazy/LazyImageGeneric'));

    return(
        <div className="oh-wow">
            <Header/>
            <p className="wow-presentation">Des photos avec des titres ! WOW</p>
            <div className="wow-imgs-container">
            {
                postsWow.map(item => (
                    <>
                    <div className="wow-container" >
                    <h2 className="wow-title" key={item.id}>{item.title}</h2>
                    <Suspense fallback={<Loader/>}>
                        <LazyImage src={item.image} alt="paysages" className="wow-image"  />
                    </Suspense>      
                    </div>
                    </>
                ))
            }
            </div>
            <Footer/>
            <HandleScroll/>
        </div>
    )
}

export default OhWow;