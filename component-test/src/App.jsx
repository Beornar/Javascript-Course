import { useState } from 'react'
import './App.css'
import ShapeForm from './components/shapeForm/ShapeForm';
import ShapeList from './components/shapeList/ShapeList';


function App() {

  const [shapeList, setShapeList] = useState([]);

  const getShape = (event) => {
    event.preventDefault();

    const createShape = (shapeType) => {

      setShapeList((prevShape) => [...prevShape, { ...shapeType, id: Date.now().toString() }]);
    }


    return (
      <>
        <header>
          <h1>Shape Creator!</h1>
        </header>
        <main>
          <ShapeForm createShape={createShape} />

          <ShapeList shapeList={shapeList} />
        </main>
      </>
    )
  }
}
export default App
