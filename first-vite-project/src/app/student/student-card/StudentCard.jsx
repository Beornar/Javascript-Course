import { useContext } from "react";
import StudentContext from "../../../hooks/contexts/student/StudentContext";

const StudentCard = ({ student }) => {

    const {deleteStudent} = useContext(StudentContext);

    return (
        <div className="student-card">
            <span className="btn btn-delete" onClick={() => deleteStudent(student.id)}>X</span>
            <ul>
                <li>{student.studentName}</li>
                <li>{student.course}</li>
                <li>{student.instructor}</li>
            </ul>
            <br />
        </div>
    )
}

export default StudentCard;