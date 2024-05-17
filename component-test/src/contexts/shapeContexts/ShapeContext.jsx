import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import useShape from '../../hooks/shape/useShape';

export const ShapeContext = createContext();

export const ShapeProvider = ({children}) => {
    
    const {shapeList, createShape} = useShape();
    const contextValue = {shapeList, createShape};

  return (

    <ShapeContext.Provider value={contextValue}>
        {children}
    </ShapeContext.Provider>

  )
}
