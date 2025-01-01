import React from 'react';
import { useState } from 'react';
import './AdvanceJavaTopics.css';

const AdvanceJavaTopics = () => {
    const quiz = [
        {
            question: "What is the purpose of the `volatile` keyword in Java?",
            option1: "To create an immutable variable",
            option2: "To ensure visibility of changes to variables across threads",
            option3: "To prevent method overriding",
            option4: "To declare a constant value",
            answer: 2,
        },
        {
            question: "What is the difference between `HashMap` and `HashTable`?",
            option1: "HashMap is synchronized; HashTable is not",
            option2: "HashTable allows null keys; HashMap does not",
            option3: "HashMap is not synchronized; HashTable is synchronized",
            option4: "HashTable is faster than HashMap",
            answer: 3,
        },
        {
            question: "Which Java feature allows methods to have the same name but different parameters?",
            option1: "Inheritance",
            option2: "Encapsulation",
            option3: "Method Overloading",
            option4: "Polymorphism",
            answer: 3,
        },
        {
            question: "What is the default priority of a thread in Java?",
            option1: "1",
            option2: "5",
            option3: "7",
            option4: "10",
            answer: 2,
        },
        {
            question: "What is the purpose of the `transient` keyword in Java?",
            option1: "To mark a variable for serialization",
            option2: "To prevent a variable from being serialized",
            option3: "To ensure thread safety",
            option4: "To declare a constant value",
            answer: 2,
        },
        {
            question: "What does the `Callable` interface in Java return?",
            option1: "void",
            option2: "A `Future` object",
            option3: "An exception",
            option4: "A thread instance",
            answer: 2,
        },
        {
            question: "What is the use of the `finally` block in exception handling?",
            option1: "To handle exceptions",
            option2: "To execute code only if an exception is thrown",
            option3: "To execute code regardless of an exception being thrown or not",
            option4: "To propagate an exception",
            answer: 3,
        },
        {
            question: "What is the main purpose of the `Spring Framework`?",
            option1: "To provide a collection of utility classes",
            option2: "To simplify Java enterprise application development",
            option3: "To act as a replacement for Java Swing",
            option4: "To manage memory more effectively",
            answer: 2,
        },
        {
            question: "Which annotation is used in Java to override a method from a superclass?",
            option1: "@Overload",
            option2: "@Override",
            option3: "@Inherited",
            option4: "@Super",
            answer: 2,
        },
        {
            question: "What is the difference between `wait()` and `sleep()` in Java?",
            option1: "Both release the lock on the object",
            option2: "`wait()` releases the lock; `sleep()` does not",
            option3: "`sleep()` releases the lock; `wait()` does not",
            option4: "Both are used for thread communication",
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
            <h1 className="HTMLquize">Advance Java Topics  Quiz</h1>
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
export default AdvanceJavaTopics;

