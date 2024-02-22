import Header from "./header/Header";
import Posts from "./posts/Posts";
import Footer from "./footer/Footer";
import "./style.scss";
function Home(){
    return(
        <div className="home">
        <Header/>
        <Posts/>
        <Footer/>
        </div>
    )
}

export default Home;