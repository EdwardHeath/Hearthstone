import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { img, name } = props.cardInfo;
  console.log(props);
  return <div className="card-container">{name}</div>;
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
