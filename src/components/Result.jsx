import React from "react";
import { Link } from "react-router-dom";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-lg">
        You scored <strong>{score}</strong> out of{" "}
        <strong>{totalQuestions}</strong>.
      </p>
      <Link to="/">
        <button className="bg-blue-500 text-white p-3 rounded-lg mt-4">
          Restart Quiz
        </button>
      </Link>
    </div>
  );
};

export default Result;
