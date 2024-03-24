import './App.css';
import { useState } from 'react';

function App() {

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  const [studentNameInput, setStudentNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");

  const [studentNameError, setStudentNameError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [instructorError, setInstructorError] = useState("");

  return (
    <div className="app">
      <h1>Student Manager</h1>

      <p>Enter Student</p>
      <form action="">
        <input type="text" id="studentNameId" placeholder='Student Name' value={studentNameInput} onChange={(event) => setStudentNameInput(event.target.value)} />
        <p>{studentNameError}</p>
        <input type="text" id="courseId" placeholder='Course' value={courseInput} onChange={(event) => setCourseInput(event.target.value)} />
        <p>{courseError}</p>
        <input type="text" id="instructorId" placeholder='Instructor' value={instructorInput} onChange={(event) => setInstructorInput(event.target.value)} />
        <p>{instructorError}</p>
        <input type="submit" onClick={(event) => {
          event.preventDefault();
          if (!studentNameInput || !courseInput || !instructorInput) {
            setStudentNameError(studentNameInput.trim() ? "" : "Name can not be empty");
            setCourseError(courseInput.trim() ? "" : "Course can not be empty");
            setInstructorError(instructorInput.trim() ? "" : "Instructor can not be empty");
          }
          setStudentName(studentNameInput.trim());
          setCourse(courseInput.trim());
          setInstructor(instructorInput.trim());
          setStudentNameInput("");
          setCourseInput("");
          setInstructorInput("");
        }} />
      </form>
      <br />
      <div className='student-card'>
        <li>{studentName}</li>
        <li>{course}</li>
        <li>{instructor}</li>
      </div>

    </div>
  );
}

export default App;