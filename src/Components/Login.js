import React,{ useState } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { DataActions, UserActions } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
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
      },Progress:{
        height:"5px",
        position:"absolute"
  },
  Button:{
    margin: '5px',
    position:"relative"
  }
  });



function Login(props) {
    //States
    const classes = useStyles();
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const history=useHistory()

    const dispatch = useDispatch();

    const UI =
    useSelector((state) => state?.UI) || [];

//Functions
    function handleChange(e){
        const {name,value} = e.target
        setUser((prev)=>{
          return { ...prev,
            [name]: value
        }})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(user.email===""){
            alert("Enter Email")
        }
        else if(user.password===""){
            alert("Enter Password")
        }
        else{
            dispatch(UserActions.loginUser(user,history))
        }
       
        
    }

    return (
        <>
        <NavBar/>
        <div className="Login">
            <h2>Login</h2>
            <TextField type="email"  id="email" label="E-mail" className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="email" value={user.email} />
            <TextField type="password" id="password" label="Password"  className={classes.TextField} onChange={(e)=>{handleChange(e)}} name="password" value={user.password} />
            {UI.errors?<h4 style={{color: "red"}}>*{UI.errors}*</h4>:null}
            <Button type="submit" onClick={(e)=>{handleSubmit(e)}} disabled={UI.loading} variant="contained" color="primary" className={classes.Button}> Login
            {UI.loading ? <CircularProgress className={classes.Progress}/>:null}
            </Button>
            <h5>Don't have an account?Sign Up <Link to="/signup">here</Link> </h5>
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
//         loginUser:(user,history)=>{dispatch(loginUser(user,history))}
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Login);


export default Login;