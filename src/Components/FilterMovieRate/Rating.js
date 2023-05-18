import React, { useState } from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({rating, setRating, isMovieRating, moviRating}) => {
  const handlChange =(value)=> setRating(value);
  return (
    isMovieRating ?(
    <span>
    <Rate disabled  value={moviRating} />
   
  </span>)
    :(<span>
      <Rate tooltips={desc} onChange={handlChange} value={rating} />
    </span>)
  );
};

export default Rating;