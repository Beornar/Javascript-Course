import './App.css';
import { useState } from 'react';

//her bir kartın üstüne silme butonu koy, header koy(student manager solda yazacak, sağda navbar ama işlemsiz)

function App() {

  //data state
  const [studentList, setStudentList] = useState([]);
  //input state
  const [student, setStudent] = useState({ studentName: "", course: "", instructor: "" });

  //error states
  const [errors, setErrors] = useState({ studentNameError: false, courseError: false, instructorError: false })


  const addStudent = (event) => {
    event.preventDefault();

    //clear previous errors

    setErrors({ studentNameError: false, courseError: false, instructorError: false })

    if (!student.studentName.trim() || !student.course.trim() || !student.instructor.trim()) {
      setErrors(
        {
          studentNameError: !student.studentName.trim(),
          courseError: !student.course.trim(),
          instructorError: !student.instructor.trim()
        })
      //else yerine early return pattern kullanilabilir
      return;
    }

    //studentList state'i guncelle
    setStudentList(
      [
        ...studentList,
        { ...student, id: Math.random().toString() }
      ]
    )

    // setStudentList(
    //   function (prevStudentList) {
    //     return [...prevStudentList, { ...student, id: Math.random().toString() }];
    //   }
    // )
    // setStudentList(prevStudentList => [...prevStudentList, { ...student, id: Math.random().toString() }])

    //inputlari temizle
    setStudent({ studentName: "", course: "", instructor: "" });
    setErrors({ studentNameError: false, courseError: false, instructorError: false });
  }


  const removeStudent = (id) => {
    setStudentList(prevStudentList => prevStudentList.filter(student => student.id !== id));
  };



  return (
    /* JSX */

    <div className="app">
      <h2>Student Manager</h2>
      <form className='student-form'>
        {/* two way binding */}
        <div className="input-control">
          <input
            type="text"
            placeholder='Student Name'
            value={student.studentName} //input'un degeri state'den gelsin
            onChange={(event) => setStudent({ ...student, studentName: event.target.value })} //state'i bu inputun degeriyle guncelle
          />
          {/* conditional rendering */}
          {errors.studentNameError && <p className="error input-error">Please enter a valid student name</p>}
          <br /><br />
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder='Course'
            value={student.course} //input'un degeri state'den gelsin
            onChange={(event) => setStudent({ ...student, course: event.target.value })} //state'i bu inputun degeriyle guncelle
          />
          {errors.courseError && <p className="error input-error">Please enter a valid course</p>}
          <br /><br />
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder='Instructor'
            value={student.instructor} //input'un degeri state'den gelsin
            onChange={(event) => setStudent({ ...student, instructor: event.target.value })} //state'i bu inputun degeriyle guncelle
          />
          {errors.instructorError && <p className="error input-error">Please enter a valid instructor</p>}
          <br /><br />
        </div>
        <input
          type="submit"
          onClick={addStudent}
        />
      </form>
      <div className="student-list">
        <h3>Students</h3>
        <div className="student-card">
          {studentList.map(
            ({ studentName, course, instructor, id }) =>
            (<div className="student-card" key={id}>
              <ul>
                <li>{studentName}</li>
                <li>{course}</li>
                <li>{instructor}</li>
              </ul>
              <button onClick={() => removeStudent(id)}>Delete</button>
            </div>)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;