import { useState } from 'react'
import './App.css'
import ShapeForm from './components/shapeForm/ShapeForm';
import ShapeList from './components/shapeList/ShapeList';
import Header from './components/shared/header/Header';
import useShape from './hooks/shape/useShape';


function App() {
  const {createShape, shapeList} = useShape();


  return (
    <>
      <Header />
      <main>
        <ShapeForm createShape={createShape} />

        <ShapeList shapeList={shapeList} />
      </main>
    </>
  )
}

export default App