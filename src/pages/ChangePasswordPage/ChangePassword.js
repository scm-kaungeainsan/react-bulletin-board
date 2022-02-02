import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
// MUI Core
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { useStyles } from './components/customChangePasswordCss/customChangePassword';


import Loading from "../../components/showInfoTemp/loading";
import { AlertBox } from "../../components/showInfoTemp/alertMessage";


import styles from './ChangePassword.module.css';
import { errMessages, infoMessages } from '../../constants/Messages';

import UserService from "../../services/user.service";




const ChangePassword = () => {
  const { reset, watch, register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
  const pwdRegex = /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const classes = useStyles();
  const history = useHistory();
  const [fail, setFail] = useState(null);
  const [passwrod, setPasswrod] = useState({ current_password: '', password: '', password_confirmation: '' });
  const [callLod, setCallLod] = React.useState(false);
  const [mode, setMode] = useState('confirm');
  const { userId } = useParams();

  const updatePassword = (data) => {
    if (mode === 'confirm') {
      setMode('change');
      return;
    }
    setCallLod(true);
    console.log('inputData', data);
    UserService.updatePassword(userId, data)
      .then(response => {
        console.log('api', response.data);
        setFail(infoMessages.pwdChanged);
        setCallLod(false);
        setTimeout(() => { history.push("/user-list"); }, 3000);
      })
      .catch(e => {
        console.log('error', e);
        setFail(infoMessages.pwdUnChanged);
        setCallLod(false);
      });
  };

  const resetData = () => {
    setFail(null);
    reset(passwrod)
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Change Password
        </Typography>
        {fail !== null && <AlertBox data={{
          open: fail !== null,
          type: fail === infoMessages.pwdUnChanged ? "error" : 'success', msg: fail, color: fail === infoMessages.pwdUnChanged ? "error" : 'green'
        }} />}

        <form onSubmit={handleSubmit(updatePassword)}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <br />
                  <TextField
                    className={classes.MuiFormHelperText}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.error
                      }
                    }}
                    fullWidth
                    {...register('current_password', {
                      required: true, minLength: 8,
                      pattern: pwdRegex
                    })}
                    label="Old Password"
                    type='password'
                    size="small"
                    variant="standard"
                    disabled={mode === 'change'}
                    error={errors.current_password?.type === 'required' || errors.current_password?.type === 'minLength' || errors.current_password?.type === 'pattern'}
                    helperText={
                      (errors.current_password?.type === 'required' && errMessages.requiredError) ||
                      (errors.current_password?.type === 'minLength' && errMessages.minLengthError(8)) ||
                      (errors.current_password?.type === 'pattern' && errMessages.patternError(1))
                    }
                  />
                  <br />
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
                    {...register('password', {
                      required: true, minLength: 8,
                      pattern: pwdRegex
                    })}
                    label="New Password"
                    type='password'
                    size="small"
                    variant="standard"
                    disabled={mode === 'change'}
                    error={errors.password?.type === 'required' || errors.password?.type === 'minLength' || errors.password?.type === 'pattern'}
                    helperText={
                      (errors.password?.type === 'required' && errMessages.requiredError) ||
                      (errors.password?.type === 'minLength' && errMessages.minLengthError(8)) ||
                      (errors.password?.type === 'pattern' && errMessages.patternError(1))
                    }
                  />
                  <br />
                </Grid>
                <br />
                <Grid item xs={12}>
                  <TextField
                    className={classes.MuiFormHelperText}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.error
                      }
                    }}
                    fullWidth
                    type='password'
                    {...register('password_confirmation',
                      { validate: (value) => value === watch('password') || errMessages.passwordNotMatchError, required: true, minLength: 8, pattern: pwdRegex })}
                    label="Confirm New Password"
                    size="small"
                    variant="standard"
                    disabled={mode === 'change'}
                    error={errors.password_confirmation?.type || errors.password_confirmation?.type === 'required' || errors.password_confirmation?.type === 'minLength' || errors.password_confirmation?.type === 'pattern'}
                    helperText={
                      (errors?.password_confirmation?.message) ||
                      (errors.password_confirmation?.type === 'required' && errMessages.requiredError) ||
                      (errors.password_confirmation?.type === 'minLength' && errMessages.minLengthError(8)) ||
                      (errors.password_confirmation?.type === 'pattern' && errMessages.patternError(1))}
                  />
                  <br />
                </Grid>
                <br />


              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <br />
                <Button disabled={!isDirty || !isValid} color="primary" type="submit" variant="contained" className={styles.createBtn}>
                  {mode === 'confirm' ? 'confirm' : 'change'}
                </Button>
                <Button onClick={() => {
                  mode === 'confirm' ? resetData() : setMode('confirm')
                }}
                  color="primary" variant="outlined">
                  {mode === 'confirm' ? 'Clear' : 'cancel'}
                </Button>
                <br />
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {console.log('error', errors, fail)}
      {callLod && <Loading open={callLod} />}
    </Container>
  );
};

export default ChangePassword;