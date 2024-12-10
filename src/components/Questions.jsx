import React, { useContext, useEffect, useState } from "react";
import AllContext from "../contexts/AllContext";
import QuestionItem from "./QuestionItem";
import Result from "./Result";

function Questions() {
  const { url } = useContext(AllContext);

  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const generateQuestion = async () => {
    const data = await fetch(url);
    const parsedData = await data.json();
    setQuizData(parsedData.results);
    console.log(quizData);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      generateQuestion();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  if (!quizData || quizData.length === 0) {
    return <h2 className="text-center text-cyan-200 text-3xl p-4">Loading...</h2>; // Show a loading message while fetching
  }

  return (
    <div className="container mx-auto p-4">
      {!isQuizFinished ? (
        <QuestionItem
          question={quizData[currentQuestionIndex]}
          handleAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizData.length}
        />
      ) : (
        <Result score={score} totalQuestions={quizData.length} />
      )}
    </div>
  );
}

export default Questions;
