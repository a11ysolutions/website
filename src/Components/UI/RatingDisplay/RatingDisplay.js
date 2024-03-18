import Star from '../Star/Star'
const RatingDisplay = ({ rating, totalStars = 5 }) => {
    return (
      <div
        style={{ display: 'inline-block' }}
        aria-live="polite"
      >
        <span className="sr-only">Rating: {rating} out of {totalStars} stars</span>
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index} filled={index < rating} />
        ))}
      </div>
    );
};
  
export default RatingDisplay;