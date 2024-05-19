import axios from 'axios';
import { useState } from 'react';

const useStudents = () => {

    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const createStudent = async (student) => {
        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:5050/students", student);
            if (response.status !== 201) {
                throw new Error("Student can not be created.");
            }
            setStudentList(prevStudentList => [...prevStudentList, response.data]);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const deleteStudent = async (studentId) => {
        try {
            setIsLoading(true);
            const response = await axios.delete(`http://localhost:5050/students/${studentId}`);
            if (response.status !== 200) {
                throw new Error("Student can not be deleted.");
            }
            setStudentList(
                (prevStudentList) => {
                    return prevStudentList.filter(
                        (student) => student.id !== studentId
                    )
                }
            )

        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const getStudents = async () => {
        try {
            setIsLoading(true);
            const response = await axios("http://localhost:5050/students");
            if (response.status !== 200) {
                throw new Error("Can not access student list.");
            }
            setStudentList(response.data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }


    return { studentList, isLoading, createStudent, deleteStudent, getStudents }
}

export default useStudents