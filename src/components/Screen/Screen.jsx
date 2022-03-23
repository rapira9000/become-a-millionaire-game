import React from 'react';
import './Screen.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import handImage from '../../images/hand.svg';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { appScreenTextsSelector, AppStatusSelector } from '../../selectors/appSelectors';
import {
  restartApp, setAppStatus, setGameLevel,
} from '../../redux/appReducer';
import Header from '../Header/Header';
import GameLevels from '../GameLevels/GameLevels';
import DeviceOrientationPopup from '../DeviceOrientationPopup/DeviceOrientationPopup';
import GameScreenContainer from '../GameScreen/GameScreenContainer';

const Screen = ({
  appStatus,
  setAppStatusConnect,
  appScreenTexts,
  restartAppConnect,
  setGameLevelConnect,
}) => {
  if (appStatus !== 'onPlaying') {
    return (
      <>
        <div className="screen screen--start">
          <div className="screen__content">
            <div className="screen__content-block screen-image__wrapper">
              <img className="screen-image" alt="hand" src={handImage} />
            </div>
            <div className="screen__content-block screen-text">
              <Title text={appScreenTexts.subTitleText} classText="title--sub" />
              <Title text={appScreenTexts.titleText} />
              <Button
                onClick={() => {
                  setAppStatusConnect(appScreenTexts.buttonValue);
                  setGameLevelConnect();
                  if (appStatus === 'end') {
                    restartAppConnect();
                  }
                }}
                text={appScreenTexts.buttonText}
              />
            </div>
          </div>
        </div>
        <DeviceOrientationPopup />
      </>
    );
  }

  return (
    <div className="screen screen--onPlaying">
      <Header />
      <div className="screen__content">
        <GameScreenContainer />
        <GameLevels />
        <DeviceOrientationPopup />
      </div>
    </div>
  );
};

Screen.defaultProps = {
  appScreenTexts: {
    buttonText: '',
    buttonValue: '',
    titleText: '',
    subTitleText: '',
  },
};

Screen.propTypes = {
  appStatus: PropTypes.string.isRequired,
  setAppStatusConnect: PropTypes.func.isRequired,
  appScreenTexts: PropTypes.shape({
    buttonText: PropTypes.string,
    buttonValue: PropTypes.string,
    titleText: PropTypes.string,
    subTitleText: PropTypes.string,
  }),
  restartAppConnect: PropTypes.func.isRequired,
  setGameLevelConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appStatus: AppStatusSelector(state),
  appScreenTexts: appScreenTextsSelector(state),
});

export default connect(mapStateToProps, {
  setAppStatusConnect: setAppStatus,
  setGameLevelConnect: setGameLevel,
  restartAppConnect: restartApp,
})(Screen);
