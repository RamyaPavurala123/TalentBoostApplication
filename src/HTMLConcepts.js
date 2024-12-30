// import { useState } from 'react';
// import './HTMLConcepts.css';

// const HTMLConcepts = () => {
    // const quiz = [
    //     {
    //         question: "HTML stands for?",
    //         option1: "HyperText Markdown Language",
    //         option2: "Hyper Transfer Markup Language",
    //         option3: "HyperText Markup Language",
    //         option4: "HighText Machine Language",
    //         answer: 3,
    //     },
    //     {
    //         question: "Which HTML tag is used to define an internal stylesheet?",
    //         option1: "<css>",
    //         option2: "<style>",
    //         option3: "<script>",
    //         option4: "<stylesheet>",
    //         answer: 2,
    //     },
    //     {
    //         question: "What is the correct HTML element for inserting a line break?",
    //         option1: "<break>",
    //         option2: "<lb>",
    //         option3: "<line>",
    //         option4: "<br>",
    //         answer: 4,
    //     },
    //     {
    //         question: "Which attribute specifies an alternate text for an image?",
    //         option1: "title",
    //         option2: "src",
    //         option3: "alt",
    //         option4: "description",
    //         answer: 3,
    //     },
    //     {
    //         question: "How do you create a hyperlink in HTML?",
    //         option1: "<a href='url'>Link</a>",
    //         option2: "<hyperlink='url'>Link</hyperlink>",
    //         option3: "<anchor='url'>Link</anchor>",
    //         option4: "<link='url'>Link</link>",
    //         answer: 1,
    //     },
    //     {
    //         question: "Which HTML tag is used to display a numbered list?",
    //         option1: "<ul>",
    //         option2: "<li>",
    //         option3: "<ol>",
    //         option4: "<list>",
    //         answer: 3,
    //     },
    //     {
    //         question: "What does the `<title>` tag do in HTML?",
    //         option1: "Displays the title of the page in the browser tab",
    //         option2: "Adds a title to the body of the page",
    //         option3: "Creates a clickable heading",
    //         option4: "Specifies a subtitle for the page",
    //         answer: 1,
    //     },
    // ];

//     const [index, setIndex] = useState(0);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleOptionChange = (option) => {
//         setSelectedOption(option);
//     };

//     const handleNextClick = () => {
//         if (selectedOption === quiz[index].answer) {
//             alert("Correct Answer!");
//         } 
//         else if(selectedOption === null)
//         {
//            alert("select one Option.")
//         }
//         else {
//           alert("Wrong Answer!");
//       }

//         if (index < quiz.length - 1) {
//             setIndex(index + 1);
//             setSelectedOption(null); 
//         } else {
//             alert("Quiz Complete!");
//         }
//     };

//     return (
//         <div>
//             <h1 className='HTMLquize'>HTML Concepts Quiz</h1>
//             <h3>{index + 1}. {quiz[index].question}</h3>
//             <ul className='multiplelist'>
//                 {[quiz[index].option1, 
//                 quiz[index].option2, 
//                 quiz[index].option3,
//                  quiz[index].option4].map((option, idx) => (
//                     <li key={idx}>
//                         <input 
//                              type="radio"
//                             name="option"
//                             checked={selectedOption === idx + 1}
//                             onChange={() => handleOptionChange(idx + 1)}
//                         />
//                         {option}
//                     </li>
//                 ))}
//             </ul>
//             <button className='quizbutton' onClick={handleNextClick}>Next</button>
//         </div>
//     );
// };
// export default HTMLConcepts;





import { useState } from 'react';
import './HTMLConcepts.css';

const HTMLConcepts = () => {
  const quiz = [
    {
        question: "HTML stands for?",
        option1: "HyperText Markdown Language",
        option2: "Hyper Transfer Markup Language",
        option3: "HyperText Markup Language",
        option4: "HighText Machine Language",
        answer: 3,
    },
    {
        question: "Which HTML tag is used to define an internal stylesheet?",
        option1: "<css>",
        option2: "<style>",
        option3: "<script>",
        option4: "<stylesheet>",
        answer: 2,
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<break>",
        option2: "<lb>",
        option3: "<line>",
        option4: "<br>",
        answer: 4,
    },
    {
        question: "Which attribute specifies an alternate text for an image?",
        option1: "title",
        option2: "src",
        option3: "alt",
        option4: "description",
        answer: 3,
    },
    {
        question: "How do you create a hyperlink in HTML?",
        option1: "<a href='url'>Link</a>",
        option2: "<hyperlink='url'>Link</hyperlink>",
        option3: "<anchor='url'>Link</anchor>",
        option4: "<link='url'>Link</link>",
        answer: 1,
    },
    {
        question: "Which HTML tag is used to display a numbered list?",
        option1: "<ul>",
        option2: "<li>",
        option3: "<ol>",
        option4: "<list>",
        answer: 3,
    },
    {
        question: "What does the `<title>` tag do in HTML?",
        option1: "Displays the title of the page in the browser tab",
        option2: "Adds a title to the body of the page",
        option3: "Creates a clickable heading",
        option4: "Specifies a subtitle for the page",
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
            <h1 className="HTMLquize">HTML Concepts Quiz</h1>
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
export default HTMLConcepts;

// import { useState } from 'react';
// import './HTMLConcepts.css';

// const HTMLConcepts = () => {
//     const quiz = [
//         {
//             "question": "HTML stands for?",
//             "option1": "HyperText Markdown Language",
//             "option2": "Hyper Transfer Markup Language",
//             "option3": "HyperText Markup Language",
//             "option4": "HighText Machine Language",
//             "answer": 3,
//         },
//         {
//             "question": "Which HTML tag is used to define an internal stylesheet?",
//             "option1": "<css>",
//             "option2": "<style>",
//             "option3": "<script>",
//             "option4": "<stylesheet>",
//             "answer": 2,
//         },
//         {
//             "question": "What is the correct HTML element for inserting a line break?",
//             "option1": "<break>",
//             "option2": "<lb>",
//             "option3": "<line>",
//             "option4": "<br>",
//             "answer": 4,
//         },
//         {
//             "question": "Which attribute specifies an alternate text for an image?",
//             "option1": "title",
//             "option2": "src",
//             "option3": "alt",
//             "option4": "description",
//             "answer": 3,
//         },
//         {
//             "question": "How do you create a hyperlink in HTML?",
//             "option1": "<a href='url'>Link</a>",
//             "option2": "<hyperlink='url'>Link</hyperlink>",
//             "option3": "<anchor='url'>Link</anchor>",
//             "option4": "<link='url'>Link</link>",
//             "answer": 1,
//         },
//         {
//             "question": "Which HTML tag is used to display a numbered list?",
//             "option1": "<ul>",
//             "option2": "<li>",
//             "option3": "<ol>",
//             "option4": "<list>",
//             "answer": 3,
//         },
//         {
//             "question": "What does the `<title>` tag do in HTML?",
//             "option1": "Displays the title of the page in the browser tab",
//             "option2": "Adds a title to the body of the page",
//             "option3": "Creates a clickable heading",
//             "option4": "Specifies a subtitle for the page",
//             "answer": 1,
//         }
//     ];
//        let [index,setIndex] =useState(0);
//        let[question,setQuestions]=useState(quiz[index]);
//        const [selectedOption, setSelectedOption] = useState("");


//     const handleNextClick = () => {
//          if(selectedOption === quiz[index].answer)
//          {
//             alert("Correct Answer..!");
//          }
//          else{
//             alert("Wrong Answer..!");
//          }
//          if (index < quiz.length - 1) {
//           setIndex(index + 1);
//           // setSelectedOption(null); 
//           setQuestions(quiz[index]);
//       } else {
//           alert("Quiz Complete!");
//       }
//     }
    
//   return (
//     <div>
//         {/* <div className='index'>1 To 5 Questions</div> */}
//             <h1 className='HTMLquize'>HTML Concepts Quiz </h1>
//             <h3>  {index+1}.{question.question}</h3>
//             <ul className='multiplelist'>
//                 <li>
//                 <input
//                       type="checkbox"
//                     //  id="option1"
//                     //  name="answer"
//                     //  value={1}
//                     checked={selectedOption === quiz[index].answer}
//                      onChange={handleNextClick}
//              />
//              {question.option1}
//                 </li>
//                 <li>
//                 <input
//                       type="checkbox"
//                     //   id="option1"
//                     //   name="answer"
//                     //   value={1}
//                       checked={selectedOption === quiz[index].answer}
//                       onChange={handleNextClick}
//              />
//              {question.option2}
//                 </li>
//                 <li><input
//                       type="checkbox"
//                     //   id="option1"
//                     //   name="answer"
//                     //   value={1}
//                       checked={selectedOption === quiz[index].answer}
//                       onChange={handleNextClick}
//              />
//              {question.option3}
//              </li>
//                 <li>
//                 <input
//                       type="checkbox"
//                     //   id="option1"
//                     //   name="answer"
//                     //   value={1}
//                       checked={selectedOption === quiz[index].answer}
//                      onChange={handleNextClick}
//              />
//              {question.option4}
//                 </li>
//             </ul>
//             <button className='quizbutton' onClick={handleNextClick}>Next</button>
//     </div>
//   )
// }
// export default  HTMLConcepts


// import { useState } from 'react';
// import './HTMLConcepts.css';

// const HTMLConcepts = () => {
//     const quiz = [
//         {
//             "question": "HTML stands for?",
//             "option1": "HyperText Markdown Language",
//             "option2": "Hyper Transfer Markup Language",
//             "option3": "HyperText Markup Language",
//             "option4": "HighText Machine Language",
//             "answer": 3,
//         },
//         {
//             "question": "Which HTML tag is used to define an internal stylesheet?",
//             "option1": "<css>",
//             "option2": "<style>",
//             "option3": "<script>",
//             "option4": "<stylesheet>",
//             "answer": 2,
//         },
//         {
//             "question": "What is the correct HTML element for inserting a line break?",
//             "option1": "<break>",
//             "option2": "<lb>",
//             "option3": "<line>",
//             "option4": "<br>",
//             "answer": 4,
//         },
//         {
//             "question": "Which attribute specifies an alternate text for an image?",
//             "option1": "title",
//             "option2": "src",
//             "option3": "alt",
//             "option4": "description",
//             "answer": 3,
//         },
//         {
//             "question": "How do you create a hyperlink in HTML?",
//             "option1": "<a href='url'>Link</a>",
//             "option2": "<hyperlink='url'>Link</hyperlink>",
//             "option3": "<anchor='url'>Link</anchor>",
//             "option4": "<link='url'>Link</link>",
//             "answer": 1,
//         },
//         {
//             "question": "Which HTML tag is used to display a numbered list?",
//             "option1": "<ul>",
//             "option2": "<li>",
//             "option3": "<ol>",
//             "option4": "<list>",
//             "answer": 3,
//         },
//         {
//             "question": "What does the `<title>` tag do in HTML?",
//             "option1": "Displays the title of the page in the browser tab",
//             "option2": "Adds a title to the body of the page",
//             "option3": "Creates a clickable heading",
//             "option4": "Specifies a subtitle for the page",
//             "answer": 1,
//         }
//     ];

//     const [index, setIndex] = useState(0); 
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleOptionChange = (event) => {
//         setSelectedOption(Number(event.target.value)); 
//     };

//     const handleNextClick = () => {
//         if (selectedOption === quiz[index].answer) {
//             alert("Correct Answer!");
//         } else {
//             alert("Wrong Answer!");
//         }
//         setSelectedOption(null); 
//         setIndex((prevIndex) => (prevIndex + 1) % quiz.length); 
//     };

//     const question = quiz[index];

//     return (
//         <div>
//             <h1 className='HTMLquize'>HTML Concepts Quiz</h1>
//             <h3>{index + 1}. {question.question}</h3>
//             <ul className='multiplelist'>
//                 <li>
//                     <input
//                         type="radio"
//                         id="option1"
//                         name="answer"
//                         value={1}
//                         checked={selectedOption === 1}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="option1">{question.option1}</label>
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         id="option2"
//                         name="answer"
//                         value={2}
//                         checked={selectedOption === 2}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="option2">{question.option2}</label>
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         id="option3"
//                         name="answer"
//                         value={3}
//                         checked={selectedOption === 3}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="option3">{question.option3}</label>
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         id="option4"
//                         name="answer"
//                         value={4}
//                         checked={selectedOption === 4}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="option4">{question.option4}</label>
//                 </li>
//             </ul>
//             <button className='quizbutton' onClick={handleNextClick}>Next</button>
//             <div className='index'>{index + 1} of {quiz.length} Questions</div>
//         </div>
//     );
// };

// export default HTMLConcepts;