import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import './GameScreen.css';

const GameScreen = ({ question, buttons }) => (
  <div className="game-screen">
    <Title text={question} classText="title--question" />
    <div className="game-screen__buttons-answer">
      {buttons}
    </div>
  </div>
);

GameScreen.propTypes = {
  question: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GameScreen;
