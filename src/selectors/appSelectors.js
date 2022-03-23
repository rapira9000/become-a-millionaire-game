import { getRandQuestion } from '../helpers/appHelpers';

export const menuStatusSelector = (state) => (state.appReducer.menuIsOpen);
export const AppStatusSelector = (state) => (state.appReducer.appStatus);
export const appScreenTextsSelector = (state) => {
  const { appStatus } = state.appReducer;
  return state.appReducer.appStatuses[appStatus];
};
export const gameQuestionSelector = (state) => {
  const { gameLevel } = state.appReducer;
  const { levels } = state.appReducer.appData;
  return getRandQuestion(levels[gameLevel]);
};
export const levelsSelector = (state) => state.appReducer.appData.levels;
export const gameLevelSelector = (state) => state.appReducer.gameLevel;
export const currencySelector = (state) => state.appReducer.appData.currency;
export const selectedBtnSelector = (state) => state.appReducer.selectedBtn;
