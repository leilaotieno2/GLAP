import React from 'react';
import { FaChalkboardTeacher, FaFileAlt, FaUsers, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Instructor = () => {
  const instructor = {
    name: "Dr. Jane Doe",
    id: "987654",
    courses: ["Computer Science 101", "Web Development Masterclass"],
    assignments: ["Assignment 1", "Project Proposal"],
    schedule: ["Lecture: 10 AM - 12 PM", "Office Hours: 2 PM - 4 PM"],
  };

  if (!instructor || !instructor.name || !instructor.id || !instructor.courses || !instructor.assignments || !instructor.schedule) {
    return (
      <div className="container mx-auto mt-8 p-4 bg-gray-100 border rounded-md">
        <p className="text-red-500">Error: Instructor data is incomplete or unavailable.</p>
      </div>
    );
  }

  // Replace these with your actual links or functionality
  const coursesLink = "/instructor/courses";
  const assignmentsLink = "/instructor/assignments";
  const scheduleLink = "/instructor/schedule";
  const profileLink = "/instructor/profile"; // Add a link to the instructor's profile page

  return (
    <div className="flex h-screen items-center bg-gray-100">

      {/* Sidebar */}
      <div className="w-16 p-4 bg-gray-300 border-r border-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-xs font-semibold mb-2 text-center border-b border-gray-500 pb-2">Instructor</h3>
        <ul className="flex flex-col items-center">
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={profileLink}><FaUser className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={coursesLink}><FaChalkboardTeacher className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={assignmentsLink}><FaFileAlt className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={scheduleLink}><FaCalendarAlt className="text-xl text-gray-700" /></a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="mx-auto max-w-screen-md">

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, {instructor.name}!</h2>
            <p className="mb-2 text-gray-600">Instructor ID: {instructor.id}</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="courses">Courses Taught:</h3>
            <ul className="list-disc pl-4">
              {instructor.courses.map((course, index) => (
                <li key={index} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="assignments">Assignments to Review:</h3>
            <ul className="list-disc pl-4">
              {instructor.assignments.map((assignment, index) => (
                <li key={index} className="text-gray-600">{assignment}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="schedule">Schedule:</h3>
            <ul className="list-disc pl-4">
              {instructor.schedule.map((event, index) => (
                <li key={index} className="text-gray-600">{event}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Instructor;
