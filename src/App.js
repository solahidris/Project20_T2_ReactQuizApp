// MAIN BRANCH

import QuizInstructions from "./components/QuizInstructions";
import HeaderTitle from "./components/HeaderTitle";
import QuizApp from "./components/QuizApp";

function App() {
  return (
    <div class="min-h-[100vh] bg-gradient-to-b from-indigo-100 from-10% via-sky-300 via-60% to-emerald-300 to-90%">
      <h5 className="text-xs">this is the main branch</h5>

      <div className="p-5">
        <HeaderTitle />
        <QuizApp />
        <QuizInstructions />
      </div>
    </div>
  );
}

export default App;
