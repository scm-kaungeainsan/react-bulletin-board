import React from 'react';

// Modules
import { useHistory } from 'react-router-dom';

// MUI Core
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from '@mui/material';

import { useStyles } from './components/customUserProfileCss/customUserProfileCss';
import styles from './UserProfile.module.css';



const UserProfile = () => {
  
  const classes = useStyles();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //   reset(userData);
  // }, [reset]);

  return (
    <Container className={classes.root} maxWidth="sm">
      <div className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          User Profile
          <Link component="button"
            variant="body2"
            style={{ float: "right" }}
            onClick={() => {
              history.push(`/user-update/${user.id}`);
            }}>
            Edit
          </Link>
        </Typography>
        <br />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Name:</strong>
                </label>

                <label className={styles.value}>{' '}{user.name}</label>
                <br />
              </Grid>
              <br />
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Email Address:</strong>
                </label>
                <label className={styles.value}>{' '}{user.email}</label>
                <br />
              </Grid>
              <br />
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Password:</strong>
                </label>
                <label className={styles.value}>{' '}************</label>
                <br />
              </Grid>
              <br />
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Type:</strong>
                </label>

                <label className={styles.value}>{' '}{user.type === '0'? 'Admin':'User'}</label>
                <br />
              </Grid>
              <br />
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Phone:</strong>
                </label>

                <label className={styles.value}>{' '}{user.phone}</label>
                <br />
              </Grid>
              <br />

              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Date Of Birth:</strong>
                </label>

                <label className={styles.value}>{' '}{user.date_of_birth}</label>
                <br />
              </Grid>
              <br />
              <Grid item xs={12}>
                <label className={styles.label}>
                  <strong>Address:</strong>
                </label>
                <label className={styles.value}>{' '}{user.address}</label>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UserProfile;