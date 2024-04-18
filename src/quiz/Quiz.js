import QuizComponent from "./QuizComponent";
import './quiz.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Quiz(){
    return(
        <div className="quiz-wrapper">
            <Header/>
            <h1 className="quiz-title">Découvrez votre animal totem</h1>
            <QuizComponent/>
            <Footer/>
        </div>
    )
}

export default Quiz;