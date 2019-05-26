import React from 'react'
import Rating from './ratting'

const RatingFilter = ({onChange, count}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Rating Filter</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }}
        />
      </div>
)

export default RatingFilter