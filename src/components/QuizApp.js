import React, { useState } from "react";
import qna from "./quizData";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  const handleAnswerSelection = (selectedAnswerId) => {
    const selectedQuestion = qna[currentQuestionIndex];
    const selectedAnswer = selectedQuestion.answer.find(
      (answer) => answer.id === selectedAnswerId
    );

    if (selectedAnswer.isCorrect) {
      setCorrectAnswerCounter((prevCounter) => prevCounter + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < qna.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // All questions are answered, reset the currentQuestionIndex to -1
      setCurrentQuestionIndex(-1);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswerCounter(0);
  };

  const currentQuestion = qna[currentQuestionIndex];

  return (
    <div className="bg-blue-200 px-[2rem] py-[3rem] mx-5 lg:mx-[30%] my-[2rem] rounded-xl">
      {/* Render current question or final message */}
      {currentQuestionIndex !== -1 ? (
        <div key={currentQuestionIndex} className="bg-blue-300 px-[1rem] rounded-xl">
          <p className="pt-5 text-xs italic text-end"># {currentQuestionIndex + 1} / {qna.length}</p>
          <p className="text-center font-bold bg-blue-200 m-5 p-5 rounded-xl">{currentQuestion.question}</p>
          <ul className="pb-5">
            {currentQuestion.answer.map((answer) => (
              <label key={answer.id} className="flex rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-xs mb-2 item-center">
                <input
                  type="radio"
                  name={`question_${currentQuestionIndex}`}
                  id={`answer_${answer.id}`} // Add an id for the radio input
                  value={answer.id}
                  onChange={() => handleAnswerSelection(answer.id)}
                  style={{ display: "none" }} // Hide the radio input
                />
                <div className="mx-4">
                  {answer.text}
                </div>
              </label>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className="flex justify-center"><p className="flex bg-blue-500 text-white px-5 py-3 rounded-full">All questions answered! Your score: {correctAnswerCounter}</p></div>
          <div className="flex justify-center"><button onClick={handleTryAgain} className="bg-stone-500 hover:bg-stone-600 text-white text-sm px-5 py-2 mt-4 rounded-full">Try Again</button></div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
