import React from 'react';

import { useState } from 'react';
import './CSSConcepts.css';

const JavaScriptConcepts = () => {
    const quiz = [
        {
            question: "Which company developed JavaScript?",
            option1: "Microsoft",
            option2: "Sun Microsystems",
            option3: "Netscape",
            option4: "Oracle",
            answer: 3,
        },
        {
            question: "Which symbol is used to declare comments in JavaScript?",
            option1: "// for single-line, /* */ for multi-line",
            option2: "<!-- for single-line -->",
            option3: "# for single-line",
            option4: "% for comments",
            answer: 1,
        },
        {
            question: "What is the correct syntax for referring to an external script file in JavaScript?",
            option1: "<script href='filename.js'></script>",
            option2: "<script src='filename.js'></script>",
            option3: "<script file='filename.js'></script>",
            option4: "<script link='filename.js'></script>",
            answer: 2,
        },
        {
            question: "Which of the following is a correct way to define a variable in JavaScript?",
            option1: "var myVar;",
            option2: "variable myVar;",
            option3: "v myVar;",
            option4: "myVar = variable;",
            answer: 1,
        },
        {
            question: "Which method is used to write content into a web page?",
            option1: "document.write()",
            option2: "window.write()",
            option3: "console.log()",
            option4: "write()",
            answer: 1,
        },
        {
            question: "How do you call a function named 'myFunction' in JavaScript?",
            option1: "call myFunction();",
            option2: "execute myFunction;",
            option3: "myFunction();",
            option4: "callFunction myFunction();",
            answer: 3,
        },
        {
            question: "What is the output of `console.log(typeof null)`?",
            option1: "null",
            option2: "undefined",
            option3: "object",
            option4: "string",
            answer: 3,
        },
        {
            question: "What will `Boolean('')` return?",
            option1: "true",
            option2: "false",
            option3: "undefined",
            option4: "NaN",
            answer: 2,
        },
        {
            question: "Which operator is used to check equality without type conversion?",
            option1: "==",
            option2: "=",
            option3: "===",
            option4: "!==",
            answer: 3,
        },
        {
            question: "What will the following code output? \n`console.log(2 + '2');`",
            option1: "4",
            option2: "22",
            option3: "NaN",
            option4: "undefined",
            answer: 2,
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
export default JavaScriptConcepts;

