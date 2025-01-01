// import React from 'react';
// import './Practice.css'; 

// const questions = [
//   {
//     id: 1,
//     title: "FizzBuzz",
//     description: "Write a function that prints numbers from 1 to 100, but for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both 3 and 5 print 'FizzBuzz'.",
//   },
//   {
//     id: 2,
//     title: "Palindrome Checker",
//     description: "Write a function that checks if a given string is a palindrome (reads the same forward and backward).",
//   },
//   {
//     id: 3,
//     title: "Array Sum",
//     description: "Write a function that takes an array of numbers and returns the sum of all the elements.",
//   },
//   {
//     id: 4,
//     title: "Sorting Algorithm",
//     description: "Implement a basic sorting algorithm, such as Bubble Sort or Insertion Sort, to sort an array of numbers in ascending order.",
//   },
//   {
//     id: 5,
//     title: "Prime Number Checker",
//     description: "Write a function that determines whether a given number is a prime number.",
//   },
//   {
//     id: 6,
//     title: "Factorial Calculation",
//     description: "Write a function that calculates the factorial of a given positive integer.",
//   },
//   {
//     id: 7,
//     title: "Fibonacci Sequence",
//     description: "Write a function that generates the Fibonacci sequence up to a given number of terms.",
//   },
//   {
//     id: 8,
//     title: "Reverse String",
//     description: "Write a function that reverses a given string.",
//   },
//   {
//     id: 9,
//     title: "Find the Largest Element",
//     description: "Write a function that finds the largest element in an array of numbers.",
//   },
//   {
//     id: 10,
//     title: "Two Sum",
//     description: "Write a function that takes an array of integers and a target integer and returns indices of the two numbers that add up to the target.",
//   },
//   {
//     id: 11,
//     title: "Anagram Checker",
//     description: "Write a function that checks if two given strings are anagrams (contain the same characters in different orders).",
//   },
//   {
//     id: 12,
//     title: "Matrix Transposition",
//     description: "Write a function that performs the transposition of a given matrix (i.e., swapping rows with columns).",
//   }
// ];

// const Practice = () => {
//   return (
//     <div className="practice-page">
//       <h1>Practice Coding Questions</h1>
//       <div className="questions-list">
//         {questions.map((question) => (
//           <div key={question.id} className="question-item">
//             <h2>{question.title}</h2>
//             <p>{question.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Practice;









import React, { useState } from 'react';
import './Practice.css';



const questions = [
  {
    id: 1,
    title: "Even or Odd",
    description: "Write a function that prints numbers from 1 to 100 and determines if each is Even or Odd.",
  },
  {
    id: 2,
    title: "Palindrome Checker",
    description: "Write a function that checks if a given string is a palindrome (reads the same forward and backward).",
  },
  {
    id: 3,
    title: "Largest Digit in a Number",
    description: "Write a function to find the largest digit in a given number.",
  },
];

const Practice = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setUserCode("");
    setOutput("");
  };

  const handleBack = () => {
    setSelectedQuestion(null);
  };

  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
  };

  const handleSubmit = () => {
    try {
      
      const result = eval(userCode); 
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="practice-page">
      {selectedQuestion ? (
        <div className="coding-environment">
          <button onClick={handleBack}>Back</button>
          <h2>{selectedQuestion.title}</h2>
          <p>{selectedQuestion.description}</p>
          <textarea
            value={userCode}
            onChange={handleCodeChange}
            placeholder="Write your code here..."
            style={{
              width: '100%',
              height: '300px',
              marginTop: '20px',
              fontSize: '16px',
              fontFamily: 'monospace',
            }}
          ></textarea>
          <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
            Submit
          </button>
          <div
            style={{
              marginTop: '20px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              background: '#f9f9f9',
            }}
          >
            <h3>Output:</h3>
            <pre>{output || "Output will appear here"}</pre>
          </div>
        </div>
      ) : (
        <>
          <h1>Practice Coding Questions</h1>
          <div className="questions-list">
            {questions.map((question) => (
              <div
                key={question.id}
                className="question-item"
                onClick={() => handleQuestionClick(question)}
                style={{ cursor: 'pointer' }}
              >
                <h2>{question.title}</h2>
                <p>{question.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Practice;
