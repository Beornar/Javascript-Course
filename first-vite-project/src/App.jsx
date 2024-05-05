import { useState } from 'react'
import './App.css'
import Header from './components/shared/header/Header.jsx'
import StudentList from './app/student/student-list/StudentList.jsx'
import StudentForm from './app/student/student-form/StudentForm.jsx'

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

  const addStudent = (student) => {
    setStudentList(prevStudentList => [...prevStudentList, { ...student, id: Date.now().toString() }])
  }

  return (
    <main>

      <Header title={"Student Manager"} navElements={["Home", "About Us", "Contact"]} />
      <br />
      <StudentForm addStudent={addStudent} />
      <br />
      <StudentList studentList={studentList} />

    </main>
  )
}

export default App;
