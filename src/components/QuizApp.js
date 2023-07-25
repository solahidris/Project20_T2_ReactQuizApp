import React, { useState, useCallback, useMemo } from "react";
import listOfQuestionsAndAnswers from "./quizData";
import QuizResults from "./QuizResults";
import QuestionLabel from "./QuestionLabel";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

const handleAnswerSelection = useCallback((selectedAnswerId) => {
  const selectedQuestion = listOfQuestionsAndAnswers[currentQuestionIndex];
  const selectedAnswer = selectedQuestion.answer.find(
    (answer) => answer.id === selectedAnswerId
  );

  if (selectedAnswer.isCorrect) {
    setCorrectAnswerCounter((prevCounter) => prevCounter + 1);
  }

  // Move to the next question
  if (currentQuestionIndex < listOfQuestionsAndAnswers.length - 1) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  } else {
    // All questions are answered, reset the currentQuestionIndex to -1
    setCurrentQuestionIndex(-1);
  }
  // eslint-disable-next-line
}, [listOfQuestionsAndAnswers, currentQuestionIndex, setCorrectAnswerCounter, setCurrentQuestionIndex]);

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswerCounter(0);
  };

  const currentQuestion = listOfQuestionsAndAnswers[currentQuestionIndex];

  const currentProgress = useMemo(() => {
    return `# ${currentQuestionIndex + 1} / ${listOfQuestionsAndAnswers.length}`
    // eslint-disable-next-line
  }, [currentQuestionIndex, listOfQuestionsAndAnswers.length])

  return (
    <div className="bg-blue-200 px-[2rem] py-[3rem] mx-5 lg:mx-[30%] my-[2rem] rounded-xl">
      {/* Render current question or final message */}
      {currentQuestionIndex !== -1 ? (
        <div
          key={currentQuestionIndex}
          className="bg-blue-300 px-[1rem] rounded-xl"
        >
          <p className="pt-5 text-xs italic text-end">
            {currentProgress}
          </p>
          <p className="text-center font-bold bg-blue-200 m-5 p-5 rounded-xl">
            {currentQuestion.question}
          </p>
          <ul className="pb-5">
            <QuestionLabel currentQuestion={currentQuestion} currentQuestionIndex={currentQuestionIndex} handleAnswerSelection={handleAnswerSelection} />
          </ul>
        </div>
      ) : (
        <QuizResults correctAnswerCounter={correctAnswerCounter} handleTryAgain={handleTryAgain} />
      )}
    </div>
  );
};

export default QuizApp;
