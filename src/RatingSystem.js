import React, { useState } from 'react'

const RatingSystem = ( ) => {
  // the state is initialized at the first index
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
        {/* created an array containing an array length of 5 */}
        {[...Array(5)].map((star,index) => {
          return <button key={index} 
        /* If the indices of the stars are less or equal to the star that is clicked, 
        all those stars fitting that criteria will fill. ie: click the 4th star
        (all star indices < or = to the index of the 4th star fill. 
        The 5th star wouldn't fill. It's index is > than that of the forth) */
          className={index <= rating ? "filled-star" : "unfilled-star"}
        /* set the state of the rating to the index of the clicked star */
          onClick={() => (setRating(index))}
          onDoubleClick={() => (setRating(!index))}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
          >
          {/* HTML code for star */}
            <span className="star">&#9733;</span> 
          </button>
        
        })}
    </div>
  )
    // if (double clicked) {
//    setRating(!index)
    // }
  
}

export default RatingSystem
