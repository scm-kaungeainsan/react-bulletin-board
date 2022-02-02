import { withStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar,Button } from '@material-ui/core';


const CustomAppBar = withStyles({
  root: {
    
  }
})(AppBar);



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '1%',
    color: {
      primary: '#00B900',
    }
  },
  email: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image: {
    height: '28px',
  }
}));

export { CustomAppBar, useStyles }