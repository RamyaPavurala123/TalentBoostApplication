import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackEnd.css';

const BackEnd = () => {
  const navigate = useNavigate();
  return (
<div class="container">

    <div class="content">
      <div class="leftContent">
        <h1 className="nav-link" onClick={() => navigate('/JavaConcepts')}>Java Concepts</h1>
        <p>Object-Oriented Programming (OOP)</p>
        <p>Classes and Objects</p>
        <p>Inheritance</p>
        <p>Polymorphism</p>
        <p>Abstraction</p>
        <p>Encapsulation</p>
        <p>Exception Handling</p>
        <p>Java Collections (List, Set, Map)</p>
        <p>Multithreading</p>
        <p>Java Streams</p>
        <p>File I/O</p>
        <p>Generics</p>
        <p>JDBC (Database Connectivity)</p>
        <p>Annotations</p>
        <p>Memory Management (Garbage Collection)</p>
        <p>JVM, JRE, and JDK</p>
      </div>
      <div class="rightContent">
        {/* <img src="/java-concepts.png" alt="Java Concepts" /> */}
        <img src='/javalogo.png' className='backend'/>
        {/* <video src='/laptop.mp4' className='backendvideo' loop autoPlay muted /> */}
      </div>
    </div>

    <div class="content">
      <div class="leftContent">
        <h1 className="nav-link" onClick={() => navigate('/AdvanceJavaTopics')}>Advanced Java Topics</h1>
        <p>Spring Framework</p>
        <p>Hibernate ORM</p>
        <p>RESTful APIs</p>
        <p>Microservices</p>
        <p>Concurrency and Parallelism</p>
        <p>Design Patterns</p>
        <p>Testing (JUnit, Mockito)</p>
        <p>Deployment (Maven, Gradle)</p>
      </div>
      <div class="rightContent">
        {/* <video src="/laptop.mp4"  className='backend'  autoPlay  muted loop></video> */}
        {/* <img src='/javalogo.png' className='backend'/> */}
        <video src='/laptop.mp4' className='backendvideo' loop autoPlay muted />
      </div>
    </div>
  </div>
  );
};

export default BackEnd;
