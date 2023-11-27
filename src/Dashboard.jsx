import React from 'react';
import { FaBook, FaFileAlt, FaGraduationCap, FaCalendarAlt, FaUser } from 'react-icons/fa';


const Dashboard = () => {
  return (
 < div>
<div>
  <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap" rel="stylesheet" />
  <div className="task-manager">
    <div className="left-bar">
      <div className="upper-part">
        <div className="actions">
          <div className="circle" />
          <div className="circle-2" />
        </div>
      </div>
      <div className="left-content">
        <ul className="action-list">
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-inbox" viewBox="0 0 24 24">
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
            <span>Inbox</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span> Today</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-calendar" viewBox="0 0 24 24">
              <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
              <path d="M16 2v4M8 2v4m-5 4h18" />
            </svg>
            <span>Upcoming</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-hash">
              <line x1={4} y1={9} x2={20} y2={9} />
              <line x1={4} y1={15} x2={20} y2={15} />
              <line x1={10} y1={3} x2={8} y2={21} />
              <line x1={16} y1={3} x2={14} y2={21} /></svg>
            <span>Important</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span>Meetings</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-trash" viewBox="0 0 24 24">
              <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Trash</span>
          </li>
        </ul>
        <ul className="category-list">
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span>Family</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-sun" viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={5} />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <span>Vacation</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" /></svg>
            <span>Festival</span>
          </li>
          <li className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            <span>Concerts</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="page-content">
      <div className="header">Today Tasks</div>
      <div className="content-categories">
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-1" />
          <label className="category" htmlFor="opt-1">All</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-2" defaultChecked />
          <label className="category" htmlFor="opt-2">Important</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-3" />
          <label className="category" htmlFor="opt-3">Notes</label>
        </div>
        <div className="label-wrapper">
          <input className="nav-item" name="nav" type="radio" id="opt-4" />
          <label className="category" htmlFor="opt-4">Links</label>
        </div>
      </div>
      <div className="tasks-wrapper">
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-1" defaultChecked />
          <label htmlFor="item-1">
            <span className="label-text">Dashboard Design Implementation</span>
          </label>
          <span className="tag approved">Approved</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-2" defaultChecked />
          <label htmlFor="item-2">
            <span className="label-text">Create a userflow</span>
          </label>
          <span className="tag progress">In Progress</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-3" />
          <label htmlFor="item-3">
            <span className="label-text">Application Implementation</span>
          </label>
          <span className="tag review">In Review</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-4" />
          <label htmlFor="item-4">
            <span className="label-text">Create a Dashboard Design</span>
          </label>
          <span className="tag progress">In Progress</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-5" />
          <label htmlFor="item-5">
            <span className="label-text">Create a Web Application Design</span>
          </label>
          <span className="tag approved">Approved</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-6" />
          <label htmlFor="item-6">
            <span className="label-text">Interactive Design</span>
          </label>
          <span className="tag review">In Review</span>
        </div>
        <div className="header upcoming">Upcoming Tasks</div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-7" />
          <label htmlFor="item-7">
            <span className="label-text">Dashboard Design Implementation</span>
          </label>
          <span className="tag waiting">Waiting</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-8" />
          <label htmlFor="item-8">
            <span className="label-text">Create a userflow</span>
          </label>
          <span className="tag waiting">Waiting</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-9" />
          <label htmlFor="item-9">
            <span className="label-text">Application Implementation</span>
          </label>
          <span className="tag waiting">Waiting</span>
        </div>
        <div className="task">
          <input className="task-item" name="task" type="checkbox" id="item-10" />
          <label htmlFor="item-10">
            <span className="label-text">Create a Dashboard Design</span>
          </label>
          <span className="tag waiting">Waiting</span>
        </div>
      </div>
    </div>
    <div className="right-bar">
      <div className="top-part">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        <div className="count">6</div>
      </div>
      <div className="header">Schedule</div>
      <div className="right-content">
        <div className="task-box yellow">
          <div className="description-task">
            <div className="time">08:00 - 09:00 AM</div>
            <div className="task-name">Product Review</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
            <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-4" />
          </div>
        </div>
        <div className="task-box blue">
          <div className="description-task">
            <div className="time">10:00 - 11:00 AM</div>
            <div className="task-name">Design Meeting</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
          </div>
        </div>
        <div className="task-box red">
          <div className="description-task">
            <div className="time">01:00 - 02:00 PM</div>
            <div className="task-name">Team Meeting</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" alt="member-3" />
            <img src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80" alt="member-4" />
          </div>
        </div>
        <div className="task-box green">
          <div className="description-task">
            <div className="time">03:00 - 04:00 PM</div>
            <div className="task-name">Release Event</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80" alt="member-3" />
            <img src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80" alt="member-4" />
            <img src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80" alt="member-5" />
          </div>
        </div>
        <div className="task-box blue">
          <div className="description-task">
            <div className="time">08:00 - 09:00 PM</div>
            <div className="task-name">Release Event</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80" alt="member-3" />
            <img src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80" alt="member-4" />
            <img src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80" alt="member-5" />
          </div>
        </div>
        <div className="task-box yellow">
          <div className="description-task">
            <div className="time">11:00 - 12:00 PM</div>
            <div className="task-name">Practise</div>
          </div>
          <div className="more-button" />
          <div className="members">
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
            <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80" alt="member-2" />
            <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
            <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
    );
};

export default Dashboard;