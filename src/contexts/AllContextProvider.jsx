import React, { useEffect, useState } from "react";
import AllContext from "./AllContext";

const AllContextProvider = ({ children }) => {
  let [categoryNumber, setCategoryNumber] = useState(0);
  let [categoryName, setCategoryName] = useState("Any Category");
  let [difficulty, setDifficulty] = useState("Any Difficulty");
  let [url, setUrl] = useState("https://opentdb.com/api.php?amount=10&type=multiple");

  useEffect(() => {
      if (categoryNumber !== 0 && difficulty !== "Any Difficulty") {
        setUrl(
          `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`
        );
      }
      if (categoryNumber !== 0 && difficulty === "Any Difficulty") {
        setUrl(
          `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&type=multiple`
        );
      }
      if (categoryNumber === 0 && difficulty !== "Any Difficulty") {
        setUrl(
          `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
        );
      }
    },
    [categoryNumber, difficulty]);
  return (
    <AllContext.Provider
      value={{
        categoryName,
        setCategoryName,
        categoryNumber,
        setCategoryNumber,
        difficulty,
        setDifficulty,
        url
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default AllContextProvider
