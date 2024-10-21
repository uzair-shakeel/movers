// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import AdditionalQuestions from "./pages/AdditionalQuestions";
import "./App.css";
import ResultPage from "./pages/Result";
import MovingForm from "./pages/form";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initialQuestions" element={<AdditionalQuestions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/form" element={<MovingForm />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
