
import { useState } from 'react';
import './CSSConcepts.css';

const CSSConcepts = () => {
    const quiz = [
        {
            question: "What does CSS stand for?",
            option1: "Cascading Style Scripts",
            option2: "Colorful Style Sheets",
            option3: "Cascading Style Sheets",
            option4: "Creative Style Scripts",
            answer: 3,
        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            option1: "color",
            option2: "background-color",
            option3: "bgcolor",
            option4: "background",
            answer: 2,
        },
        {
            question: "How do you make text bold in CSS?",
            option1: "font-weight: bold;",
            option2: "text-style: bold;",
            option3: "font-bold: true;",
            option4: "text-weight: bold;",
            answer: 1,
        },
        {
            question: "Which property is used to control the spacing between lines of text?",
            option1: "text-indent",
            option2: "line-spacing",
            option3: "line-height",
            option4: "text-spacing",
            answer: 3,
        },
        {
            question: "How do you apply a CSS class to an HTML element?",
            option1: "id='classname'",
            option2: "style='classname'",
            option3: "class='classname'",
            option4: "tag='classname'",
            answer: 3,
        },
        {
            question: "Which property is used to set the font size of an element?",
            option1: "font-style",
            option2: "font-size",
            option3: "text-size",
            option4: "text-style",
            answer: 2,
        },
        {
            question: "How do you select an element with the ID 'header' in CSS?",
            option1: "#header",
            option2: ".header",
            option3: "header",
            option4: "id=header",
            answer: 1,
        },
        {
            question: "Which value is used for the `position` property to keep an element fixed relative to the viewport?",
            option1: "relative",
            option2: "absolute",
            option3: "static",
            option4: "fixed",
            answer: 4,
        },
        {
            question: "What is the correct syntax to add a comment in CSS?",
            option1: "// This is a comment",
            option2: "/* This is a comment */",
            option3: "<!-- This is a comment -->",
            option4: "# This is a comment",
            answer: 2,
        },
        {
            question: "Which property is used to align text to the center of its container?",
            option1: "align",
            option2: "text-center",
            option3: "text-align",
            option4: "vertical-align",
            answer: 3,
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
export default CSSConcepts;

