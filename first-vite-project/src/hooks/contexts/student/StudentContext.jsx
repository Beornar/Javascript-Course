import React, { createContext } from "react";
import useStudents from "../../students/useStudents";
import { useState } from "react";
import { useEffect } from "react";


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const { studentList, getStudents, createStudent, deleteStudent } = useStudents();

    useEffect(
        () => {

            getStudents();

            // return () => console.log("cleanup");
        },
        []
    )

    const contextValue = { studentList, createStudent, deleteStudent, getStudents };
    return (

        <StudentContext.Provider value={contextValue}> {children} </StudentContext.Provider>
    )

}

export default StudentContext;