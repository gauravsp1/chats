import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import axios from 'axios';
import { DataActions, UserActions } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from './NavBar';
import { toast } from 'react-toastify';


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
        handle:""
    })
    const history=useHistory()    

    const dispatch = useDispatch();

    const UI =
    useSelector((state) => state?.UI) || [];

//Functions
    function handleChange(e){
        const {name,value} = e.target
        setNewUser((prev)=>{
          return { ...prev,
            [name]: value
        }})
    }

    function handleSubmit(){
        console.log("Length",newuser.password.length);
        if(!newuser.email || !newuser.password || !newuser.confirmPassword || !newuser.handle){
            toast.error("Please fill all fields")
        }
        else if(newuser.password.length <7){
 toast.error("Password length should be greater than 6")
        }
        else if(newuser.password !==newuser.confirmPassword){
 toast.error("Password don't match")
        }
         else{
            dispatch(UserActions.signupUser(newuser,history))
        }
            
    }

    return (
        <>
        <NavBar/>
        <div className="SignUp">
        <h2>Sign Up</h2>
        <TextField type="email"  id="email" label="E-mail"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="email" value={newuser.email} />
        <TextField type="password" id="password" label="Password" className={classes.TextField}  onChange={(e)=>{handleChange(e)}} name="password" value={newuser.password} />
        <TextField type="password" id="standard-basic" label="Confirm password"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="confirmPassword" value={newuser.confirmPassword} />
        <TextField type="text" id="text" label="Handle name"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="handle" value={newuser.handle} />
        {UI.errors?<h4 style={{color: "red"}}>*{UI.errors}*</h4>:null}
        <Button type="submit" disabled={UI.loading} onClick={handleSubmit} variant="contained" color="primary" className={classes.Button}>Sign Up
        {UI.loading ? <CircularProgress className={classes.Progress}/>:null}
        </Button>
        <h5>Have an account?Login <Link to="/">here</Link> </h5>
    </div>
    </>
    )
}

// function  mapStateToProps(state) {
//     return {
//         user: state.user,
//         UI: state.UI
//     }
// }
// function  mapDispatchToProps(dispatch) {
//     return {
//         signupUser:(user,history)=>{dispatch(signupUser(user,history))},
//         Errors:(errors)=>{dispatch(Errors(errors))}
//     }
// }


export default SignUp;