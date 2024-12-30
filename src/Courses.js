import React from 'react';
import './Courses.css';  

const Courses = () => {
  return (
    <div className="courses-page">
      <header className="courses-header">
        <h1>Explore Our Courses</h1>
        <p>Unlock your potential with our diverse range of courses.</p>
      </header>

      <section className="course-list">
        <div className="course-card">
          <div className="course-content">
            <h2>Front-End Development</h2>
            <p>Build dynamic and responsive websites with the latest front-end technologies.</p>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="course-card">
          <div className="course-content">
            <h2>Back-End Development</h2>
            <p>Create scalable server-side applications and APIs.</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Database Management</li>
              <li>Authentication & Security</li>
            </ul>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="course-card">
          <div className="course-content">
            <h2>Data Science & Analytics</h2>
            <p>Analyze data and gain actionable insights using advanced data techniques.</p>
            <ul>
              <li>Python</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Machine Learning</li>
            </ul>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="course-card">
          <div className="course-content">
            <h2>Additional Skills</h2>
            <p>Enhance your career with these supplementary skills.</p>
            <ul>
              <li>Version Control with Git</li>
              <li>Agile Methodologies</li>
              <li>Problem Solving</li>
              <li>Soft Skills</li>
            </ul>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
