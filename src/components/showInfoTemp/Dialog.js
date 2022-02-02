import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MessageDialog(props) {
  console.log(' MessageDialog', props)

  const handleClose = () => props.close();;

  const handleAction = () => props.deletePost(props.id);

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth={true}
      maxWidth="sm">
      <DialogTitle>Confirm</DialogTitle>
      <DialogContent>
        <DialogContentText
          textAlign="center"
          id="alert-dialog-slide-description">
          Are you sure want to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAction}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
