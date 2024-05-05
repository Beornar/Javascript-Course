import StudentCard from "../student-card/StudentCard.jsx";

const StudentList = ({studentList}) => {

    return (
        <div className="student-list">
            <h3>Student List</h3>
            {studentList.map((student) => {
                return <StudentCard student={student} key={student.id} />
            })}
        </div>
    )

}

export default StudentList;
