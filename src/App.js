// MAIN BRANCH

import CodeHow from "./components/CodeHow";
import HeaderTitle from "./components/HeaderTitle";

function App() {
  return (
    <div class="min-h-[100vh] bg-gradient-to-b from-indigo-100 from-10% via-sky-300 via-60% to-emerald-300 to-90%">
      <h5 className="text-xs">this is the main branch</h5>

      <div className="p-5">
        <HeaderTitle />
        <CodeHow />
      </div>
    </div>
  );
}

export default App;

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: [
//       { id: 1, text: "Paris", isCorrect: true },
//       { id: 2, text: "London", isCorrect: false },
//       { id: 3, text: "Madrid", isCorrect: false },
//       { id: 4, text: "Berlin", isCorrect: false }
//     ]
//   },
//   // Add more question objects here
// ];

// {question.options.map((option) => (
//   <label key={option.id}>
//     <input
//       type="radio"
//       name="answer"
//       value={option.id}
//       onChange={handleAnswerSelection}
//     />
//     {option.text}
//   </label>
// ))}
