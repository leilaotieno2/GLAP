import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
  SignUpForm,
  Dashboard,
  Instructor,
  University,
  
} from './index';

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      {/* Router setup */}
      <Router>
        <Routes>
          {/* Route for existing components */}
          <Route path="" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Courses />
              <Teacher />
              <Contact />
              <Footer />
            </>
          } />

          {/* Route for SignUpForm */}
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Instructor" element={<Instructor />} />
          <Route path="/University" element={<University />} />


          {/* Additional routes can be added here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
