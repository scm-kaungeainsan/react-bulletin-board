import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
// MUI Core
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { useStyles, IOSSwitch } from './components/customPostEditCss/customPostEditCss';


import Loading from "../../components/showInfoTemp/loading";
import { SnackBox } from "../../components/showInfoTemp/alertMessage";


import styles from './PostEdit.module.css';
import { infoMessages, errMessages } from '../../constants/Messages';

import PostService from "../../services/post.service";




const PostUpdate = () => {

  const classes = useStyles();
  const history = useHistory();
  const [snackMsg, setSnackMsg] = useState('');
  const [callLod, setCallLod] = React.useState(false);
  const [post, setPost] = useState({ title: '', comment: '', status: false });
  const [mode, setMode] = useState('confirm');
  const { postId } = useParams();

  const { register, handleSubmit, reset, setValue,
    formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });


  useEffect(() => {
    const onLoad = async () => {
      await getPost(postId);
    }
    onLoad();
  }, [postId]);


  const getPost = React.useCallback(async (id) => {
    setCallLod(true);
    await PostService.get(id)
      .then(response => {
        console.log(response.data)
        setCallLod(false);
        const fields = ['title', 'comment', 'status'];
        fields.forEach(field => setValue(field, response.data[field]));
        setPost(response.data);
      })
      .catch(error => {
        setCallLod(false);
      });
  }, [setValue]);

  const update = (data) => {
    console.log('form', data)
    console.log(post)
    if (mode === 'confirm') {
      setMode('update');
      return;
    }
    setCallLod(true);
    data.status = post.status;
    PostService.update(postId, data)
      .then(response => {
        setCallLod(false);
        setSnackMsg(infoMessages.updateData);
        setTimeout(() => { history.push("/post-list"); }, 3000);
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

  const handleSwitch = (event, checked) => {
    console.log('handleSwitch', event, checked);
    setPost({ ...post, status: checked ? 1 : 0 });
  };



  return (
    <Container className={classes.root} maxWidth="sm">
      <div className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Update Post{console.log(errors)}
        </Typography>
        <br></br>
        <form onSubmit={handleSubmit(update)}>
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    {...register('title', { required: true, maxLength: 255 })}
                    label="Title"
                    size="small"
                    variant="standard"
                    disabled={mode === 'update'}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    {...register('comment', { required: true })}
                    label="Description"
                    size="small"

                    variant="standard"
                    multiline
                    rows={4}
                    disabled={mode === 'update'}
                    error={errors.comment?.type === 'required'}
                    helperText={errors.comment?.type === 'required' && errMessages.requiredError}
                  />
                </Grid>
                <br></br>
                <Grid item xs={12}>
                  <FormControlLabel
                    disabled={mode === 'update'}
                    control={<IOSSwitch sx={{ m: 1 }} />}
                    {...register('status')}
                    onChange={handleSwitch}
                    label="Status"
                    labelPlacement="start"
                    checked={Boolean(post.status)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <br></br>
              <br></br>
              <Button disabled={!isEmpty(errors)} color="primary" type="submit" variant="contained" className={styles.updateBtn}>
                {mode === 'confirm' ? 'confirm' : 'update'}
              </Button>

              <Button onClick={() => {
                mode === 'confirm' ? reset({ title: '', comment: '', status: post.status }) : setMode('confirm')
              }}
                color="primary" variant="outlined">
                {mode === 'confirm' ? 'Clear' : 'cancel'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Loading open={callLod} />
      <SnackBox
        msg={snackMsg}
        close={closeSnack}
      />
    </Container>
  );
};

export default PostUpdate;