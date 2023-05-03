import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rocketSlice';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const { id } = rocket;
  const name = rocket.rocket_name;
  const { description } = rocket;
  const flickrImages = rocket.flickr_images;

  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="rocket-container">
      <div className="rocket-details-container">
        <div className="img-container">
          <img src={flickrImages} alt="rocket-img" width={150} />
        </div>
        <div className="rocket-details">
          <span className="rocket-name">{name}</span>

          <span className="rocket-description">
            <p className={rocket.reserved ? 'show' : 'badge'}>Reserved</p>
            {description}
          </span>
          <button
            onClick={reserveRocketHandler}
            type="button"
            className={rocket.reserved ? 'cancel' : 'reserve'}
          >
            {rocket.reserved ? 'Cancel Rocket' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.objectOf.isRequired,
};
