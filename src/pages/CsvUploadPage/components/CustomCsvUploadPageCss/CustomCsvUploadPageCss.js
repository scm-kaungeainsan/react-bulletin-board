import { makeStyles,withStyles } from '@material-ui/core/styles';
import { TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: '80px',
  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      position: 'absolute',
      bottom: '-20px'
    },
  },
  card: {
    padding: '10px 30px',
  },
}));

const UploadField = withStyles({
  root: {

    '& .MuiInput-underline:before': {
      border: 'none', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      border: 'none',  // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      border: 'none',  // Solid underline on focus
    },
  },
})(TextField);




export { useStyles,UploadField }