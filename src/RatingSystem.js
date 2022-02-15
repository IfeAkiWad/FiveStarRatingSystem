import React, { useState } from 'react'
import fiveStarImg from './FiveStar';
import FilledStar from './assets/filled-star.svg'
import EmptyStar from './assets/empty-star.svg';


const RatingSystem = ( ) => {
    const [rating, setRating] = useState(0)

  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
        {fiveStarImg.map((star, index) => {
        index += 1
        return <button key={index} 
          onClick={() => (index <= rating ? FilledStar : EmptyStar)
            // setRating(index)
          }>
            <img key={index} src={star} alt={"empty-star"}/>
          </button>
        
        })}
    </div>
  )
    
  
}

export default RatingSystem
