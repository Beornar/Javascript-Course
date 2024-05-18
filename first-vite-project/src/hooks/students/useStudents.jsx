import axios from 'axios';
import { useState } from 'react';

const useStudents = () => {

    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const createStudent = async (student) => {
        const response = await axios.post("http://localhost:5050/students", student)
        setStudentList(prevStudentList => [...prevStudentList, response.data])
    }

    const deleteStudent = async (studentId) => {
        const response = await axios.delete(`http://localhost:5050/students/${studentId}`);
        setStudentList(
            (prevStudentList) => {
                return prevStudentList.filter(
                    (student) => student.id !== studentId
                )
            }
        )
    }

    const getStudents = async () => {
        try {
            setIsLoading(true);
            const response = await axios("http://localhost:5050/students")
            setStudentList(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    return {studentList, isLoading, createStudent, deleteStudent, getStudents}
}

export default useStudents