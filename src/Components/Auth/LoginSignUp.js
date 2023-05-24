import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Logo from "../../images/Logo.jpg";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { UserActions } from "../../Redux/Actions";



function LoginSignUp({title,onSubmit}) {
const history = useHistory();
const dispatch = useDispatch();

const [user,setUser]=useState({
    email:'',
    password:'',
    confirmPassword:'',
    handlerName:''
})
const [disableButton,setDisableButton]=useState(true)
console.log("disableButton",disableButton);
const handleChange=(e)=>{
    const { name, value } = e.target;
    setUser((previous)=>{
        return {
            ...previous, [name]: value
        }
    })
}

const handleSubmit =()=>{
  if(title==='Sign-Up'){
    localStorage.setItem('userHandler',user.handlerName)
  }
setTimeout(()=>{
  history.push("/home")
},1000)
}

useEffect(()=>{
    const {email,password,confirmPassword,handlerName}=user
    if(email && password && title==='Login'){
    console.log("In",disableButton);
    setDisableButton(false)
}
if(email && password && confirmPassword && handlerName && title==='Sign-Up'){
    setDisableButton(false)
}
},[user])

  return (
    <div className="login-signup-background-container">
    <div className="login-signup-container" style={{
        height:title ==='Sign-Up' ? '95vh':''
    }}>
      <div className="brand-container">
        <img className="logo" src={Logo} alt="profile" />
        <span className="brand-name">Chat House</span>
        <span>Your Personal Chat Oasis - Where Conversations Flourish!</span>
      </div>
        <h2>{title}</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email address"
          required
          className="input-feild"
          name='email'
          value={user?.email}
          onChange={(e)=>handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="input-feild"
          name='password'
          value={user?.password}
          onChange={(e)=>handleChange(e)}
        />
        {title ==='Sign-Up' && <><input
          type="password"
          placeholder="Confirm Password"
          required
          className="input-feild"
          name='confirmPassword'
          value={user?.confirmPassword}
          onChange={(e)=>handleChange(e)}
        />
        <input
          type="text"
          placeholder="Handler Name"
          required
          className="input-feild"
          name='handlerName'
          value={user?.handlerName}
          onChange={(e)=>handleChange(e)}
        /></>}
        {console.log("dfsdfs",disableButton)}
        <button
          type="submit"
          onClick={()=> handleSubmit()}
          className="submit-button"
        //   style={{
        //     opacity:disableButton?'0.5':'',
        //     cursor:disableButton?'not-allowed':'',
        //   }}
        //   disabled={disableButton}
        >
          Continue
        </button>
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
      >

        {title ==='Login' && <><h2>Don't have an account?</h2>
        <div className="switch-mode" onClick={() =>{ history.push("/signup")
    setDisableButton(true)
    }}>
          Create account
        </div></> }
        {title ==='Sign-Up' && <><h2>Already have an account?</h2>
        <div className="switch-mode" onClick={() =>{ history.push("/login") 
         setDisableButton(true)} }>
          Login
        </div></> }
        
      </div>
    </div>
  </div>
  )
}

export default LoginSignUp