import React from 'react'

function Square({shape}) {

    return (
        <div style={{
            height: "100px",
            width: "100px",
            backgroundColor: shape.shapeColor
        }}></div>
    )
}

export default Square