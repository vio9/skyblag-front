import { useEffect, useState } from "react";
import axios from "axios";
import QuizComponent from "./QuizComponent";
import './quiz.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimalTotemComponent from "./AnimalTotem";
import categoriesAnimals from "../data/categoriesAnimals";
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


   function AnimalTotem(numberArray){
    const oneCategorieAnimal = categoriesAnimals.find(cat => numberArray >= cat.min && numberArray <= cat.max);
    if(!cat) return [];
 
    const animalName = cat.animal;
    const animalChoose = animalTotem.filter(animal => animal.name.includes(animalName));
    return animalChoose 
   } 

   console.log("chosen anilmal value : ",chosenAnimal)
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
         {
            chosenAnimal ?
            chosenAnimal.map((item) => (
                <AnimalTotemComponent
                    name={item.name}
                    image={item.image}
                    description1={item.description1}
                    description2={item.description2}
                    conseil={item.conseil}
                />
            )) : <p>coucou</p>
         }
            <Footer/>
        </div>
    )
}

export default Quiz;



    // let animalChoose;
    // if(numberArray ==8){
    // animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('rat-taupe')))
    //     console.log(animalChoose)
    // } else if(numberArray >8 && numberArray <=10){
    // animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('scolopendre')))
    //     console.log(animalChoose)
    // } else if(numberArray > 10 && numberArray <=13){
    //     animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('rat-taupe')))
    // } else if(numberArray > 13 && numberArray <=16){
    //     animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('chat')))
    // } else if(numberArray > 16 && numberArray <=19){
    //     animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('poney')))
    // }
    // else if(numberArray > 19 && numberArray <=21){
    //     animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('komodor')))
    // }
    // else if(numberArray > 21 && numberArray <=24){
    //     animalChoose =  animalTotems.filter((animalChosen) => ( animalChosen.name.includes('panda')))
    // }
    // return animalChoose;