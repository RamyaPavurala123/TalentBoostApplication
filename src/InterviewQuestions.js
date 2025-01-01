import React, { useState } from 'react';
import './InterviewQuestions.css';



const InterviewQuestions = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const questions = [
    {
      category: 'Front-End',
      questions: [
        { id: 1, question: 'What is the Virtual DOM and how does React use it?', answer: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by only re-rendering the components that have changed.' },
        { id: 2, question: 'What are the differences between `==` and `===` in JavaScript?', answer: '`==` performs type coercion and compares values for equality, while `===` checks for both value and type equality without type coercion.' },
        { id: 3, question: 'How do you handle state management in a React application?', answer: 'State management in React can be handled using local state, Context API, or third-party libraries like Redux or MobX.' },
        { id: 4, question: 'Explain the concept of component lifecycle in React.', answer: 'React component lifecycle methods include mounting, updating, and unmounting. These methods allow you to execute code at different phases of a component’s lifecycle.' },
        { id: 5, question: 'What is a CSS Grid, and how is it used?', answer: 'CSS Grid is a layout system in CSS that allows you to create complex, responsive web layouts using a grid-based approach. It provides more control over layout design compared to traditional methods.' },
        { id: 6, question: 'What is the purpose of Flexbox in CSS?', answer: 'Flexbox is a layout model in CSS designed for distributing space along a single axis, providing a more efficient way to lay out, align, and distribute space among items in a container.' },
        { id: 7, question: 'How does React handle conditional rendering?', answer: 'React handles conditional rendering using JavaScript operators like `if`, ternary operator `? :`, or logical `&&` to render components or elements based on certain conditions.' },
        { id: 8, question: 'What are React Hooks and name a few commonly used ones?', answer: 'React Hooks are functions that let you use state and other React features without writing a class. Common hooks include `useState`, `useEffect`, and `useContext`.' },
        { id: 9, question: 'What is the purpose of `useEffect` in React?', answer: '`useEffect` is a hook that lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.' },
        { id: 10, question: 'Explain the concept of server-side rendering in React.', answer: 'Server-side rendering (SSR) in React involves rendering components on the server before sending them to the client, which can improve initial load performance and SEO.' }
      ]
    },
    {
      category: 'Middleware',
      questions: [
        { id: 1, question: 'What is middleware in the context of web development?', answer: 'Middleware is a function that processes requests and responses in a web application, typically used for tasks such as authentication, logging, or error handling.' },
        { id: 2, question: 'How does Express.js handle middleware?', answer: 'Express.js uses middleware functions to handle requests. Middleware functions can modify the request, perform operations, and send responses.' },
        { id: 3, question: 'What is the purpose of `next()` in Express middleware?', answer: '`next()` is used to pass control to the next middleware function in the stack.' },
        { id: 4, question: 'What are the different types of middleware in Express.js?', answer: 'Express.js has several types of middleware: application-level middleware, router-level middleware, built-in middleware, and third-party middleware.' },
        { id: 5, question: 'How can you handle errors using middleware in Express.js?', answer: 'You can handle errors in Express.js by defining an error-handling middleware function that takes four arguments: `err`, `req`, `res`, and `next`.' },
        { id: 6, question: 'What is the use of `body-parser` middleware in Express?', answer: '`body-parser` middleware is used to parse the body of incoming requests and make the data available in `req.body`.' },
        { id: 7, question: 'How can you use middleware to restrict access in a web application?', answer: 'You can use middleware to restrict access by implementing authentication and authorization checks before allowing access to certain routes or resources.' },
        { id: 8, question: 'What is the role of CORS middleware?', answer: 'CORS middleware is used to configure Cross-Origin Resource Sharing (CORS) settings to control which origins are allowed to access resources on your server.' },
        { id: 9, question: 'Explain how you can use middleware for request logging.', answer: 'You can use middleware like `morgan` to log details about incoming requests, including method, URL, and response time, to help with debugging and monitoring.' },
        { id: 10, question: 'How does `helmet` middleware improve security in an Express application?', answer: '`helmet` middleware helps secure Express applications by setting various HTTP headers to prevent common web vulnerabilities like XSS and clickjacking.' }
      ]
    },
    {
      category: 'Back-End',
      questions: [
        { id: 1, question: 'Explain the concept of RESTful APIs.', answer: 'RESTful APIs are designed around REST principles, using standard HTTP methods and status codes to interact with resources in a stateless and scalable way.' },
        { id: 2, question: 'What is the difference between SQL and NoSQL databases?', answer: 'SQL databases are relational and use structured query language (SQL) for managing data, while NoSQL databases are non-relational and can handle various data formats.' },
        { id: 3, question: 'How do you handle authentication and authorization in a web application?', answer: 'Authentication verifies user identity, while authorization determines access levels. This can be handled using session-based, token-based, or OAuth methods.' },
        { id: 4, question: 'What are the advantages of using an ORM like Sequelize?', answer: 'An ORM (Object-Relational Mapping) tool like Sequelize simplifies database interactions by allowing you to work with JavaScript objects rather than SQL queries, and provides features like model validation and migration support.' },
        { id: 5, question: 'What is the difference between synchronous and asynchronous operations in Node.js?', answer: 'Synchronous operations block the execution of code until the operation completes, while asynchronous operations allow code execution to continue and handle the result when the operation finishes, often using callbacks, promises, or async/await.' },
        { id: 6, question: 'How do you create RESTful routes in Express.js?', answer: 'RESTful routes in Express.js are created by defining route handlers for HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and associating them with specific URL patterns.' },
        { id: 7, question: 'What is middleware in the context of Node.js and Express?', answer: 'In Node.js and Express, middleware functions are used to process requests and responses, performing tasks such as logging, authentication, and error handling.' },
        { id: 8, question: 'How do you manage database connections in a Node.js application?', answer: 'Database connections in a Node.js application are managed using connection pooling, environment variables, and ORM libraries to handle multiple simultaneous connections efficiently.' },
        { id: 9, question: 'What is the role of the `async/await` syntax in Node.js?', answer: '`async/await` syntax simplifies working with asynchronous code, making it easier to write and read compared to traditional callback-based approaches or promises.' },
        { id: 10, question: 'How can you implement rate limiting in a Node.js application?', answer: 'Rate limiting can be implemented using middleware like `express-rate-limit` to restrict the number of requests a client can make to an API within a certain time period.' }
      ]
    }
  ];

  return (
    <div className="interview-questions">
      {questions.map((category, index) => (
        <div key={index} className="question-category">
          <h2>{category.category}</h2>
          <ul className="questions-list">
            {category.questions.map((item) => (
              <li
                key={item.id}
                className="question-item"
                onClick={() => setClickedIndex(clickedIndex === item.id ? null : item.id)}
              >
                <div className="question-number">{item.id}.</div>
                <div className="question-text">{item.question}</div>
                {clickedIndex === item.id && (
                  <div className="answer">
                    <strong>Ans:</strong> {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InterviewQuestions;


