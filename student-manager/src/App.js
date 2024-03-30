import './App.css';
import { useState } from 'react';

function App() {

  const [students, setSetudents] = useState([]);

  // const studentList = [
  //   { name: "Cenk", course: "React", instructor: "orkun", id: "001" },
  //   { name: "Barkın", course: "HTML, CSS", instructor: "orkun", id: "002" },
  //   { name: "Ali Rıza", course: "Javascript", instructor: "orkun", id: "003" }
  // ];

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  const [studentNameInput, setStudentNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");

  const [studentNameError, setStudentNameError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [instructorError, setInstructorError] = useState(false);

  return (
    <div className="app">
      <h1>Student Manager</h1>

      <p>Enter Student Information</p>
      <form className="student-form" action="">

        {/* two way assign for studentName Input and setStudentNameInput */}
        <input type="text" id="studentNameId" placeholder='Student Name' value={studentNameInput} onChange={(event) => setStudentNameInput(event.target.value)} />
        <br />
        {studentNameError && <p>Please enter your name</p>}
        <input type="text" id="courseId" placeholder='Course' value={courseInput} onChange={(event) => setCourseInput(event.target.value)} />
        {courseError && <p>Please enter course name</p>}
        <br />
        <input type="text" id="instructorId" placeholder='Instructor' value={instructorInput} onChange={(event) => setInstructorInput(event.target.value)} />
        {instructorError && <p>Please enter your instructor's name</p>}
        <br />
        <input type="submit" onClick={(event) => {
          event.preventDefault();

          // there should be no errors before and after tries. errors are set to false
          setStudentNameError(false);
          setCourseError(false);
          setInstructorError(false);

          // checking the errors
          if (!studentNameInput.trim() || !courseInput.trim() || !instructorInput.trim()) {

            // checking the errors with empty fields
            !studentNameInput.trim() && setStudentNameError(true);
            !courseInput.trim() && setCourseError(true);
            !instructorInput.trim() && setInstructorError(true);
          } else {
            setStudentName(studentNameInput.trim());
            setCourse(courseInput.trim());
            setInstructor(instructorInput.trim());

            setSetudents([...students, {
              name: studentNameInput,
              course: courseInput,
              instructor: instructorInput,
              id: Math.random().toString()
            }])

            setStudentNameInput("");
            setCourseInput("");
            setInstructorInput("");
          }
        }} />
      </form>
      <br />
      <div className="student-list">
        <h3>Student List</h3>
        <div className='student-card'>
          {students.map(
            (student) => {
              return (
                <div className='student-card' key={student.id}>
                  <li>Student: {student.name}</li>
                  <li>Course: {student.course}</li>
                  <li>Instructor: {student.instructor}</li>
                  <br />
                </div>
              )
            }
          )}
        </div>
      </div>

    </div>
  );
}

export default App;