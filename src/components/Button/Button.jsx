import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, classText, onClick }) => {
  const className = classText ? `button ${classText}` : 'button';

  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  classText: '',
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
