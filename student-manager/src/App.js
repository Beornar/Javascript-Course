import './App.css';
import { useState } from 'react';

function App() {

  const [studentName1, setStudentName1] = useState("Mert Kırant");
  const [studentName2, setStudentName2] = useState("Onur Ege Erkek");
  const [studentName3, setStudentName3] = useState("Ali Rıza Taşkıran");

  return (
    <div className="app">
      <h1>Student Manager</h1>

      <p>{studentName1}</p>
      <button onClick={() => setStudentName1("Cenk Kaynak")}>Change Student Name</button>

      <p>{studentName2}</p>
      <button onClick={() => setStudentName2("Barkın Sayın")}>Change Student Name</button>

      <p>{studentName3}</p>
      <button onClick={() => setStudentName3("Berkay Turna")}>Change Student Name</button>
    </div >
  );
}

export default App;