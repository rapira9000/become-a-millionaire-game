export const getRandQuestion = (items) => items[Math.floor(Math.random() * items.length)];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
export const indexToLetterPosition = (index) => alphabet[index].toUpperCase();
export const getStatusLevelItem = (gameLevel, currentLevel) => {
  if (gameLevel === +currentLevel) return 'current';
  if (gameLevel > +currentLevel) return 'disallow';
  return 'active';
};
export const getTitleQuestionBtn = (isTrue) => {
  if (isTrue === null) return '';
  if (!isTrue) return 'wrong answer';
  return 'correct answer';
};
export const sortArray = (array) => {
  const locArray = [...array];
  let temp = 0;
  for (let i = 0; i < locArray.length; i += 1) {
    for (let j = i; j < locArray.length; j += 1) {
      if (locArray[j] < locArray[i]) {
        temp = array[j];
        locArray[j] = locArray[i];
        locArray[i] = temp;
      }
    }
  }
  return locArray;
};

const getLevels = (levelsObj) => {
  const levels = Object.entries(levelsObj).map(([key]) => +key);
  return sortArray(levels);
};

export const getGameLevel = (currentLevel, levelsObj, isTrue) => {
  const levels = getLevels(levelsObj);
  if (currentLevel === null) {
    return Math.min(...levels);
  }
  const indexCurrentLevel = levels.indexOf(currentLevel);
  const lastIndexLevel = levels.length - 1;

  if (!isTrue) {
    return levels[indexCurrentLevel];
  }

  return lastIndexLevel > indexCurrentLevel
    ? levels[indexCurrentLevel + 1]
    : levels[lastIndexLevel];
};

export const getMaxLevel = (levelsObj) => {
  const levels = getLevels(levelsObj);
  return Math.max(...levels);
};
