import React from "react";

const QuestionItem = ({ question, handleAnswer, questionNumber, totalQuestions }) => {
  const decodeHTML = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort(() => Math.random() - 0.5); // Randomize answers

  return (
    <div className="flex justify-center items-center">
    <div className="max-w-md">
      <h2 className="text-xl font-bold mb-4 text-yellow-200 text-center">
        Question {questionNumber}/{totalQuestions}
      </h2>
      <p className="mb-6 bg-sky-500 text-sky-50 p-4 text-center rounded-xl">{decodeHTML(question.question)}</p>
      <div className="grid grid-cols-2 gap-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="bg-[#caf0f8] text-blue-900 p-3 rounded-lg grid-cols-2 hover:bg-[#90e0ef]"
            onClick={() => handleAnswer(answer === question.correct_answer)}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default QuestionItem;
