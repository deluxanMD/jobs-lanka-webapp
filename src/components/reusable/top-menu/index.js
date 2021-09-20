import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Typography, Box, AppBar, Toolbar, IconButton, Badge, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Work, Menu, Notifications, AccountCircle } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    marginRight: 20
  }
});

const TopMenu = (props) => {
  const classes = useStyles();

  return (
    <Box sx={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Work className={classes.logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lanka Jobs
          </Typography>
          <Button color={props.activeMenu === 0 ? 'primary' : 'inherit'} onClick={() => props.handleActiveMenu(0)}>
            Find Job
          </Button>
          <Button color={props.activeMenu === 1 ? 'primary' : 'inherit'} onClick={() => props.handleActiveMenu(1)}>
            Companies
          </Button>
          <Button color={props.activeMenu === 2 ? 'primary' : 'inherit'} onClick={() => props.handleActiveMenu(2)}>
            Resources
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={2} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

TopMenu.propTypes = {
  activeMenu: PropTypes.number.isRequired,
  handleActiveMenu: PropTypes.func.isRequired
};

export default TopMenu;
