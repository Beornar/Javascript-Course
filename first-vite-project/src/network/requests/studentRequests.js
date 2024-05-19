import { baseService } from "../services/baseService";

export const getStudents = async () => {
    try {
        const response = await baseService.get("/students");
        if (response.status !== 200) {
            throw new Error("Can not get the student list");
        }
        return response.data;

    } catch (error) {
        console.log("getStudents error", error);

    }
}

export const getStudentById = async (studentID) => {
    try {
        const response = await baseService.get(`/students/${studentID}`);
        if (response.status !== 200) {
            throw new Error("Can not get the student by Id");
        }
        return response.data;

    } catch (error) {
        console.log("getStudentById error", error);

    }
}

export const postStudent = async (newStudent) => {
    try {
        const response = await baseService.post("/students", newStudent);
        if (response.status !== 201) {
            throw new Error("Can not create the student");
        }
        return response.data;

    } catch (error) {
        console.log("postStudent error", error);
    }
}

export const deleteStudent = async (studentId) => { 
    try {
        const response = await baseService.delete(`/students/${studentId}`);
        if (response.status !== 200) {
            throw new Error ("Can not delete the student");
        }
        return response.data;
        
    } catch (error) {
        console.log("deleteStudent error", error);
        
    }
}