import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/shared/header/Header.jsx'
import StudentList from './app/student-list/StudentList.jsx'
import StudentForm from './app/student-form/StudentForm.jsx'

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

  const addStudent = (newStudent) => {
    setStudentList([...studentList, newStudent]);
  }

  return (
    <main>
      <Header title={"Student Manager"} navElements={["Home", "About Us", "Contact"]} />
      
      <StudentForm addStudent={addStudent} />

      <StudentList studentList={studentList} />

    </main>
  )
}

export default App;
