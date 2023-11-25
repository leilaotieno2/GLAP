// UniversityDashboard.jsx

import React from 'react';
import { FaUniversity, FaBook, FaUsers } from 'react-icons/fa';

const University = () => {
  const university = {
    name: "Example University",
    courses: ["Computer Science", "Engineering", "Business Administration"],
    students: [
      { id: "1", name: "John Doe", course: "Computer Science" },
      { id: "2", name: "Jane Smith", course: "Engineering" },
      { id: "3", name: "Bob Johnson", course: "Business Administration" },
    ],
  };

  if (!university || !university.name || !university.courses || !university.students) {
    return (
      <div className="container mx-auto mt-8 p-4 bg-gray-100 border rounded-md">
        <p className="text-red-500">Error: University data is incomplete or unavailable.</p>
      </div>
    );
  }

  // Replace these with your actual links or functionality
  const coursesLink = "/university/courses";
  const studentsLink = "/university/students";
  const profileLink = "/university/profile"; // Add a link to the university's profile page

  return (
    <div className="flex h-screen items-center bg-gray-100">

      {/* Sidebar */}
      <div className="w-16 p-4 bg-gray-300 border-r border-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-xs font-semibold mb-2 text-center border-b border-gray-500 pb-2">University</h3>
        <ul className="flex flex-col items-center">
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={profileLink}><FaUniversity className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={coursesLink}><FaBook className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={studentsLink}><FaUsers className="text-xl text-gray-700" /></a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="mx-auto max-w-screen-md">

          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome to {university.name}!</h2>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2" id="courses">Courses Offered:</h3>
            <ul className="list-disc pl-4">
              {university.courses.map((course, index) => (
                <li key={index} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2" id="students">Enrolled Students:</h3>
            <ul className="list-disc pl-4">
              {university.students.map((student) => (
                <li key={student.id} className="text-gray-600">
                  {student.name} - {student.course}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default University;
