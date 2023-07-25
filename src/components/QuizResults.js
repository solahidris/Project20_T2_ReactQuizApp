// QuizResults.js

const QuizResults = ({correctAnswerCounter, handleTryAgain}) => {
    return (
        <div>
          <div className="flex justify-center">
            <div className="flex flex-col bg-blue-500 text-white px-5 py-3 rounded-full text-center">
              <p>All questions answered!</p>
              <p> Your score: {correctAnswerCounter}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleTryAgain}
              className="bg-stone-500 hover:bg-stone-600 text-white text-sm px-5 py-2 mt-4 rounded-full"
            >
              Try Again
            </button>
          </div>
        </div>
    )
};

export default QuizResults;