const HeaderTitle = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <h1 class="text-3xl font-bold bg-blue-600 text-stone-100 px-[2rem] py-3 rounded-full">
          P20 - React Quiz
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 class="text-xs py-5 px-[3rem] mt-5 mx-5 lg:mx-[30%] bg-blue-300 text-black rounded-xl">
          Build a simple React quiz app where users can click on option buttons
          to answer questions, next question rendered each time option is
          selected and at the end, the final score is displayed.
        </h2>
      </div>
    </div>
  );
};

export default HeaderTitle;
