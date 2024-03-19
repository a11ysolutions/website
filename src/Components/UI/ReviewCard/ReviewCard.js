import React from 'react';
import './ReviewCard.css';
import RatingDisplay from "../RatingDisplay/RatingDisplay"

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <div className="reviewCard-image">
        <img src={review.image} alt={review.name} />
      </div>
        <div className="reviewCard-content">
        <RatingDisplay rating={5} />
        <p className="reviewCard-name">{review.name}</p>
        <q className="reviewCard-comment">{review.comment}</q>
      </div>
    </div>
  );
};

export default ReviewCard;