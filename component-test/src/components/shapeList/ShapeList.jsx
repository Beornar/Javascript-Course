import React from 'react'
import { useContext } from 'react'
import { ShapeContext } from '../../contexts/shapeContexts/ShapeContext'
import ShapeCard from '../shapeCard/ShapeCard'

function ShapeList() {
    const { shapeList } = useContext(ShapeContext);
    return (
        <div className='shape-list'>
            {shapeList.map((shape) => (
                <ShapeCard shape={shape} key={shape.id} />
            ))}
        </div>
    )
}

export default ShapeList