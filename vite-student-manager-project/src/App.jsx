import './App.css';
import StudentForm from './app/student/student-form/StudentForm.jsx';
import StudentList from './app/student/student-list/StudentList.jsx';
import Header from "./components/shared/header/Header.jsx";
import { StudentProvider } from './hooks/contexts/student/StudentContext';


function App() {


  return (
    <>
    <StudentProvider>
      <Header title={"Student Manager"} navElements={["Home", "About Us", "Contact"]} />
      <br />
      <main>
        <StudentForm />
        <br />
        <StudentList />
      </main>
    </StudentProvider>
    </>
  )
}

export default App
