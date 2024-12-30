
import { useState } from 'react';
import './CSSConcepts.css';

const JavaConcepts = () => {
    const quiz = [
        {
            question: "What is Java?",
            option1: "A low-level programming language",
            option2: "A high-level, object-oriented programming language",
            option3: "An operating system",
            option4: "A web development framework",
            answer: 2,
        },
        {
            question: "Which keyword is used to define a class in Java?",
            option1: "function",
            option2: "class",
            option3: "object",
            option4: "define",
            answer: 2,
        },
        {
            question: "Which of the following is NOT a Java primitive data type?",
            option1: "int",
            option2: "float",
            option3: "String",
            option4: "boolean",
            answer: 3,
        },
        {
            question: "What is the correct syntax for a `main` method in Java?",
            option1: "public static void main(String[] args) { }",
            option2: "public void main(String args) { }",
            option3: "static void main(String[] args) { }",
            option4: "public main(String args) { }",
            answer: 1,
        },
        {
            question: "What is the purpose of the `static` keyword in Java?",
            option1: "To declare a constant variable",
            option2: "To allow a method or variable to belong to a class rather than an instance",
            option3: "To override methods",
            option4: "To inherit from another class",
            answer: 2,
        },
        {
            question: "Which package is imported by default in every Java program?",
            option1: "java.util",
            option2: "java.io",
            option3: "java.lang",
            option4: "java.math",
            answer: 3,
        },
        {
            question: "Which loop is guaranteed to execute at least once?",
            option1: "for loop",
            option2: "while loop",
            option3: "do-while loop",
            option4: "foreach loop",
            answer: 3,
        },
        {
            question: "What does the `final` keyword do when applied to a variable?",
            option1: "Allows it to be overridden",
            option2: "Marks it as read-only",
            option3: "Declares it as global",
            option4: "Declares it as mutable",
            answer: 2,
        },
        {
            question: "What is the parent class of all Java classes?",
            option1: "Main",
            option2: "Class",
            option3: "Object",
            option4: "Base",
            answer: 3,
        },
        {
            question: "What is the default value of a local variable in Java?",
            option1: "null",
            option2: "0",
            option3: "Undefined",
            option4: "false",
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
export default JavaConcepts;

