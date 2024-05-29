import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <IonIcon
          key={index}
          icon={index <= rating ? star : starOutline}
          onClick={() => onRatingChange(index)}
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default StarRating;
