import React from "react";
import { useState } from "react";

const QuizApp = () => {
    
  const Question = ["Q1", "Q2", "Q3"];
  const Answer = ["A1", "A2", "A3"];
  const CorrectAnswer = ["A1", "A2", "A3"];
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <div className="flex flex-col">
        <label>Question</label>
        <label>Question Counter / Total</label>
      </div>

      <div className="flex gap-2">
        <input type="radio" />
        <label>ans1</label>
      </div>

      <div className="flex gap-2">
        <input type="radio" />
        <label>ans2</label>
      </div>

      <div className="flex gap-2">
        <input type="radio" />
        <label>ans3</label>
      </div>
    </div>
  );
};

export default QuizApp;
