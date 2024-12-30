
import { useState } from 'react';
import './CSSConcepts.css';

const ReactjsConcepts = () => {
    const quiz = [
        {
            question: "What is React.js?",
            option1: "A programming language",
            option2: "A library for building user interfaces",
            option3: "A database management system",
            option4: "A server-side framework",
            answer: 2,
        },
        {
            question: "Which command is used to create a new React app?",
            option1: "npm install react",
            option2: "npm start react-app",
            option3: "npx create-react-app my-app",
            option4: "react new app",
            answer: 3,
        },
        {
            question: "What is JSX?",
            option1: "A JavaScript function",
            option2: "A syntax extension for JavaScript",
            option3: "A database query language",
            option4: "A library for server-side rendering",
            answer: 2,
        },
        {
            question: "What is the correct way to import a component in React?",
            option1: "import Component from './Component';",
            option2: "include './Component';",
            option3: "require('./Component');",
            option4: "export Component from './Component';",
            answer: 1,
        },
        {
            question: "What is the purpose of `useState` in React?",
            option1: "To handle lifecycle methods",
            option2: "To fetch data from an API",
            option3: "To manage state in functional components",
            option4: "To style components",
            answer: 3,
        },
        {
            question: "Which hook is used to perform side effects in functional components?",
            option1: "useState",
            option2: "useEffect",
            option3: "useContext",
            option4: "useReducer",
            answer: 2,
        },
        {
            question: "What is the default port number for a React application?",
            option1: "8000",
            option2: "3000",
            option3: "8080",
            option4: "5000",
            answer: 2,
        },
        {
            question: "How do you pass data from a parent to a child component in React?",
            option1: "Using props",
            option2: "Using state",
            option3: "Using context",
            option4: "Using events",
            answer: 1,
        },
        {
            question: "What is the purpose of the `key` prop in React?",
            option1: "To make elements draggable",
            option2: "To uniquely identify elements in a list",
            option3: "To access elements in the DOM",
            option4: "To style elements",
            answer: 2,
        },
        {
            question: "Which method is used to update the state in class components?",
            option1: "setState()",
            option2: "updateState()",
            option3: "changeState()",
            option4: "modifyState()",
            answer: 1,
        },
    ];
    


    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption === quiz[index].answer) {
            alert("Correct Answer!");
        } else if (selectedOption === null) {
            alert("Please select an option.");
        } else {
            alert("Wrong Answer!");
        }

        if (index < quiz.length - 1) {
            setIndex(index + 1);
            setSelectedOption(null);
        } else {
            alert("Quiz Complete!");
        }
    };

    return (
        <div>
            <h1 className="HTMLquize">CSS  Concepts Quiz</h1>
            <h3>{index + 1}. {quiz[index].question}</h3>
            <ul className="multiplelist">
                {[quiz[index].option1, 
                quiz[index].option2, 
                quiz[index].option3,
                quiz[index].option4].map((option, idx) => (
                    <li 
                        key={idx} 
                        className={`option ${selectedOption === idx + 1 ? 'selected' : ''}`} 
                        onClick={() => handleOptionClick(idx + 1)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            <button className="quizbutton" onClick={handleNextClick}>Next</button>
        </div>
    );
};
export default ReactjsConcepts;

