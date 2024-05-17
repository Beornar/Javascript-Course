import React from 'react'

function circle({shape}) {
    return (
        <div style={{
            height: "100px",
            width: "100px",
            backgroundColor: shape.shapeColor, borderRadius: "50%"
        }}></div>
    )
}

export default circle