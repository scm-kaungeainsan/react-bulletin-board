import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
// MUI Core
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useStyles } from './components/customPostCreateCss/customPostCreateCss';


import Loading from "../../components/showInfoTemp/loading";
import { SnackBox } from "../../components/showInfoTemp/alertMessage";


import styles from './PostCreate.module.css';
import { infoMessages, errMessages } from '../../constants/Messages';

import PostService from "../../services/post.service";




const PostCreate = () => {
  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const history = useHistory();
  const [snackMsg, setSnackMsg] = useState('');
  const [callLod, setCallLod] = React.useState(false);
  const [mode, setMode] = useState('confirm');


  useEffect(() => {
    reset({ title: '', comment: '' });
  }, [reset]);

  const create = (data) => {
    if (mode === 'confirm') {
      setMode('create');
      return;
    }
    setCallLod(true);
    PostService.create(data)
      .then(response => {
        setCallLod(false);
        setSnackMsg(infoMessages.createData);
        setTimeout(()=>{ history.push("/post-list"); }, 3000);
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          for (const key in data) {
            if(error.response.data.errors[key]){
              setSnackMsg(error.response.data.errors[key][0])
            }
          }
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

  return (
    <Container className={classes.root} maxWidth="sm">
      <div className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Create Post
        </Typography>
        <br></br>
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
                    {...register('title', { required: true, maxLength: 255 })}
                    label="Title"
                    size="small"
                    variant="standard"
                    disabled={mode === 'create'}
                    error={errors.title?.type === 'required' || errors.title?.type === 'maxLength'}
                    helperText={(errors.title?.type === 'required' && errMessages.requiredError) ||
                      (errors.title?.type === 'maxLength' && errMessages.maxLengthError(255))}
                  />
                  <br></br>
                </Grid>
                <br></br>
                <Grid item xs={12}>
                  <TextField
                    className={classes.MuiFormHelperText}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.error
                      }
                    }}
                    fullWidth
                    {...register('comment', { required: true })}
                    label="Description"
                    size="small"
                    variant="standard"
                    multiline
                    rows={4}
                    disabled={mode === 'create'}
                    error={errors.comment?.type === 'required'}
                    helperText={errors.comment?.type === 'required' && errMessages.requiredError}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <br></br>
              <br></br>
              <Button disabled={!isDirty || !isValid} color="primary" type="submit" variant="contained" className={styles.createBtn}>
                {mode === 'confirm' ? 'confirm' : 'create'}
              </Button>
              <Button onClick={() => {
                mode === 'confirm' ? reset({ title: '', comment: '' }) : setMode('confirm')
              }}
                color="primary" variant="outlined">
                {mode === 'confirm' ? 'Clear' : 'cancel'}

              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {callLod && <Loading open={callLod} />}
      {snackMsg && <SnackBox
        msg={snackMsg}
        close={closeSnack}
      />}
    </Container>
  );
};

export default PostCreate;