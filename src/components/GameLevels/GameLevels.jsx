import React from 'react';
import './GameLevels.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import nextId from 'react-id-generator';
import {
  currencySelector,
  gameLevelSelector,
  levelsSelector, menuStatusSelector,
} from '../../selectors/appSelectors';
import AnswerButton from '../AnswerButton/AnswerButton';
import { getStatusLevelItem } from '../../helpers/appHelpers';
import SvgImage from '../SvgImage/SvgImage';

const GameLevels = ({
  levels, gameLevel, currency, menuIsOpen,
}) => {
  const levelsContent = Object.entries(levels).reverse().map(([currentLevel]) => {
    const partClassOfStatus = getStatusLevelItem(gameLevel, currentLevel);
    const classText = `answer-button__levels-item answer-button__levels-item--${partClassOfStatus}`;
    const content = (
      <>
        <div className="answer-button__image">
          <SvgImage classText="svg-image" id={isMobile ? 'levelBtn' : 'levelBtnDesktop'} />
        </div>
        <span className="answer-button__text-level">{`${currency} ${currentLevel}`}</span>
      </>
    );
    return <AnswerButton key={nextId()} content={content} classText={classText} />;
  });
  return <div className={`game-levels${menuIsOpen ? ' game-levels--open' : ''}`}>{levelsContent}</div>;
};

GameLevels.propTypes = {
  levels: PropTypes.objectOf(PropTypes.array).isRequired,
  gameLevel: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  levels: levelsSelector(state),
  gameLevel: gameLevelSelector(state),
  currency: currencySelector(state),
  menuIsOpen: menuStatusSelector(state),
});

export default connect(mapStateToProps, null)(GameLevels);
