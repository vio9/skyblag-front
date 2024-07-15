import Header from "./header/Header";
import Posts from "./posts/Posts";
import Footer from "./footer/Footer";
import "./style.scss";
import AproposHome from "./about/AproposHome";

function Home(){
    return(
        <div className="home">
        <Header/>
        <AproposHome/>
        <Posts/>
        <Footer/>
        </div>
    )
}

export default Home;