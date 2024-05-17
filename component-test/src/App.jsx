import { useState } from 'react'
import './App.css'
import ShapeForm from './components/shapeForm/ShapeForm';
import ShapeList from './components/shapeList/ShapeList';
import Header from './components/shared/header/Header';
import { ShapeProvider } from './contexts/shapeContexts/ShapeContext';


function App() {


  return (
    <>
      <Header />
      <ShapeProvider>
        <main>
          <ShapeForm />

          <ShapeList />
        </main>
      </ShapeProvider>
    </>
  )
}

export default App