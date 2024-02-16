import Header from "./Header";
import Posts from "./Posts";
import Footer from "./Footer";
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