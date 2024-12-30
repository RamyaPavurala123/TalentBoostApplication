

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontEnd.css';

const FrontEnd = () => {
  const navigate = useNavigate();
  return (
    <div className='FrontEndContainer'>
      <div className='content'>
        <div className='leftContent'>
          <h1 className="nav-link" onClick={() => navigate('/HTMLConcepts')}>HTML Concepts</h1>
          <p>HTML Elements</p>
          <p>HTML Tags</p>
          <p>HTML Attributes</p>
          <p>HTML Forms</p>
          <p>Semantic HTML</p>
          <p>HTML Tables</p>
          <p>HTML Lists</p>
          <p>Multimedia (Images, Audio, Video)</p>
          <p>HTML Links</p>
          <p>Meta Tags</p>
          <p>Document Structure (DOCTYPE, Head, Body)</p>
        </div>
        <div className='rightContent'>
          <video src='/laptop.mp4' className='frontendvideo' loop autoPlay muted />
         
        </div>
      </div>

      <div className='content'>
        <div className='CSSrightContent'>
          {/* <video src='/laptop.mp4' className='frontendvideo' loop autoPlay muted /> */}
          <img src='/cssimage.png' className='cssimage'/>
        </div>
        <div className='CSSleftContent'>

          <h1 className="nav-link" onClick={() => navigate('/CSSConcepts')}>CSS Concepts</h1>
<p>Selectors (class, id, element)</p>
<p>Box Model (margin, padding, border)</p>
<p>Colors and Backgrounds</p>
<p>Text Styling (fonts, size, alignment)</p>
<p>Positioning (relative, absolute, fixed)</p>
<p>Display (block, inline, flex)</p>
<p>Flexbox Basics (align and space items)</p>
<p>Borders and Shadows</p>
<p>Responsive Design (media queries)</p>
<p>Transitions (hover effects)</p>

        </div>
        
      </div>



      <div className='content'>
        <div className='leftContent'>
        <h1 className="nav-link" onClick={() => navigate('/JavaScriptConcepts')}>JavaScript Concepts</h1>
<p>Variables (let, const, var)</p>
<p>Data Types (string, number, boolean, array, object)</p>
<p>Functions (declaration, arrow functions)</p>
<p>Events (click, hover, keypress)</p>
<p>DOM Manipulation (getElementById, querySelector)</p>
<p>Loops (for, while, forEach)</p>
<p>Conditionals (if-else, switch)</p>
<p>Array Methods (map, filter, reduce)</p>
<p>Objects and JSON</p>
<p>Promises and Async/Await</p>
<p>Event Listeners</p>
<p>Local Storage and Session Storage</p>
<p>ES6 Features (template literals, destructuring)</p>
<p>APIs (fetch, XMLHttpRequest)</p>
<p>Error Handling (try, catch)</p>

        </div>
        <div className='rightContent'>
          {/* <video src='/laptop.mp4' className='frontendvideo' loop autoPlay muted /> */}
          <img src='/js.png' className='jsimage'/>
        </div>
      </div>
   

      <div className='content'>
        
        <div className='ReactrightContent'>
          {/* <video src='/laptop.mp4' className='frontendvideo' loop autoPlay muted /> */}
          <img src='/reactjs.png' className='reactimage'/>
        </div>
        <div className='ReactleftContent'>
        <h1 className="nav-link" onClick={() => navigate('/ReactjsConcepts')}>React.js Concepts</h1>
<p>JSX (JavaScript XML)</p>
<p>Components (Functional and Class)</p>
<p>Props (Passing Data)</p>
<p>State (useState Hook)</p>
<p>Lifecycle Methods (useEffect)</p>
<p>Events (onClick, onChange)</p>
<p>Conditional Rendering (if, ternary operator)</p>
<p>Lists and Keys</p>
<p>Forms and Controlled Components</p>
<p>Routing (React Router)</p>
<p>Context API (for Global State)</p>
<p>Hooks (useState, useEffect, useContext)</p>
<p>React Developer Tools</p>
<p>Styling (CSS Modules, Styled Components)</p>
<p>Performance Optimization (React.memo)</p>
<p>Error Boundaries</p>
<p>Prop Drilling vs Context API</p>
<p>Fetching Data (API Calls with Fetch/Axios)</p>
<p>Fragments and Portals</p>
<p>React Redux (State Management)</p>

        </div>
        
      </div>
    </div>
  );
};

export default FrontEnd;
