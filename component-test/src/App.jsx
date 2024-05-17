import { useState } from 'react'
import './App.css'

function App() {

  const [shapeList, setShapeList] = useState([]);
  const [shapeType, setShapeType] = useState({ shapeName: "", shapeColor: "" });

  const getShape = (event) => {
    event.preventDefault();
    setShapeList((prevShape) => [...prevShape, { ...shapeType, id: Date.now().toString() }]);

  }

  return (
    <>
      <header>
        <h1>Shape Creator!</h1>
      </header>
      <main>
        <select name="shape" id="shape" onChange={(event) => { setShapeType((prevShape) => ({ ...prevShape, shapeName: event.target.value })) }}>
          <option value="circle">Circle</option>
          <option value="rectangular">Rectangular</option>
          <option value="square">Square</option>
        </select>

        <select name="color" id="color" onChange={(event) => { setShapeType((prevShape) => ({ ...prevShape, shapeColor: event.target.value })) }}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <input type="button" value="Create Shape!" onClick={getShape} />

        <div className='shape-list'>
          {shapeList.map((shape) => (
            <div className='shape-card' key={shape.id}>
              {(shape.shapeName === "circle" && (<div style={{ height: "100px", width: "100px", backgroundColor: shape.shapeColor, borderRadius: "50%" }}></div>)) ||
                (shape.shapeName === "rectangular" && (<div style={{ height: "50px", width: "100px", backgroundColor: shape.shapeColor }}></div>)) ||
                (shape.shapeName === "square" && (<div style={{ height: "100px", width: "100px", backgroundColor: shape.shapeColor }}></div>))}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
