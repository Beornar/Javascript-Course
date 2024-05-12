import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const useStudents = () => {

    const [studentList, setStudentList] = useState([])


    const createStudent = async (student) => {
        const response = await axios.post("http://localhost:5050/students", student)
        console.log(response);
        setStudentList(prevStudentList => [...prevStudentList, response.data])
    }

    const deleteStudent = async (studentId) => {
        const response = await axios.delete(`http://localhost:5050/students/${studentId}`);
        console.log(response);
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
            const response = await axios("http://localhost:5050/students")
            setStudentList(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    return {studentList, createStudent, deleteStudent, getStudents}
}

export default useStudents