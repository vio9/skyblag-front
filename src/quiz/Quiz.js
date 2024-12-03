import { useEffect, useState } from "react";
import axios from "axios";
import QuizComponent from "./quiz-component/QuizComponent";
import "./quiz.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimalTotemComponent from "./animal-totem/AnimalTotem";
import categoriesAnimals from "../data/categoriesAnimals";
import {
	categoriesAnimals2,
	categoriesAnimals3,
} from "../data/categoriesAnimals";
import Loader from "../utils/loader/Loader";

function Quiz() {
	const [questionsData, setQuestionsData] = useState([]);
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);
	const [animalTotems, setAnimalTotems] = useState([]);
	const [chosenAnimal, setChosenAnimal] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [dataLoad, setDataLoad] = useState(false);
	const [displayNextButton, setDisplayNextButton] = useState(true);
	const [isAppears, setIsAppears] = useState(false);
	const [loading, setLoading] = useState(false);
	const largeLoader = true;

	const urlApiQuiz = process.env.REACT_APP_API_QUIZ;
	const urlApiAnimalsTotem = process.env.REACT_APP_API_ANIMALS_TOTEM;
	const getQuiz = async () => {
		try {
			setLoading(true);
			const result = await axios.get(urlApiQuiz);
			setQuestionsData(result.data);
			setDataLoad(true);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getAnimalTotem = async () => {
		try {
			const result = await axios.get(urlApiAnimalsTotem);
			setAnimalTotems(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getQuiz();
		getAnimalTotem();
	}, []);

	const handleAnswerChange = (id, answerScore) => {
		setSelectedAnswers((prevSelectedAnswers) => ({
			...prevSelectedAnswers,
			[id]: answerScore,
		}));

		setSelectedAnswersArray((prevSelectedAnswersArray) => {
			const updatedSelectedAnswersArray = [...prevSelectedAnswersArray];
			updatedSelectedAnswersArray.push(answerScore);

			if (updatedSelectedAnswersArray.length === 10) {
				setDisabled(false);
				setDisplayNextButton(false);
				onSubmit(updatedSelectedAnswersArray);
			}
			return updatedSelectedAnswersArray;
		});
	};

	// calculer quel est l'animal totem
	let numberArray;

	function AnimalTotemCalculate(numberArray) {
		const oneCategorieAnimal = categoriesAnimals3.find(
			(categorie) =>
				numberArray >= categorie.min && numberArray <= categorie.max
		);
		if (!oneCategorieAnimal) return [];

		const animalName = oneCategorieAnimal.animal;
		const animalChoose = animalTotems.filter((animal) =>
			animal.name.includes(animalName)
		);
		return animalChoose;
	}

	// envoyer

	const onSubmit = (updatedSelectedAnswersArray) => {
		numberArray = updatedSelectedAnswersArray
			.map(Number)
			.reduce((total, current) => total + current, 0);
		const chosenAnimalResult = AnimalTotemCalculate(numberArray);
		setChosenAnimal(chosenAnimalResult);
		setIsAppears(true);
	};

	const handleNextQuestion = () => {
		setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
	};

	const resetQuiz = () => {
		window.location.reload();
	};

	return (
		<>
		<div className="quiz-wrapper">
			<Header />
			<h1 className="quiz-title">Découvrez votre animal totem</h1>
			{loading ? <Loader sizeLoader={largeLoader} /> : null}

			{dataLoad && (
				<div className="test">
					{chosenAnimal ? null : (
						<QuizComponent
							{...questionsData[currentQuestionIndex]}
							onAnswerChange={handleAnswerChange}
							handleNextQuestion={handleNextQuestion}
							displayNextButton={displayNextButton}
						/>
					)}
				</div>
			)}
			{chosenAnimal
				? chosenAnimal.map((item) => (
						<AnimalTotemComponent
							name={item.name}
							image={item.image}
							description1={item.description1}
							description2={item.description2}
							conseil={item.conseil}
							legend={item.legend}
							isAppears={isAppears}
							onClose={resetQuiz}
						/>
				  ))
				: null}
			
		</div>
		<Footer />
		</>
	);
}

export default Quiz;
