import { useEffect, useState } from "react";
import axios from "axios";
import QuizComponent from "./QuizComponent";
import './quiz.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimalTotemComponent from "./AnimalTotem";

function Quiz(){

    const [questionsData, setQuestionsData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);
    const [animalTotems, setAnimalTotems] = useState([]);
    const [chosenAnimal, setChosenAnimal] = useState(null);

    const getQuiz = async () => {
       try{
           const result = await axios.get("https://skyblag-back.onrender.com/api/getAllQuiz");
           setQuestionsData(result.data)
           console.log(result.data)
       } 
       catch(error){
           console.log(error)
       }
   }

   const getAnimalTotem = async () => {
    try{
        const result = await axios.get('https://skyblag-back.onrender.com/api/getAllAnimalsTotem');
        setAnimalTotems(result.data)
        console.log(result.data)
    }
    catch(error){
        console.log(error)
    }
   }

   useEffect(() => {
       getQuiz();
       getAnimalTotem();
   }, [])

   const handleAnswerChange = (id, answerScore) => {
    setSelectedAnswers(prevSelectedAnswers => ({
       ...prevSelectedAnswers,
      [id]: answerScore
    }));
    setSelectedAnswersArray(prevSelectedAnswersArray => {
        const updatedSelectedAnswersArray = [...prevSelectedAnswersArray];
        updatedSelectedAnswersArray.push(answerScore);
        return updatedSelectedAnswersArray;
    });
   }
   let numberArray;

   const onSubmit = () => {
    console.log('tableau:',selectedAnswersArray)
    numberArray = selectedAnswersArray.map(Number).reduce((total, current) => total +current, 0);
    console.log(numberArray)
    setChosenAnimal(AnimalTotem());
   }    

   let animalChoose;
   function AnimalTotem(){
    if(numberArray ==8){
    animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('panda')))
        console.log(animalChoose)
    } else if(numberArray >8 && numberArray <=10){
    animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('poney')))
        console.log(animalChoose)
    } else if(numberArray > 10 && numberArray <=15){
       alert("ton animal totem est la poubelle")
    } else if(numberArray > 15 && numberArray <=20){
        alert("ton animal totem est le rat dégueu et pas le rat d'égoût")
    }
   } 

    return(
        <div className="quiz-wrapper">
            <Header/>
            <h1 className="quiz-title">Découvrez votre animal totem</h1>
            {
                questionsData.map((item, index) => (
                    <QuizComponent key={index} 
                        {...item} 
                        index={index}
                        onAnswerChange={handleAnswerChange}
                    />
                ))
            }
          
         
            <button onClick={onSubmit}>envoyer</button>
            {chosenAnimal &&(
                <AnimalTotemComponent
                    name={chosenAnimal.name}
                    image={chosenAnimal.image}
                    description1={chosenAnimal.description1}
                    description2={chosenAnimal.description2}
                    conseil={chosenAnimal.conseil}
                />
            )
         }
            <Footer/>
        </div>
    )
}

export default Quiz;