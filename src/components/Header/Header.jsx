import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { menuStatusSelector } from '../../selectors/appSelectors';
import { setMenuStatus } from '../../redux/appReducer';

import menuIcon from '../../images/icon-menu.svg';
import menuIconClose from '../../images/icon-close.svg';

const Header = ({ menuIsOpen, setMenuStatusConnect }) => {
  const icon = menuIsOpen ? menuIconClose : menuIcon;
  return (
    <header className="header">
      <button
        onClick={() => {
          setMenuStatusConnect(!menuIsOpen);
        }}
        type="button"
        className="header-menu"
      >
        <img alt="header-menu" src={icon} />
      </button>
    </header>
  );
};

Header.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  setMenuStatusConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  menuIsOpen: menuStatusSelector(state),
});

export default connect(mapStateToProps, {
  setMenuStatusConnect: setMenuStatus,
})(Header);
