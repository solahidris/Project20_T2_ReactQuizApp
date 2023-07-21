import React from "react";
// import { useState } from "react";

const QuizApp = () => {

  const qna = [
    {
      question: "Q1",
      answer: [
        { id: 1, text: "A1A", isCorrect: true },
        { id: 2, text: "A1B", isCorrect: false },
        { id: 3, text: "A1C", isCorrect: false },
        { id: 4, text: "A1D", isCorrect: false },
      ]},{
      question: "Q2",
      answer: [
        { id: 1, text: "A2A", isCorrect: true },
        { id: 2, text: "A2B", isCorrect: false },
        { id: 3, text: "A2C", isCorrect: false },
        { id: 4, text: "A2D", isCorrect: false },
      ]},{
      question: "Q3",
      answer: [
        { id: 1, text: "A3A", isCorrect: true },
        { id: 2, text: "A3B", isCorrect: false },
        { id: 3, text: "A3C", isCorrect: false },
        { id: 4, text: "A3D", isCorrect: false },
    ]},{
      question: "Q4",
      answer: [
        { id: 1, text: "A4A", isCorrect: true },
        { id: 2, text: "A4B", isCorrect: false },
        { id: 3, text: "A4C", isCorrect: false },
        { id: 4, text: "A4D", isCorrect: false },
    ]},{
      question: "Q5",
      answer: [
        { id: 1, text: "A5A", isCorrect: true },
        { id: 2, text: "A5B", isCorrect: false },
        { id: 3, text: "A5C", isCorrect: false },
        { id: 4, text: "A5D", isCorrect: false },
    ]},
    
    // Add more question-answer pairs if needed
  ];

  const handleAnswerSelection = () => {};

//   const [counter, setCounter] = useState(0);

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

      {/* {qna.map((data, index) => (
        <p key={index}>
          {data.question}--{data.answer}
        </p>
      ))} */}

      {/* <div>
        {qna.map((data, index) => (
          <p key={index}>
            {data.question}--{data.answer}
          </p>
        ))}
      </div> */}

      <div>
        {qna.map((data, index) => (
          <div key={index}>
            <p>{data.question}</p>
            <ul>
              {data.answer.map((answer) => (
                <div key={answer.id}>
                  <input
                    type="radio"
                    name={answer}
                    value={answer.id}
                    onChange={handleAnswerSelection}
                  />
                  {answer.text}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizApp;
