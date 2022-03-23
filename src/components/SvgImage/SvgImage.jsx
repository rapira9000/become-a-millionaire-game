import React from 'react';
import PropTypes from 'prop-types';
import svgSprite from '../../images/svgSprite.svg';
import './SvgImage.css';

const SvgImage = ({
  classText, id,
}) => {
  const svgLink = `${svgSprite}#${id}`;
  const savImageClass = 'svg-image';
  const className = classText ? `${savImageClass} ${classText}` : savImageClass;
  return (
    <svg className={className}>
      <use xlinkHref={svgLink} />
    </svg>
  );
};

SvgImage.defaultProps = {
  classText: '',
};

SvgImage.propTypes = {
  classText: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default SvgImage;
