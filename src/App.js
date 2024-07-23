import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="title">EU Jobs</h1>
          <p>Search jobs in Public Affaris, Goverment Affairs, Policy, and Public Relaions in Brussels</p>
          <div className="rating">
            <span>The best job board in Brussels</span>
          </div>
          <div className="buttons">
            <button className="btn unlock">🔓 Unlock All Jobs</button>
            <button className="btn receive">📧 Receive Emails For Remote Jobs</button>
          </div>
          <div className="filters">
            <button className="filter-btn">🧳 Job Title</button>
            <button className="filter-btn">🌐 Location</button>
            <button className="filter-btn">🔑 Keywords</button>
            <button className="filter-btn">📈 Experience</button>
            <button className="filter-btn">Show all filters</button>
          </div>
          <div className="sorting">
            <button className="sort-btn">🆕 Date Added</button>
          </div>
          <div className="job-listing">
            <div className="job-card">
              <div className="job-details">
                <h2>Recruiter at HR Agency</h2>
                <p>Mira Search - 2 to 10 employees</p>
                <div className="job-links">
                  <a href="#">Website</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">All Job Openings</a>
                </div>
                <p className="time">0 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;