import { useState } from 'react'

function useShape() {
    const [shapeList, setShapeList] = useState([]);

    const createShape = (shapeType) => {

        setShapeList((prevShape) => [...prevShape, { ...shapeType, id: Date.now().toString() }]);
    }

    return ({ shapeList, createShape }

    )
}

export default useShape