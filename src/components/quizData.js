const qna = [
  {
    question: "What is React?",
    answer: [
      {
        id: 1,
        text: "A JavaScript library for building user interfaces",
        isCorrect: true,
      },
      { id: 2, text: "A programming language", isCorrect: false },
      { id: 3, text: "A database management system", isCorrect: false },
      { id: 4, text: "A web server", isCorrect: false },
    ],
  },
  {
    question: "What is JSX?",
    answer: [
      { id: 1, text: "A database management system", isCorrect: false },
      { id: 2, text: "A syntax extension for JavaScript", isCorrect: true },
      { id: 3, text: "A web server", isCorrect: false },
      { id: 4, text: "A programming language", isCorrect: false },
    ],
  },
  {
    question: "What does Virtual DOM do in React?",
    answer: [
      {
        id: 1,
        text: "Improves performance by minimizing DOM updates",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Creates a virtual representation of the server's DOM",
        isCorrect: false,
      },
      { id: 3, text: "Handles server-side rendering", isCorrect: false },
      {
        id: 4,
        text: "Provides an API for server communication",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the latest version of React?",
    answer: [
      { id: 1, text: "16", isCorrect: false },
      { id: 2, text: "15", isCorrect: false },
      { id: 3, text: "14", isCorrect: false },
      { id: 4, text: "17", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of state in React?",
    answer: [
      {
        id: 1,
        text: "To manage and store data that can change over time",
        isCorrect: true,
      },
      { id: 2, text: "To handle HTTP requests", isCorrect: false },
      {
        id: 3,
        text: "To define the structure of the application",
        isCorrect: false,
      },
      { id: 4, text: "To create reusable components", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to update state in React?",
    answer: [
      {
        id: 1,
        text: "By directly modifying the state object",
        isCorrect: false,
      },
      { id: 2, text: "By using the `props` object", isCorrect: false },
      { id: 3, text: "Using the `setState` method", isCorrect: true },
      { id: 4, text: "By using the `render` method", isCorrect: false },
    ],
  },
  {
    question: "What are React Hooks used for?",
    answer: [
        { id: 1, text: "To manage HTTP requests", isCorrect: false },
        { id: 2, text: "To create class components", isCorrect: false },
        { id: 3, text: "To handle form validation", isCorrect: false },
        {
          id: 4,
          text: "To add state and other React features to functional components",
          isCorrect: true,
        },
    ],
  },
  {
    question: "What is the purpose of the `useEffect` hook in React?",
    answer: [
      {
        id: 1,
        text: "To perform side effects in functional components",
        isCorrect: true,
      },
      {
        id: 2,
        text: "To define the component's initial state",
        isCorrect: false,
      },
      { id: 3, text: "To handle form submission", isCorrect: false },
      { id: 4, text: "To create reusable components", isCorrect: false },
    ],
  },
  {
    question: "What is a React component?",
    answer: [
      {
        id: 1,
        text: "A reusable, self-contained piece of UI",
        isCorrect: true,
      },
      {
        id: 2,
        text: "A built-in HTML element like `div` or `span`",
        isCorrect: false,
      },
      { id: 3, text: "A React-specific JavaScript function", isCorrect: false },
      { id: 4, text: "A styling library for React", isCorrect: false },
    ],
  },
  {
    question:
      "What is the purpose of the `render` method in a React component?",
    answer: [
        {
            id: 1,
            text: "To define the component's initial state",
            isCorrect: false,
        },
        {
          id: 2,
          text: "To render the component's UI based on its current state and props",
          isCorrect: true,
        },
      { id: 3, text: "To update the component's state", isCorrect: false },
      { id: 4, text: "To handle form submission", isCorrect: false },
    ],
  },
];

export default qna;
