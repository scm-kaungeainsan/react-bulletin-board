import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';

import { useParams, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText, Link, Avatar } from '@mui/material';
// MUI Core
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { useStyles } from './components/customUserUpdateCss/customUserUpdateCss';


import Loading from "../../components/showInfoTemp/loading";
import { SnackBox } from "../../components/showInfoTemp/alertMessage";


import styles from './UserUpdate.module.css';
import { infoMessages, errMessages } from '../../constants/Messages';

import UserService from "../../services/user.service";


const UserUpdate = () => {
  const { setValue, register, handleSubmit, reset, watch,
    formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const history = useHistory();
  const [snackMsg, setSnackMsg] = useState('');
  const [callLod, setCallLod] = React.useState(false);
  const [user, setUser] = useState({});
  const [mode, setMode] = useState('confirm');
  const { userId } = useParams();

  useEffect(() => {
    const onLoad = async () => {
      await getUser(userId);
    }
    onLoad();
  }, [userId]);


  const getUser = React.useCallback(async (id) => {
    setCallLod(true);
    await UserService.get(id)
      .then(response => {
        console.log(response.data)
        setCallLod(false);
        // setUser(response.data);
        const fields = [
          'name',
          'email',
      
          'phone',
          'address',
          'date_of_birth'];
        fields.forEach(field => setValue(field, response.data[field]));
      })
      .catch(error => {
        setCallLod(false);
      });
  }, [setValue]);

  const update = (data) => {
    data.date_of_birth = data.date_of_birth ? data.date_of_birth.toISOString() : data.date_of_birth;
    data.profile_photo = data.profile_photo[0];
    console.log('update', data);
    if (mode === 'confirm') {
      setMode('update');
      return;
    }
    setCallLod(true);

    let formData = new FormData();
    for (const key in data) {
      console.log(key);
      formData.append(key, data[key]);
    }

    UserService.update(userId, formData)
      .then(response => {
        setCallLod(false);
        setSnackMsg(infoMessages.updateData);
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
    setValue('date_of_birth', value);
    setUser({ ...user, date_of_birth: value });
  };

  const handleSelectChange = (event) => {
    console.log('handleSelectChange', event.target.value);
    setUser({ ...user, type: event.target.value });
    setValue('type', event.target.value);
  };

  const resetData = () => {
    reset(userData)
    setUser({ ...user, type: null, date_of_birth: null });
  };


  const userData = {
    name: '',
    email: '',
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
          Update User
        </Typography>
        <br />
        //D:\bulletinboard-php-api\storage\app\profile\3
        
        <form onSubmit={handleSubmit(update)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                <img alt={user.name} src="http://localhost:8000/profile/3/image_2021_07_05T01_48_53_827Z.png" />
                  <Avatar sx={{ bgcolor: 'purple', width: 70, height: 70 }} alt={user.name} src="http://localhost:8000/profile/3/image_2021_07_05T01_48_53_827Z.png" />
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('name', { required: true })}
                    label="Name"
                    size="small"
                    variant="standard"
                    disabled={mode === 'update'}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    label="Email"
                    size="small"
                    variant="standard"
                    disabled={mode === 'update'}
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,4}$/i })}
                    error={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
                    helperText={(errors.email?.type === 'required' && errMessages.requiredError)
                      || (errors.email?.type === 'pattern' && errMessages.emailError)}
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
                      disabled={mode === 'update'}
                      value={user.type}
                      onChange={handleSelectChange}
                      className={classes.MuiFormHelperText}
                      FormHelperTextProps={{
                        classes: {
                          root: classes.error
                        }
                      }}
                    >
                      <MenuItem value='0'>Admin</MenuItem>
                      <MenuItem value='1'>User</MenuItem>
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    {...register('phone', { required: true, minLength: 12 })}
                    label="Phone"
                    size="small"
                    type='number'
                    variant="standard"
                    disabled={mode === 'update'}
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
                      value={user.date}
                      dateFormat="mm/dd/yyyy"
                      onChange={(value) => handleDateChange(value)}
                      maxDate={new Date()}
                      renderInput={(params) =>
                        <TextField {...params}
                          label="Date of Birth"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          fullWidth size="small" variant="standard"
                          {...register('date_of_birth', {
                            required: true,
                          })}
                          disabled={mode === 'update'}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    {...register('address', { required: true })}
                    label="Address"
                    size="small"
                    variant="standard"
                    multiline
                    rows={4}
                    disabled={mode === 'update'}
                    error={errors.address?.type}
                    helperText={errors.address?.type && errMessages.requiredError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel >Profile</InputLabel>
                  <br />
                  <input disabled={mode === 'update'} {...register('profile_photo', { required: true })}
                    type="file" accept=".png,.jpeg" />
                  <Typography className={styles.errText} color='error'>
                    {errors.profile_photo ? errMessages.requiredError : ''}
                  </Typography>
                </Grid>
                <br />
                <Grid item xs={12}>
                  <br />
                  <Link component="button"
                    variant="body2"
                    onClick={() => {
                      history.push(`/change-password/${userId}`)
                    }}>
                    Change Password
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <br />
              <br />
              {console.log('errors',errors)}
              <Button disabled={!isEmpty(errors)} color="primary" type="submit" variant="contained" className={styles.createBtn}>
                {mode === 'confirm' ? 'confirm' : 'update'}
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

export default UserUpdate;