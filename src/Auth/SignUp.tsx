import React, {useState} from 'react';
import './authStyle.css';
import {Link} from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({email: '', password: '', cPassword: '', userType: ''})

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }
  const handleSignUp = () => {
    const formData = {
      email: state.email,
      password: state.password,
      cPassword: state.cPassword,
      userType: state.userType
    }
    console.log(formData, 'formData')
  }
  return (
    <div className={"signInFormContainer"}>
      <h1>Sign Up</h1>
      <div className={"section"}>
        <input className={"input"} type={"text"} placeholder={"Email"} name={"email"} value={state.email}
               onChange={(e) => handleChange(e)}/>
        <input className={"input"} type={"password"} placeholder={"Password"} name={"password"} value={state.password}
               onChange={(e) => handleChange(e)}/>
        <input className={"input"} type={"password"} placeholder={"Confirm Password"} name={"cPassword"}
               value={state.cPassword}
               onChange={(e) => handleChange(e)}/>
      </div>
      <div className={"radioBtn"}>
        <label>
          <input type="radio" name="userType" value={"admin"} checked={state.userType === "admin"}
                 onChange={(e) => handleChange(e)}/>Admin
        </label>
        <label>
          <input type="radio" name="userType" value={"user"} checked={state.userType === "user"}
                 onChange={(e) => handleChange(e)}/>User
        </label>
      </div>
      <div className={"signInSignUpBtn"}>
        <Link to={'/'}>
          <button className={"button"} type="button">Sign In</button>
        </Link>
        <button className={"button"} type="button" onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  )
}
export default SignUp;