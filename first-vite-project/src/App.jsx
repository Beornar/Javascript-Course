import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/shared/header/Header.jsx'
import StudentList from './app/student/student-list/StudentList.jsx'
import StudentForm from './app/student/student-form/StudentForm.jsx'

function App() {

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5050/students`)
      .then(response => response.json())
      .then(data => setStudentList(data))
  }, []);


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
