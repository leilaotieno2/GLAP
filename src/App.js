// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
