import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {firebase} from "../../../base";
import { AuthContext } from "../../../Auth.js";
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from '../LoginPhoneEmail.module.css';
import styless from './Email.module.css';
import { Link } from 'react-router-dom';


const EmailLogin = ({ history }) => {
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');

        const Login = () =>{
        try {
            firebase.auth().signInWithEmailAndPassword(email.trim() , password);
            history.push("/activate");
        } 
        catch (error) {
        alert(error);
       };
    };
    
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        console.log(currentUser);
        return <Redirect to="/" />;
    }

    return (
        <Card title="Enter Your Email Id" icon="email-emoji">

            <input className={styless.input}  type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>  
                <br/>
            <input className={styless.input}  type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>  
                <br/>
            <div className={styles.actionButton}>
                <Button text="Login" onNext={Login}></Button> 
            </div>
                

            <div className={styless.signins}>
                    <span className={styless.hasInvites}> New user?</span>
                    <Link className={styless.signinLinks} to="./signup">Register Here</Link>
            </div>
        </Card>
    )
   
}

export default withRouter(EmailLogin);
