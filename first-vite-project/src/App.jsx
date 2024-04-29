import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [studentList, setStudentList] = useState([
    {
      studentName: "Barkın Onay Sayın",
      course: "React",
      instructor: "Hicran Ertuğral",
      id: "001",
    },
    {
      studentName: "Onur Ege Erkallbek",
      course: "JavaScript",
      instructor: "Buse Uğraş",
      id: "002",
    },
  ]);
  const [studentInput, setStudentInput] = useState({ studentName: "", course: "", instructor: "" });
  const [error, setError] = useState({ studentNameError: false, courseError: false, instructorError: false });

  const addStudent = () => {

    event.preventDefault();

    setError({ studentNameError: false, courseError: false, instructorError: false })

    if (studentInput.studentName.trim() && studentInput.course.trim() && studentInput.instructor.trim()) {
      setStudentList([...studentList, {...studentInput, id: Date.now().toString()}])

    } else {
      setError({ studentNameError: true, courseError: true, instructorError: true })
    }

    setStudentInput({ studentName: "", course: "", instructor: "" })
  }

  return (
    <main>
      <form action="" className='student-form'>
        <div className='input-control'>
          <input type="text" placeholder='Student Name'
            value={studentInput.studentName}
            onChange={(event) => setStudentInput({ ...studentInput, studentName: event.target.value })} />
          {error.studentNameError && <p className='input-error'>Enter a valid student name</p>}
        </div>
      </form>
      <form action="" className='student-form'>
        <div className='input-control'>
          <input type="text" placeholder='Course'
            value={studentInput.course}
            onChange={(event) => setStudentInput({ ...studentInput, course: event.target.value })} />
          {error.courseError && <p className='input-error'>Enter a valid course</p>}
        </div>
      </form>
      <form action="" className='student-form'>
        <div className='input-control'>
          <input type="text" placeholder='Instructor'
            value={studentInput.instructor}
            onChange={(event) => setStudentInput({ ...studentInput, instructor: event.target.value })} />
          {error.instructorError && <p className='input-error'>Enter a valid instructor</p>}
        </div>
      </form>
      <input type="submit" onClick={addStudent}/>

      <div className='student-list'>
        <h3>Student List</h3>
        <div className='student-card'>
          {studentList.map(
            ({ studentName, course, instructor, id }) =>
            (<div className="student-card" key={id}>
              <ul>
                <li>{studentName}</li>
                <li>{course}</li>
                <li>{instructor}</li>
              </ul>
            </div>)
          )}
        </div>
      </div>

    </main>
  )
}

export default App;
