import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import LoginStepPhoneEmail from "./pages/Login/LoginPhoneEmail";
import SignupStepPhoneEmail from "./pages/Signup/Email/EmailSignUp";
import Rooms from "./pages/Rooms/Rooms";
import Activate from "./pages/Activate/Activate";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
            <PrivateRoute exact path="/" component={Rooms} />
            <Route exact path="/login" component={LoginStepPhoneEmail} />
            <Route exact path="/activate" component={Activate} />
            <PrivateRoute exact path="/room" component={Rooms} />     
            <Route exact path="/signup" component={SignupStepPhoneEmail}/>   
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
