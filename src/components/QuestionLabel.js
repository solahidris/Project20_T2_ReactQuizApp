// QuestionLabel.js

const QuestionLabel = ({currentQuestion, currentQuestionIndex, handleAnswerSelection}) => {
  return (
    <div>
      {currentQuestion.answer.map((answer) => (
        <label
          key={answer.id}
          className="flex rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-xs mb-2 item-center"
        >
          <input
            type="radio"
            name={`question_${currentQuestionIndex}`}
            id={`answer_${answer.id}`} // Add an id for the radio input
            value={answer.id}
            onChange={() => handleAnswerSelection(answer.id)}
            className="hidden" // Hide the radio input
          />
          <div className="mx-4">{answer.text}</div>
        </label>
      ))}
    </div>
  );
};

export default QuestionLabel;
