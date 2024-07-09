import { useState, useEffect } from "react";
import "./handlescroll.scss";

function HandleScroll(){

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(scrollTop > 500){
                setVisible(true);
            } else {
                setVisible(false)
            }
        }
        const scrollToTop = () => {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            });
        };
    
        useEffect(() => {
            document.addEventListener("scroll", handleScroll);
            return () => {
                document.removeEventListener("scroll", handleScroll)
            }
        }, []);
        
    return(
        <>
         <button id={`scroll-button-${visible ? "visible" : ""}`}onClick={scrollToTop}>haut de page</button>
        </>
    )
}

export default HandleScroll;