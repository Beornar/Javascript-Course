import propTypes from 'prop-types';
import { useState } from 'react';

const StudentForm = ({ addStudent }) => {

    const [studentInput, setStudentInput] = useState({ studentName: "", course: "", instructor: "" });
    const [error, setError] = useState({ studentNameError: false, courseError: false, instructorError: false });

    const submitStudent = (event) => {
        event.preventDefault();

        //clear previous errors

        setError({ studentNameError: false, courseError: false, instructorError: false })

        if (!studentInput.studentName.trim() || !studentInput.course.trim() || !studentInput.instructor.trim()) {
            setError(
                {
                    studentNameError: !studentInput.studentName.trim(),
                    courseError: !studentInput.course.trim(),
                    instructorError: !studentInput.instructor.trim()
                })

            return;
        }

        addStudent({ ...studentInput, id: Date.now().toString() });
        
        //inputlari temizle
        setStudentInput({ studentName: "", course: "", instructor: "" });
        setError({ studentNameError: false, courseError: false, instructorError: false });
    }

    return (
        <div className="student-form-div">
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
            <input type="submit" onClick={submitStudent} />
        </div>
    )
}

export default StudentForm;