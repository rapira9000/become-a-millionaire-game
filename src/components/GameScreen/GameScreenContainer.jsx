import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import nextId from 'react-id-generator';
import { gameQuestionSelector } from '../../selectors/appSelectors';
import './GameScreen.css';
import AnswerButton from '../AnswerButton/AnswerButton';
import { indexToLetterPosition } from '../../helpers/appHelpers';

import SvgImage from '../SvgImage/SvgImage';
import GameScreen from './GameScreen';

const GameScreenContainer = ({ gameQuestion }) => {
  const answerButtons = gameQuestion.answers.map((item, index) => {
    const position = indexToLetterPosition(index);
    const content = (
      <>
        <div className="answer-button__image">
          <SvgImage classText="svg-image" id={isMobile ? 'questionBtn' : 'questionBtnDesktop'} />
        </div>
        <span className="answer-button__position">{position}</span>
        <span className="answer-button__text">{item.answer}</span>
      </>
    );
    return <AnswerButton index={index} key={nextId()} classText="answer-button--hover" content={content} isTrue={item.isTrue} />;
  });

  return (
    <GameScreen question={gameQuestion.question} buttons={answerButtons} />
  );
};

GameScreenContainer.propTypes = {
  gameQuestion: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  gameQuestion: gameQuestionSelector(state),
});

export default connect(mapStateToProps, {})(GameScreenContainer);
