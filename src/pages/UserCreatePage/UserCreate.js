import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';
import { toLower, remove } from 'lodash';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
// MUI Core
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { useStyles } from './components/customUserCreateCss/customUserCreateCss';


import Loading from "../../components/showInfoTemp/loading";
import { SnackBox } from "../../components/showInfoTemp/alertMessage";


import styles from './UserCreate.module.css';
import { infoMessages, errMessages } from '../../constants/Messages';

import UserService from "../../services/user.service";




const pwdRegex = /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const UserCreate = () => {
  const { setValue, register, handleSubmit, reset, watch,
    formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const history = useHistory();
  const [snackMsg, setSnackMsg] = useState('');
  const [callLod, setCallLod] = React.useState(false);
  const [post, setPost] = useState({ title: '', comment: '' });
  const [mode, setMode] = useState('confirm');
  const [type, setType] = React.useState('');
  const [date, setDate] = useState(null);

  // useEffect(() => {
  //   reset(userData);
  // }, [reset]);

  const create = (data) => {
    data.date_of_birth = data.date_of_birth ? data.date_of_birth.toISOString() : data.date_of_birth;
    data.profile_photo = data.profile_photo[0];
    console.log('create', data);
    if (mode === 'confirm') {
      setMode('create');
      return;
    }
    setCallLod(true);

    let formData = new FormData();
    for (const key in data) {
      console.log(key);
      formData.append(key, data[key]);
    }

    UserService.create(formData)
      .then(response => {
        setCallLod(false);
        setSnackMsg(infoMessages.createData);
        setTimeout(() => { history.push("/user-list"); }, 3000);
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          for (const key in data) {
            if (error.response.data.errors[key]) {
              setSnackMsg(error.response.data.errors[key][0])
            }
          }
          console.log(error.response.data);

          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

        setCallLod(false);
      });
  };

  const closeSnack = () => setSnackMsg('');

  const handleDateChange = (value) => {
    console.log('value', value);
    setDate(value);
    setValue('date_of_birth', value);
  };

  const handleSelectChange = (event) => {
    console.log('handleSelectChange', event.target.value);
    setType(event.target.value);
    setValue('type', event.target.value);
  };

  const resetData = () => {
    reset(userData)
    setType(null);
    setDate(null);
  };


  const userData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_photo: null,
    type: '',
    phone: '',
    address: '',
    date_of_birth: null
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <div className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Create User
        </Typography>
        <br />
        <form onSubmit={handleSubmit(create)}>
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
                    {...register('name', { required: true })}
                    label="Name"
                    size="small"
                    variant="standard"
                    disabled={mode === 'create'}
                    error={errors.name?.type === 'required'}
                    helperText={errors.name?.type === 'required' && errMessages.requiredError}
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
                    label="Email"
                    size="small"
                    variant="standard"
                    disabled={mode === 'create'}
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,4}$/i })}
                    error={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
                    helperText={(errors.email?.type === 'required' && errMessages.requiredError)
                      || (errors.email?.type === 'pattern' && errMessages.emailError)}
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
                    {...register('password', {
                      required: true, minLength: 8,
                      pattern: pwdRegex
                    })}
                    label="Password"
                    type='password'
                    size="small"
                    variant="standard"
                    disabled={mode === 'create'}
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
                    {...register('password_confirmation', { validate: (value) => value === watch('password') || errMessages.passwordNotMatchError, required: true, minLength: 8, pattern: pwdRegex })}
                    label="Confirm password"
                    size="small"
                    variant="standard"
                    disabled={mode === 'create'}
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
                <Grid item xs={12}>
                  {console.log(errors)}
                  <FormControl variant="standard" fullWidth
                  >
                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      {...register('type', { required: true })}
                      label="Type"
                      disabled={mode === 'create'}
                      value={type || ""}
                      onChange={handleSelectChange}
                      className={classes.MuiFormHelperText}
                      FormHelperTextProps={{
                        classes: {
                          root: classes.error
                        }
                      }}
                    >
                      <MenuItem value={'0'}>Admin</MenuItem>
                      <MenuItem value={'1'}>User</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.type ? errMessages.requiredError : ''}
                    </FormHelperText>
                  </FormControl>
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
                    {...register('phone', { required: true, minLength: 12 })}
                    label="Phone"
                    size="small"
                    type='number'
                    variant="standard"
                    disabled={mode === 'create'}
                    error={errors.phone?.type === 'required' || errors.phone?.type === 'minLength'}
                    helperText={(errors.phone?.type === 'required' && errMessages.requiredError) ||
                      (errors.phone && errMessages.phNoError)}
                  />
                  <br />
                </Grid>
                <br />
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth size="small" variant="outlined">
                    <DatePicker
                      type="date"
                      value={date}
                      dateFormat="mm/dd/yyyy"
                      onChange={(value) => handleDateChange(value)}
                      maxDate={new Date()}
                      renderInput={(params) =>
                        <TextField {...params}
                          label="Date of Birth"
                          fullWidth size="small" variant="standard"
                          {...register('date_of_birth', {
                            required: true,
                          })}
                          disabled={mode === 'create'}
                          error={errors.date_of_birth?.type === 'required'}
                          helperText={errors.date_of_birth?.type === 'required' && errMessages.requiredError}
                        />}
                    />
                  </LocalizationProvider>
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
                    {...register('address', { required: true })}
                    label="Address"
                    size="small"
                    variant="standard"
                    multiline
                    rows={4}
                    disabled={mode === 'create'}
                    error={errors.address?.type}
                    helperText={errors.address?.type && errMessages.requiredError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel >Profile</InputLabel>
                  <br />
                  <input disabled={mode === 'create'} {...register('profile_photo', { required: true })}
                    type="file" accept=".png,.jpeg" />
                  <Typography className={styles.errText} color='error'>
                    {errors.profile_photo ? errMessages.requiredError : ''}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <br />
              <Button disabled={!isDirty || !isValid} color="primary" type="submit" variant="contained" className={styles.createBtn}>
                {mode === 'confirm' ? 'confirm' : 'create'}
              </Button>
              <Button onClick={() => {
                mode === 'confirm' ? resetData() : setMode('confirm')
              }}
                color="primary" variant="outlined">
                {mode === 'confirm' ? 'Clear' : 'cancel'}
              </Button>
            </Grid>
          </Grid>
        </form>
        <br />
        <br />
      </div>
      {callLod && <Loading open={callLod} />}
      {snackMsg && <SnackBox
        msg={snackMsg}
        close={closeSnack}
      />}


    </Container>
  );
};

export default UserCreate;