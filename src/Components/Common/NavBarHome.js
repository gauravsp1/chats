import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { DataActions, UserActions } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'
import Notification from "./Notification"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles, makeStyles} from '@material-ui/core/styles';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      'margin-left':'15px',
      // 'margin-right':'20px',
      // left:950,
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
      // margin: theme.spacing(1),
    },
  }));

function NavBarHome(props) {
    const classes = useStyles();
    const history=useHistory()
    const dispatch = useDispatch();
    
    function logout(){
      dispatch(UserActions.logoutUser(history))
    }

    return (    
        <div className="List">
            <AppBar>
            <Toolbar className="nav-container">
            <Typography variant="h6" className={classes.title}>
            Chat-House
    </Typography>
    <div className="TitleBar">
    <Notification/>
    <BootstrapButton id="Home" variant="contained" color="inherit" component={Link} to="/home" disableRipple className={classes.margin}>
              Home
      </BootstrapButton>      
              <BootstrapButton onClick={logout} id="Logout" variant="contained" color="inherit"  disableRipple className={classes.margin}>
             Logout
      </BootstrapButton>             
      </div>
     
            </Toolbar>
            </AppBar>
                       
        </div>
    )
}


// function  mapStateToProps(state) {
//   return {
//       posts: state.data.posts,
//       loading:state.UI.loading
//   }
// }

// function  mapDispatchToProps(dispatch) {
//   return {
//     logoutUser:((history)=>{dispatch(logoutUser(history))})

//   }
// }


export default NavBarHome; 