import React from 'react';
import { FaBook, FaFileAlt, FaGraduationCap, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Dashboard = () => {
  const student = {
    name: "John Doe",
    id: "123456",
    courses: ["Math", "History", "Science"],
    assessment: "Midterm Exam",
    grades: "A",
  };

  if (!student || !student.name || !student.id || !student.courses || !student.assessment || !student.grades) {
    return (
      <div className="container mx-auto mt-8 p-4 bg-gray-100 border rounded-md">
        <p className="text-red-500">Error: Student data is incomplete or unavailable.</p>
      </div>
    );
  }

  // Replace these with your actual links or functionality
  const coursesLink = "/courses";
  const assessmentLink = "/assessment";
  const gradesLink = "/grades";
  const calendarLink = "/calendar";
  const profileLink = "/profile"; // Add a link to the user's profile page

  return (
    <div className="flex h-screen items-center bg-gray-100">

      {/* Sidebar */}
      <div className="w-16 p-4 bg-gray-300 border-r border-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-xs font-semibold mb-2 text-center border-b border-gray-500 pb-2">GLAP</h3>
        <ul className="flex flex-col items-center">
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={profileLink}><FaUser className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={coursesLink}><FaBook className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={assessmentLink}><FaFileAlt className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={gradesLink}><FaGraduationCap className="text-xl text-gray-700" /></a></li>
          <li className="mb-4 transform hover:scale-110 transition-all duration-300"><a href={calendarLink}><FaCalendarAlt className="text-xl text-gray-700" /></a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="mx-auto max-w-screen-md">

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, {student.name}!</h2>
            <p className="mb-2 text-gray-600">Student ID: {student.id}</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="courses">Courses Enrolled:</h3>
            <ul className="list-disc pl-4">
              {student.courses.map((course, index) => (
                <li key={index} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="assessment">Assessment:</h3>
            <p className="text-gray-600">{student.assessment}</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full">
            <h3 className="text-xl font-semibold mb-2" id="grades">Grades:</h3>
            <p className="text-gray-600">{student.grades}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
