import './App.css';
import { useState } from 'react';

function App() {

  // const [studentName1, setStudentName1] = useState("Mert Kırant");
  // const [studentName2, setStudentName2] = useState("Onur Ege Erkek");
  // const [studentName3, setStudentName3] = useState("Ali Rıza Taşkıran");

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  const [studentNameInput, setStudentNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");

  return (
    <div className="app">
      <h1>Student Manager</h1>

      <p>Enter Student</p>
      <form action="">
        <input type="text" placeholder='Student Name' onChange={(event) => setStudentNameInput(event.target.value)} />
        <input type="text" placeholder='Course' onChange={(event) => setCourseInput(event.target.value)} />
        <input type="text" placeholder='Instructor' onChange={(event) => setInstructorInput(event.target.value)} />
        <br /><br />
        <input type="submit" onClick={(event) => {
          event.preventDefault();
          setStudentName(studentNameInput);
          setCourse(courseInput);
          setInstructor(instructorInput);
        }} />
      </form>
      <br />
      <div className='student-card'>
        <li>{studentName}</li>
        <li>{course}</li>
        <li>{instructor}</li>
      </div>


      {/* <p>{studentName1}</p>
      <button onClick={() => setStudentName1("Cenk Kaynak")}>Change Student Name</button>

      <p>{studentName2}</p>
      <button onClick={() => setStudentName2("Barkın Sayın")}>Change Student Name</button>

      <p>{studentName3}</p>
      <button onClick={() => setStudentName3("Berkay Turna")}>Change Student Name</button> */}

    </div>
  );
}

export default App;