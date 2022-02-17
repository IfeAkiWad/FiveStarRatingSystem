import React from 'react'
import ClothingImage from "./assets/ClothingImage.jpeg"

const ClothingComponent = () => {
  return (
    <div>
        <img className="clothing-image" src={ClothingImage} alt={"clothing"} />
    </div>
  )
}

export default ClothingComponent