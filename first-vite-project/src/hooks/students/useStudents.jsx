import axios from 'axios';
import { useState } from 'react';


const useStudents = () => {

    const apiURL = import.meta.env.VITE_API_URL;
    console.log(apiURL);

    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const createStudent = async (student) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${apiURL}/students`, student);
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
            const response = await axios.delete(`${apiURL}/students/${studentId}`);
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
            const response = await axios(`${apiURL}/students`);
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