import React from 'react'

function Rectangular({shape}) {

    return (
        <div style={{
            height: "50px",
            width: "100px",
            backgroundColor: shape.shapeColor
        }}></div>
    )
}

export default Rectangular