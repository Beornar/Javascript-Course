import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { ShapeContext } from '../../contexts/shapeContexts/ShapeContext';

const ShapeForm = () => {

    const { createShape } = useContext(ShapeContext);

    const [shapeType, setShapeType] = useState({ shapeName: "", shapeColor: "" });

    const getShape = (event) => {
        event.preventDefault();
        createShape(shapeType);
    }


    return (
        <div className='shape-form'>
            <select name="shape" id="shape" defaultValue="" onChange={(event) => { setShapeType((prevShape) => ({ ...prevShape, shapeName: event.target.value })) }}>
                <option value="" disabled>Select Shape</option>
                <option value="circle">Circle</option>
                <option value="rectangular">Rectangular</option>
                <option value="square">Square</option>
            </select>

            <select name="color" id="color" defaultValue="" onChange={(event) => { setShapeType((prevShape) => ({ ...prevShape, shapeColor: event.target.value })) }}>
                <option value="" disabled>Select Color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>

            <input type="button" value="Create Shape!" onClick={getShape} />
        </div>
    )

}
export default ShapeForm