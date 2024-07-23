import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchFilters />
      <JobListings />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="Header">
      <div className="Header__logo">
        <img src="logo.png" alt="Site Logo" />
        <span>Job Board</span>
      </div>
      <nav className="Header__nav">
        <div className="Header__language">
          <span>EN</span>
        </div>
        <div className="Header__search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="HeroSection">
      <h1>EU Jobs</h1>
      <p>Search jobs in Public Affaris, Goverment Affairs, Policy, and Public Relaions in Brussels</p>
      <button className="primary-button">The best job board in Brussels</button>
    </div>
  );
}

function SearchFilters() {
  return (
    <div className="SearchFilters">
      <input type="text" placeholder="Job Title" />
      <input type="text" placeholder="Location" />
      <input type="text" placeholder="Keywords" />
      <input type="text" placeholder="Experience" />
      <button>Show all filters</button>
    </div>
  );
}

function JobListings() {
  const jobs = [
    {
      id: 1,
      title: 'Recruiter at HR Agency',
      company: 'Mira Search',
      description: '2 - 10 employees',
      postedTime: '0 minutes ago',
      links: ['Website', 'LinkedIn', 'All Job Openings'],
    },
    {
      id: 2,
      title: 'Software Engineer at Tech Company',
      company: 'Tech Co',
      description: '50 - 200 employees',
      postedTime: '10 minutes ago',
      links: ['Website', 'LinkedIn', 'All Job Openings'],
    },
    {
      id: 3,
      title: 'Project Manager at Startup',
      company: 'Startup Inc.',
      description: '10 - 50 employees',
      postedTime: '1 hour ago',
      links: ['Website', 'LinkedIn', 'All Job Openings'],
    },
  ];

  return (
    <div className="JobListings">
      <h2>37,527 Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <p>{job.postedTime}</p>
      <div className="JobCard__links">
        {job.links.map((link, index) => (
          <a href="#" key={index}>{link}</a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="Footer">
      <p>© 2024 Job Board. All rights reserved.</p>
    </footer>
  );
}

export default App;