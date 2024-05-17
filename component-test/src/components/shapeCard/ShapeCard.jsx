import React from 'react'
import Rectangular from '../shapes/Rectangular'
import Square from '../shapes/Square'
import Circle from '../shapes/Circle'

function ShapeCard({ shape }) {
    return (
        <div className='shape-card'>
            {(shape.shapeName === "circle" && <Circle shape={shape} />) ||
                (shape.shapeName === "rectangular" && <Rectangular shape={shape} />) ||
                (shape.shapeName === "square" && <Square shape={shape} />)}
        </div>
    )
}

export default ShapeCard