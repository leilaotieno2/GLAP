// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import Landing from './Landing';
import Student from './Student';
import CalendarComponent from './CalendarComponent.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/student" element={<Student />} />
        <Route path="/cal" element={<CalendarComponent />} />
      
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
