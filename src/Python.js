



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Python.css';

const Python = () => {
  const navigate = useNavigate();
  return (
    <div className="container">

    
      <div className="content">
        <div className="leftContent">
          <h1  className="nav-link" onClick={() => navigate('/PythonConcepts')}>Python Concepts</h1>
          <p>Variables and Data Types</p>
          <p>Control Structures (if, for, while)</p>
          <p>Functions and Lambda Expressions</p>
          <p>Object-Oriented Programming (OOP)</p>
          <p>Modules and Packages</p>
          <p>File Handling (open, read, write)</p>
          <p>Error and Exception Handling</p>
          <p>Python Standard Library (os, math, random)</p>
          <p>Iterators and Generators</p>
          <p>Decorators</p>
          <p>List Comprehensions</p>
          <p>Data Structures (List, Tuple, Set, Dictionary)</p>
        </div>
        <div className="rightContent">
          <img src="/javalogo.png" className="python" alt="Python Concepts" />
        </div>
      </div>

      <div className="content">
        <div className="leftContent">
          <h1  className="nav-link" onClick={() => navigate('/AdvancePythonConcepts')}>Advanced Python Topics</h1>
          <p>Web Development (Flask, Django)</p>
          <p>Data Analysis (Pandas, NumPy)</p>
          <p>Machine Learning (Scikit-Learn, TensorFlow)</p>
          <p>Web Scraping (BeautifulSoup, Scrapy)</p>
          <p>API Development (FastAPI, Flask-RESTful)</p>
          <p>Concurrency and Multithreading</p>
          <p>Testing (unittest, pytest)</p>
          <p>Deployment (Docker, Heroku)</p>
          <p>Data Visualization (Matplotlib, Seaborn)</p>
          <p>Working with Databases (SQLite, SQLAlchemy)</p>
        </div>
        <div className="rightContent">
          {/* <video src="/python-advanced.mp4" className="backendvideo" loop autoPlay muted /> */}
        </div>
      </div>
    </div>
  );
};

export default Python;
