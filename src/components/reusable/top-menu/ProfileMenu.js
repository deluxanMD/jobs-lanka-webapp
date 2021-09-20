import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const ProfileMenu = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={props.menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
    >
      <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

ProfileMenu.propTypes = {
  anchorEl: PropTypes.any.isRequired,
  menuId: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired
};

export default ProfileMenu;
