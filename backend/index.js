const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const jobs = [
  {
    title: 'Recruiter at HR Agency',
    company: 'Mira Search',
    employees: '2 to 10',
    website: '#',
    linkedin: '#',
    allOpenings: '#',
    time: '0 minutes ago'
  }
  // Add more job objects here
];

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
