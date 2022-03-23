import appData from './data.json';
import { getGameLevel, getMaxLevel } from '../helpers/appHelpers';

const APP__SET_MENU_STATUS = 'APP__SET_MENU_STATUS';
const APP__SET_APP_STATUS = 'APP__SET_APP_STATUS';
const APP__SET_GAME_LEVEL = 'APP__SET_GAME_LEVEL';
const APP__SET_BTN_SELECTED = 'APP__SET_BTN_SELECTED';
const APP__SET_ANSWER = 'APP__SET_ANSWER';
const APP__RESTART = 'APP__RESTART';
const APP__SET_STATUS_END_GAME = 'APP__SET_STATUS_END_GAME';

const initialState = {
  currency: '$',
  appStatus: 'start',
  appStatuses: {
    start: {
      buttonText: 'Start',
      buttonValue: 'onPlaying',
      titleText: 'Who wants to be a millionaire?',
      subTitleText: '',
    },
    end: {
      buttonText: 'Try again',
      buttonValue: 'onPlaying',
      titleText: '',
      subTitleText: 'Total score:',
    },
    onPlaying: {},
  },
  menuIsOpen: false,
  appData,
  maxLevel: getMaxLevel(appData.levels),
  gameLevel: null,
  selectedBtn: null,
};

// eslint-disable-next-line default-param-last
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP__SET_MENU_STATUS:
      return {
        ...state,
        menuIsOpen: action.menuIsOpen,
      };
    case APP__SET_APP_STATUS:
      return {
        ...state,
        appStatus: action.appStatus,
      };
    case APP__SET_GAME_LEVEL:
      return {
        ...state,
        gameLevel: getGameLevel(state.gameLevel, state.appData.levels),
      };
    case APP__SET_BTN_SELECTED:
      return {
        ...state,
        selectedBtn: action.selectedBtn,
      };
    case APP__SET_ANSWER:
      return {
        ...state,
        appStatus: action.isTrue && state.gameLevel < state.maxLevel ? 'onPlaying' : 'end',
        gameLevel: getGameLevel(state.gameLevel, state.appData.levels, action.isTrue),
      };
    case APP__SET_STATUS_END_GAME:
      return {
        ...state,
        appStatuses: {
          ...state.appStatuses,
          [state.appStatus]: {
            ...state.appStatuses[state.appStatus],
            titleText: state.appStatus === 'end'
              ? `${state.currency}${state.gameLevel} earned`
              : [state.appStatus].titleText,
          },
        },
      };
    case APP__RESTART:
      return {
        ...state,
        appStatus: 'onPlaying',
        gameLevel: getGameLevel(null, state.appData.levels),
        menuIsOpen: false,
        selectedBtn: null,
      };
    default:
      return state;
  }
};

export const setMenuStatus = (menuIsOpen) => ({ type: APP__SET_MENU_STATUS, menuIsOpen });
export const setAppStatus = (appStatus) => ({ type: APP__SET_APP_STATUS, appStatus });
export const setGameLevel = () => ({ type: APP__SET_GAME_LEVEL });
export const setBtnSelected = (selectedBtn) => ({ type: APP__SET_BTN_SELECTED, selectedBtn });
export const setAnswer = (isTrue) => ({ type: APP__SET_ANSWER, isTrue });
export const restartApp = () => ({ type: APP__RESTART });
export const setAppStatusEndGame = () => ({ type: APP__SET_STATUS_END_GAME });

export default appReducer;
