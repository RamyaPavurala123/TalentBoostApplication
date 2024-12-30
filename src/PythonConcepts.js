
import { useState } from 'react';
import './CSSConcepts.css';

const PythonConcepts = () => {
    const quiz = [
        {
            "question": "What is Python?",
            "option1": "A high-level programming language",
            "option2": "A type of snake",
            "option3": "A database management system",
            "option4": "A web development framework",
            "answer": 1,
        },
        {
            "question": "Which of the following is used to define a function in Python?",
            "option1": "function",
            "option2": "def",
            "option3": "fun",
            "option4": "define",
            "answer": 2,
        },
        {
            "question": "Which data type is immutable in Python?",
            "option1": "List",
            "option2": "Dictionary",
            "option3": "Tuple",
            "option4": "Set",
            "answer": 3,
        },
        {
            "question": "What is the output of `print(type([]))` in Python?",
            "option1": "<class 'list'>",
            "option2": "<class 'tuple'>",
            "option3": "<class 'dict'>",
            "option4": "<class 'set'>",
            "answer": 1,
        },
        {
            "question": "Which keyword is used to handle exceptions in Python?",
            "option1": "catch",
            "option2": "except",
            "option3": "throw",
            "option4": "handle",
            "answer": 2,
        },
        {
            "question": "What is the output of `print(2**3)`?",
            "option1": "6",
            "option2": "8",
            "option3": "9",
            "option4": "4",
            "answer": 2,
        },
        {
            "question": "What does the `len()` function do?",
            "option1": "Returns the number of characters in a string",
            "option2": "Returns the length of an iterable",
            "option3": "Returns the size of a variable in bytes",
            "option4": "Returns the length of a file in bytes",
            "answer": 2,
        },
        {
            "question": "How can you insert a new element into a Python list?",
            "option1": "Using the `append()` method",
            "option2": "Using the `add()` method",
            "option3": "Using the `insert()` method",
            "option4": "Both 1 and 3",
            "answer": 4,
        },
        {
            "question": "Which of these is a mutable data type in Python?",
            "option1": "String",
            "option2": "Tuple",
            "option3": "List",
            "option4": "Integer",
            "answer": 3,
        },
        {
            "question": "What is the purpose of the `__init__` method in a Python class?",
            "option1": "To initialize an instance of the class",
            "option2": "To destroy an instance of the class",
            "option3": "To define class-level attributes",
            "option4": "To define a static method",
            "answer": 1,
        },
        {
            "question": "Which module in Python is used for regular expressions?",
            "option1": "regex",
            "option2": "re",
            "option3": "reg",
            "option4": "expr",
            "answer": 2,
        },
        {
            "question": "How do you open a file in write mode in Python?",
            "option1": "open('file.txt', 'r')",
            "option2": "open('file.txt', 'w')",
            "option3": "open('file.txt', 'a')",
            "option4": "open('file.txt', 'rw')",
            "answer": 2,
        },
        {
            "question": "What is the difference between `is` and `==` in Python?",
            "option1": "`is` compares values; `==` compares identities",
            "option2": "`is` compares identities; `==` compares values",
            "option3": "Both compare values",
            "option4": "Both compare identities",
            "answer": 2,
        },
        {
            "question": "Which function is used to convert a string to an integer in Python?",
            "option1": "convert()",
            "option2": "str()",
            "option3": "int()",
            "option4": "eval()",
            "answer": 3,
        },
        {
            "question": "Which keyword is used to create a generator in Python?",
            "option1": "yield",
            "option2": "return",
            "option3": "generate",
            "option4": "yieldreturn",
            "answer": 1,
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
            <h1 className="HTMLquize">Python Concepts Quiz</h1>
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
export default  PythonConcepts;

