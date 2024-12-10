import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AllContext from "../contexts/AllContext";

const Selection = () => {
  const { setCategoryName, setCategoryNumber, categoryName, categoryNumber, setDifficulty } =
    useContext(AllContext);
  const category_number = [
    0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32,
  ];

  const category_name = [
    "Any Category",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science and Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoons and Animations",
  ];

  const difficulty = ["Any Difficulty", "easy", "medium", "hard"];

  const handleCategoryChange = (e) => {
    const index = e.target.value;
    setCategoryName(category_name[index]);
    setCategoryNumber(category_number[index]);
  };

  const handleDifficultyChange = (e) => {
    const index = e.target.value
    setDifficulty(difficulty[index])
  }
  return (
    <div className="p-6">
      <form className="max-w-sm mx-auto">
        <div className="m-2 mb-5">
          <label
            htmlFor="category"
            className="block mb-2 px-2 text-lg font-medium text-pink-200"
          >
            Select Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={handleCategoryChange}
          >
            {category_name.map((name, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="m-2 mb-5">
          <label
            htmlFor="difficulty"
            className="block mb-2 px-2 text-lg font-medium text-pink-200"
          >
            Select Difficulty
          </label>
          <select
            id="difficulty"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={handleDifficultyChange}
          >
            {difficulty.map((name, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
        <Link to='questions'>
        <button className="bg-sky-300 p-3 px-4 rounded-xl text-lg text-center font-bold text-blue-950 hover:bg-sky-400 mx-auto">Start Quiz</button></Link>
        </div>
      </form>
    </div>
  );
};

export default Selection;
