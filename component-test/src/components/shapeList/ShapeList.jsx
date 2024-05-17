import React from 'react'
import ShapeCard from '../shapeCard/ShapeCard'

function ShapeList({ shapeList }) {
    return (
        <div className='shape-list'>
            {shapeList.map((shape) => (
                <ShapeCard shape={shape} key={shape.id} />
            ))}
        </div>
    )
}

export default ShapeList