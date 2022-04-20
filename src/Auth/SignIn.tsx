import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './authStyle.css';

const SignIn = () => {
  const [state, setState] = useState({email: '', password: '', userType: ''})
  const handleChange = (e: any) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }

  const handleSignIn = () => {
    const formData = {
      email: state.email,
      password: state.password,
      userType: state.userType
    }
    console.log(formData, 'formData')
  }

  return (
    <div className={"signInFormContainer"}>
      <h1>Sign In</h1>
      <div className={"section"}>
        <input className={"input"} type={"text"} placeholder={"Email"} name={"email"} value={state.email}
               onChange={(e) => handleChange(e)}/>
        <input className={"input"} type={"password"} placeholder={"Password"} name={"password"} value={state.password}
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
        <button className={"button"} type="button" onClick={handleSignIn}>Sign In</button>
        <Link to={'/signup'}>
          <button className={"button"} type="button">Sign up</button>
        </Link>
      </div>
    </div>
  )
}
export default SignIn;