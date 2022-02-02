import React, { useEffect, useState } from 'react';
// Modules
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
// MUI Core
import { Button, Container, Grid, TextField, Paper, Typography} from '@material-ui/core';
import { useStyles, UploadField } from './components/CustomCsvUploadPageCss/CustomCsvUploadPageCss';


import Loading from "../../components/showInfoTemp/loading";
import { AlertBox, DetailBox, SnackBox } from "../../components/showInfoTemp/alertMessage";


import styles from './CsvUploadPage.module.css';
import { errMessages } from '../../constants/Messages';

import PostService from "../../services/post.service";




const UploadCsv = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const history = useHistory();
  const [fileSize, setFileSize] = useState(false);
  const [csvInfo, setCsvInfo] = useState('');
  const [callLod, setCallLod] = React.useState(false);

  const UploadCsvFile = (data) => {
    const file = data.file[0];
    setFileSize(file.size > 2097152)
    if (fileSize) {
      return;
    }
    let formData = new FormData();
    formData.append('csv_file', file,file.name);
    PostService.uploadCsv(formData)
      .then(response => {
        console.log('api', response.data);
        setCsvInfo(response.data.message);
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  const closeSnack = () => setCsvInfo('');

  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.card} elevation={3}>
        <Typography variant="h5" className={styles.title}>
          Upload Csv File
        </Typography>
        {console.log('errors',errors)}
        <AlertBox data={{ open: fileSize, type: "error", msg: errMessages.file2MBError, color: "error" }} />
        <form onSubmit={handleSubmit(UploadCsvFile)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <input {...register('file', { required: true })} type="file" accept=".csv" />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button disabled={!isValid} color="primary" type="submit" variant="contained" className={styles.logInBtn}>
                Import File
              </Button>
            </Grid>
            <SnackBox
              msg={csvInfo}
              close={closeSnack}
            />
          </Grid>
        </form>

      </Paper>
      <Loading open={callLod} />
    </Container>
  );
};

export default UploadCsv;