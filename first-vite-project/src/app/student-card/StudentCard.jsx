import propTypes from 'prop-types';

const StudentCard = ({ student }) => {
    return (
        <div className="student-card">
            <ul>
                <li>{student.studentName}</li>
                <li>{student.course}</li>
                <li>{student.instructor}</li>
            </ul>
        </div>
    )

}

StudentCard.defaultProps = {
    studentName: "Default Name",
    course: "Default Course",
    instructor: "Default Instructor"
}

export default StudentCard;