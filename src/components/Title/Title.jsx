import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ text, classText }) => {
  const classesText = classText ? `title ${classText}` : 'title';

  return text ? <h4 className={classesText}>{text}</h4> : '';
};

Title.defaultProps = {
  classText: '',
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
  classText: PropTypes.string,
};

export default Title;
