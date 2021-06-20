import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import axios from 'axios';
import {signupUser} from "../Redux/Actions/UserAction"
import {Errors} from "../Redux/Actions/UserAction"
import { useHistory } from 'react-router'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from './NavBar';


const useStyles = makeStyles({
    
        TextField: {
            margin: '20px',
        width: '300px'
      },
      Progress:{
            height:"5px",
            position:"absolute"
      },
      Button:{
        margin: '5px',
        position:"relative"
      }
  });



function SignUp(props) {

//States
    const classes = useStyles();
    const [newuser,setNewUser]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        userHandle:""
    })
    const history=useHistory()


//Functions
    function handleChange(e){
        const {name,value} = e.target
        setNewUser((prev)=>{
          return { ...prev,
            [name]: value
        }})
    }

    function handleSubmit(){
            props.signupUser(newuser,history)
        console.log("SignUp",newuser);
    }

    return (
        <>
        <NavBar/>
        <div className="SignUp">
        <h2>Sign Up</h2>
        <TextField type="email"  id="email" label="E-mail"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="email" value={newuser.email} />
        <TextField type="password" id="password" label="Password" className={classes.TextField}  onChange={(e)=>{handleChange(e)}} name="password" value={newuser.password} />
        <TextField type="password" id="standard-basic" label="Confirm password"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="confirmPassword" value={newuser.confirmPassword} />
        <TextField type="text" id="text" label="Handle name"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="userHandle" value={newuser.userHandle} />
        {props.UI.errors?<h4 style={{color: "red"}}>*{props.UI.errors}*</h4>:null}
        <Button type="submit" disabled={props.UI.loading} onClick={handleSubmit} variant="contained" color="primary" className={classes.Button}>Sign Up
        {props.UI.loading ? <CircularProgress className={classes.Progress}/>:null}
        </Button>
        <h5>Have an account?Login <Link to="/">here</Link> </h5>
    </div>
    </>
    )
}

function  mapStateToProps(state) {
    return {
        user: state.user,
        UI: state.UI
    }
}
function  mapDispatchToProps(dispatch) {
    return {
        signupUser:(user,history)=>{dispatch(signupUser(user,history))},
        Errors:(errors)=>{dispatch(Errors(errors))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);