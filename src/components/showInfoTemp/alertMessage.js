import React, { Fragment } from 'react';
import { Alert, Collapse, Box, Typography, Modal, Snackbar } from '@mui/material';


const AlertBox = (props) => {
  console.log('AlertBox', props);
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={props.data.open}>
        <Alert sx={{ mb: 2 }} severity={props.data.type}>
          <Typography variant="subtitle2" color={props.data.color}>
            {props.data.msg}
          </Typography>
        </Alert>
      </Collapse>
    </Box>)
};



const DetailBox = (props) => {
  console.log('DetailBox', props);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #303f9f',
    boxShadow: 24,
    padding: '10px 20px',
  };

  const handleClose = () => props.close();;

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" >
            <strong>{props.from} Detail</strong>
          </Typography>
          <br></br>
          <div>
            {props.from === 'Post' ? <Post data={props.data} />
              : <User data={props.data} />}
          </div>
          <br></br>
        </Box>
      </Modal>
    </div>
  );
};

const Post = (props) => {
  return (
    <Fragment>
      <div>
        <label>
          <strong>Post Title:</strong>
        </label>{" "}
        {props.data.title}
      </div>
      <br></br>
      <div>
        <label>
          <strong>Posted User:</strong>
        </label>{" "}
        {props.data.createdUser}
      </div>
      <br></br>
      <div>
        <label>
          <strong>Post Description:</strong>
        </label>{" "}
        {props.data.comment}
      </div>
      <br></br>
      <div>
        <label>
          <strong>
            Posted Date:</strong>
        </label>{" "}
        {new Date(props.data.createdAt).toLocaleDateString()}
      </div>
    </Fragment>
  );
};


const User = (props) => {
  const text_style = {
    width: '74%',
    wordBreak: 'break-all',
    verticalAlign: 'text-top',
    display: 'inline-block'
  }

  return (
    <Fragment>
      <div>
        <label>
          <strong>User Name:</strong>
        </label>{" "}
        {props.data.name}
      </div>
      <br></br>
      <div>
        <label>
          <strong>Email:</strong>
        </label>{" "}
        {props.data.email}
      </div>
      <br></br>
      <div>
        <label>
          <strong>Created User:</strong>
        </label>{" "}
        {props.data.created_user}
      </div>
      <br></br>
      <div>
        <label>
          <strong>Phone:</strong>
        </label>{" "}
        {props.data.phone}
      </div>
      <br></br>
      <div>
        <label>
          <strong>
            Birth Date:</strong>
        </label>{" "}
        {new Date(props.data.date_of_birth).toLocaleDateString()}
      </div>
      <br></br>
      <div>
        <label>
          <strong>
            Address:</strong>
        </label>{" "}
        <Box sx={text_style}>
          {props.data.address}</Box>
      </div>
      <br></br>
      <div>
        <label>
          <strong>
            Created Date:</strong>
        </label>{" "}
        {new Date(props.data.created_at).toLocaleDateString()}
      </div>
      <br></br>
      <div>
        <label>
          <strong>
            Updated Date:</strong>
        </label>{" "}
        {new Date(props.data.updated_at).toLocaleDateString()}
      </div>
    </Fragment>
  );
};


const SnackBox = (props) => {
  console.log('SnackBox', props);
  const pos = {
    vertical: 'bottom',
    horizontal: 'center',
  };
  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        open={props.msg !== ''}
        message={
          <Typography variant="h5" color="#ffeb3b">
            {props.msg}
          </Typography>}
        onClose={props.close}
        anchorOrigin={pos}
        key={pos.vertical + pos.horizontal}
      />
    </div>
  )
};



export { AlertBox, DetailBox, SnackBox };
