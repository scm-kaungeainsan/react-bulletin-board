import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';

import { CustomAppBar, useStyles } from './components/customappbar/CustomAppBar';
import styles from './Header.module.css';

import UserService from "../../services/user.service";
import { upperCase } from 'lodash';

import { useDispatch, connect } from "react-redux";


const Header = ({ isAuthenticated }) => {
  console.log(isAuthenticated, 'jijojopopop')
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const dispatch = useDispatch();
  // setUser();
  // console.log('JSON',user);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
  }, []);


  /**
 * Logout Event
 */
  const handleLogout = () => {
    UserService.logout()
      .then(response => {
        console.log(response)
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        history.push("/login");
      })
      .catch(e => {
        console.log('error', e);
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        history.push("/login");
      });
  };

  return (
    <div className={classes.root}>
      <CustomAppBar position="static">
        <Toolbar className={styles.toolBar}>
          <Typography variant="h5">
            SCM Bulletin Board
          </Typography>
          <div className={styles.appBarTitle}>
            {(isAuthenticated && user.type === '0') && <Button color="inherit" className={styles.customBtn}>Users</Button>}
            {(isAuthenticated && user.type === '1') && <Button color="inherit" className={styles.customBtn}>User</Button>}
            {isAuthenticated && <Button color="inherit" className={styles.customBtn}>Posts</Button>}
          </div>
          <Typography style={{ paddingRight: '15px' }} className={styles.customBtn}>
            {isAuthenticated && upperCase(user?.name)}
          </Typography>
          {isAuthenticated && <Button color="inherit" onClick={handleLogout} className={styles.customBtn}>Log Out</Button>}

        </Toolbar>
      </CustomAppBar>

    </div>)
}

// export default Header;

export default connect(
  state => ({ isAuthenticated: state.auth.isAuthenticated }),
)(Header);