import { makeStyles } from '@material-ui/core/styles';

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




export { useStyles }