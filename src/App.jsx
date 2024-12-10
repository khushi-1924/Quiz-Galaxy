import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import Questions from "./components/Questions";
import AllContextProvider from "./contexts/AllContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <AllContextProvider>
      <div className="w-full">
        <Navbar />
        {/* <Selection /> */}
        {/* <h1 className='text-center text-4xl text-sky-200 p-3 font-bold'>Welcome to Quiz Galaxy</h1> */}
        <Routes>
          <Route exact path="/" element={<Selection />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </AllContextProvider>
    </BrowserRouter>
  );
}

export default App;
