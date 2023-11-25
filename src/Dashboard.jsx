import React from 'react';
import PhotoIcon from './PhotoIcon'
import { useNavigate } from 'react-router-dom'; 

import { UserCircleIcon } from '@heroicons/react/outline';

import './Dashboard.css';


const Dashboard = () => {
   
   
  return (

  <span style={{fontFamily: 'verdana, geneva, sans-serif'}}>
  <title>Job Dashboard | By Code Info</title>
  <link rel="stylesheet" href="style.css" />
  {/* Font Awesome Cdn Link */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <div className="container">
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="/pic/logo.jpg" alt />
          <h1>jobs</h1>
        </div>
        <ul>
          <li><a href="#">
              <i className="fas fa-user" />
              <span className="nav-item">Dashboard</span>
            </a>
          </li>
          <li><a href="#">
              <i className="fas fa-chart-bar" />
              <span className="nav-item">Analytics</span>
            </a>
          </li>
          <li><a href="#">
              <i className="fas fa-tasks" />
              <span className="nav-item">Jobs Board</span>
            </a>
          </li>
          <li><a href="#">
              <i className="fab fa-dochub" />
              <span className="nav-item">Documnents</span>
            </a>
          </li>
          <li><a href="#">
              <i className="fas fa-cog" />
              <span className="nav-item">Setting</span>
            </a>
          </li>
          <li><a href="#">
              <i className="fas fa-question-circle" />
              <span className="nav-item">Help</span>
            </a>
          </li>
          <li><a href="#" className="logout">
              <i className="fas fa-sign-out-alt" />
              <span className="nav-item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section className="main">
      <div className="main-top">
        <p>Explore the universe!</p>
      </div>
      <div className="main-body">
        <h1>Recent Jobs</h1>
        <div className="search_bar">
          <input type="search" placeholder="Search job here..." />
          <select name id>
            <option>Category</option>
            <option>Web Design</option>
            <option>App Design</option>
            <option>App Development</option>
          </select>
          <select className="filter">
            <option>Filter</option>
          </select>
        </div>
        <div className="tags_bar">
          <div className="tag">
            <i className="fas fa-times" />
            <span>Programming</span>
          </div>
          <div className="tag">
            <i className="fas fa-times" />
            <span>Design</span>
          </div>
          <div className="tag">
            <i className="fas fa-times" />
            <span>PHP</span>
          </div>
          <div className="tag">
            <i className="fas fa-times" />
            <span>JavaScript</span>
          </div>
        </div>
        <div className="row">
          <p>There are more than <span>400</span> Jobs</p>
          <a href="#">See all</a>
        </div>
        <div className="job_card">
          <div className="job_details">
            <div className="img">
              <i className="fab fa-google-drive" />
            </div>
            <div className="text">
              <h2>UX Designer</h2>
              <span>Google Drive - Junior Post</span>
            </div>
          </div>
          <div className="job_salary">
            <h4>$6.7 - $12.5k /yr</h4>
            <span>1 days ago</span>
          </div>
        </div>
        <div className="job_card">
          <div className="job_details">
            <div className="img">
              <i className="fab fa-google" />
            </div>
            <div className="text">
              <h2>JavaScript Developer</h2>
              <span>Google - Senior Post</span>
            </div>
          </div>
          <div className="job_salary">
            <h4>$8.7 - $13.2k /yr</h4>
            <span>2 days ago</span>
          </div>
        </div>
        <div className="job_card">
          <div className="job_details">
            <div className="img">
              <i className="fab fa-facebook" />
            </div>
            <div className="text">
              <h2>Product Developer</h2>
              <span>Facbook - Manager Post</span>
            </div>
          </div>
          <div className="job_salary">
            <h4>$11 - $18.5k /yr</h4>
            <span>2 days ago</span>
          </div>
        </div>
        <div className="job_card">
          <div className="job_details">
            <div className="img">
              <i className="fab fa-git-alt" />
            </div>
            <div className="text">
              <h2>Programmer</h2>
              <span>Github - Juni Post</span>
            </div>
          </div>
          <div className="job_salary">
            <h4>$6 - $11.5k /yr</h4>
            <span>3 days ago</span>
          </div>
        </div>
        <div className="job_card">
          <div className="job_details">
            <div className="img">
              <i className="fab fa-youtube" />
            </div>
            <div className="text">
              <h2>React.js Expert</h2>
              <span>Youtube - VIP</span>
            </div>
          </div>
          <div className="job_salary">
            <h4>$12.5 - $25.5k /yr</h4>
            <span>4 days ago</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</span>

  );
};

export default Dashboard
