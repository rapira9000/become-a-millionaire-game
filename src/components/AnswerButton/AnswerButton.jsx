import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnswerButton.css';
import { connect } from 'react-redux';
import { getTitleQuestionBtn } from '../../helpers/appHelpers';
import { setAnswer, setAppStatusEndGame, setBtnSelected } from '../../redux/appReducer';
import { selectedBtnSelector } from '../../selectors/appSelectors';

const eventCLassesBtn = {
  selected: 'answer-button--selected',
  wrong: 'answer-button--wrong',
  correct: 'answer-button--correct',
};

const AnswerButton = ({
  isTrue,
  classText,
  content,
  index, selectedBtn, setBtnSelectedConnect, setAnswerConnect, setAppStatusEndGameConnect,
}) => {
  const [animation, setAnimation] = useState(false);

  const setResultsAfterChoose = () => {
    setTimeout(() => {
      setBtnSelectedConnect(null);
      setAnswerConnect(isTrue);
      setAppStatusEndGameConnect();
    }, 1000);
  };

  const animationStart = () => {
    setTimeout(() => {
      setAnimation(true);
      setResultsAfterChoose();
    }, 800);
  };

  const classNameText = 'answer-button';

  let className = classText ? `${classNameText} ${classText}` : classNameText;

  if (index === selectedBtn && !animation) {
    className = `${className} ${eventCLassesBtn.selected}`;
  }

  if (animation && isTrue) {
    className = `${className} ${eventCLassesBtn.correct}`;
  }

  if (animation && !isTrue) {
    className = `${className} ${eventCLassesBtn.wrong}`;
  }

  const title = getTitleQuestionBtn(isTrue);

  return (
    <button
      onClick={() => {
        if (selectedBtn === null) {
          setBtnSelectedConnect(index);
          animationStart();
        }
      }}
      type="button"
      title={title}
      className={className}
    >
      <div className="answer-button__content">
        {content}
      </div>
    </button>
  );
};

AnswerButton.defaultProps = {
  classText: '',
  isTrue: null,
  index: 0,
  selectedBtn: null,
};

AnswerButton.propTypes = {
  isTrue: PropTypes.bool,
  classText: PropTypes.string,
  content: PropTypes.element.isRequired,
  index: PropTypes.number,
  selectedBtn: PropTypes.number,
  setBtnSelectedConnect: PropTypes.func.isRequired,
  setAnswerConnect: PropTypes.func.isRequired,
  setAppStatusEndGameConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedBtn: selectedBtnSelector(state),
});

export default connect(mapStateToProps, {
  setBtnSelectedConnect: setBtnSelected,
  setAnswerConnect: setAnswer,
  setAppStatusEndGameConnect: setAppStatusEndGame,
})(AnswerButton);
