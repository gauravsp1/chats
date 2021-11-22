import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {withStyles, makeStyles} from '@material-ui/core/styles';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      left:950,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: '#0062cc',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function NavBar() {
    const classes = useStyles();
    return (    
        <div className="List">
            <AppBar>
            <Toolbar className="nav-container">
            <Typography variant="h6" className={classes.title}>
            Chat-House
    </Typography>
              <BootstrapButton id="Login" variant="contained" color="inherit" component={Link} to="/" disableRipple className={classes.margin}>
             Login
      </BootstrapButton>             
              <BootstrapButton id="SignUp" variant="contained" color="inherit" component={Link} to="/signup" disableRipple className={classes.margin}>
              SignUp
      </BootstrapButton>
     
            </Toolbar>
            </AppBar>
                       
        </div>
    )
}

export default NavBar
