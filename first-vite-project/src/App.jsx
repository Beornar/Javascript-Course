import { useEffect, useState } from 'react';
import './App.css';
import StudentList from './app/student/student-list/StudentList.jsx';
import Header from "./components/shared/header/Header.jsx";
import StudentForm from './app/student/student-form/StudentForm.jsx';
import axios from "axios";
import useStudents from './hooks/students/useStudents';
import StudentContext from './hooks/contexts/student/StudentContext';

function App() {






  return (
    <>
    <StudentProvider>
      <Header title={"Student Manager"} navElements={["Home", "About Us", "Contact"]} />
      <br />
      <main>
        <StudentForm createStudent={createStudent} />
        <br />
        <StudentList studentList={studentList} deleteStudent={deleteStudent} />
      </main>
    </StudentProvider>
    </>
  )
}

export default App
