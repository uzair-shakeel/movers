// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import AdditionalQuestions from "./pages/AdditionalQuestions";
import "./App.css";
import ResultPage from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initialQuestions" element={<AdditionalQuestions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
