import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { cardInfo } = props;
  const {
    name,
    cardSet,
    type,
    rarity,
    cost,
    attack,
    health,
    text,
    playerClass,
    img,
    imgGold,
  } = cardInfo;
  return (
    <div className="card-container">
      <img src={img} alt={name} />
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object,
};

export default Card;
