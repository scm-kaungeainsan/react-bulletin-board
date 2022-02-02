import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch} from "react-redux";


// MUI Core
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { useStyles } from './components/customLoginCss/customLoginCss';


import Loading from "../../components/showInfoTemp/loading";
import { AlertBox } from "../../components/showInfoTemp/alertMessage";


import styles from './Login.module.css';
import { errMessages } from '../../constants/Messages';

import UserService from "../../services/user.service";




const Login = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const history = useHistory();
  const [failLogin, setFailLogin] = useState(false);
  const [callLod, setCallLod] = React.useState(false);

  const dispatch = useDispatch();

  const login = (data) => {
    setCallLod(true);
    console.log('inputData', data);
    // history.push("/post-list");
    UserService.login(data)
      .then(response => {
        console.log('api', response.data);
        getUser(response.data.userId);
      })
      .catch(e => {
        console.log('error', e);
        setFailLogin(true);
        setCallLod(false);
      });


      const getUser = async (id) => {
        setCallLod(true);
        await UserService.get(id)
          .then(response => {
            setFailLogin(false);
            setCallLod(false);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'LOGIN' });
            history.push("/post-list");
          })
          .catch(error => {
          });
      };
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Login Form
        </Typography>
        <AlertBox data={{ open: failLogin, type: "error", msg: errMessages.loginError, color: "error" }} />

        <form onSubmit={handleSubmit(login)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.MuiFormHelperText}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.error
                      }
                    }}
                    fullWidth
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,4}$/i })}
                    label="Email"
                    size="small"
                    variant="outlined"
                    error={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
                    helperText={(errors.email?.type === 'required' && errMessages.requiredError)
                      || (errors.email?.type === 'pattern' && errMessages.emailError)}
                  />
                  <br></br>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className={classes.MuiFormHelperText}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.error
                      }
                    }}
                    fullWidth
                    {...register('password', { required: true })}
                    label="Password"
                    size="small"
                    type="password"
                    variant="outlined"
                    error={errors.password?.type === 'required'}
                    helperText={errors.password?.type === 'required' && errMessages.requiredError}
                  />
                </Grid>
                <div className={styles.checkBlock}>
                  <FormControlLabel
                    control={<Checkbox {...register('remember')} size="small" color="primary" />}
                    label="Remember Me"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button disabled={!isDirty || !isValid} color="primary" type="submit" variant="contained" className={styles.logInBtn}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Loading open={callLod} />
    </Container>
  );
};

export default Login;