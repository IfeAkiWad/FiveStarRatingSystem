import React, { useState } from 'react'
import ClothingComponent from './ClothingComponent'

const RatingSystem = ( ) => {
  // the state is initialized at the first index
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
    <div>
      <h1 className="rating-heading">How did you enjoy your purchase?</h1>
      <p>Please let us know by giving this purchase a rating.</p>
      <ClothingComponent />
        <h2 className="rating-heading-2">Select a rating:</h2>
        <div className="star-center">
          {/* created an array containing an array length of 5 */}
          {[...Array(5)].map((star,index) => {
              return <button key={index} 
            /* If the indices of the stars are less or equal to the star that is clicked or hovered over, 
            all those stars fitting that criteria will fill. ie: click/hover over the 4th star
            (all star indices < or = to the index of the 4th star fill. 
            The 5th star wouldn't fill. Its index is > than that of the forth) */
              className={index <= (hover || rating) ? "filled-star" : "unfilled-star"}
            /* set the state of the rating to the index of the clicked star */
              onClick={() => (setRating(index))}
            /* double clicking a star will reset the rating */
              onDoubleClick={() => (setRating(!index))}
            /* hovering over stars */
              onMouseOver={() => setHover(index) }
              onMouseLeave={() => setHover(rating)}
              >
              {/* HTML code for star */}
                <span className="star">&#9733;</span> 
              </button>
          })}
      </div>
    </div>
  )
}

export default RatingSystem
