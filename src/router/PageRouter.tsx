import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const PageRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SignIn/>}/>
      <Route path={"/signup"} element={<SignUp/>}/>
    </Routes>
  );
}

export default PageRouter;