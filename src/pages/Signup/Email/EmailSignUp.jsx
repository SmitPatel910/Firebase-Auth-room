import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {auth} from "../../../base";
import { AuthContext } from "../../../Auth.js";
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from '../SignupEmail.module.css';
import styless from './Email-textInput.module.css';
import { Link } from 'react-router-dom';

const EmailSignUp = ({ history }) => {
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
    const [Cpassword , setCpassword] = useState('');
    
    async function SignUp(){
            if(password === Cpassword){
                auth.createUserWithEmailAndPassword(email , password)
                .then((userCredential)=>{
                    // send verification mail.
                    userCredential.user.sendEmailVerification();
                    alert("Email varification link sent to your mail Id!!");
                    history.push("/activate");
                    // auth.signOut();
                })
                .catch(alert);                                       
            }
            else{
                alert("Confirm Password does not match!");
            }
        };
        
    
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/room" />;
    }

    return (
        <div className={styless.mainstyle}>
        <Card title="Signup with Email" icon="email-emoji">

            <input className={styless.input}  type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>  
                <br/>
            <input className={styless.input}  type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>  
                <br/>
            <input className={styless.input}  type="password" placeholder="Confirm Password" onChange={(e)=>{setCpassword(e.target.value)}}/>
                <br />
            <div className={styles.actionButton}>
                <Button text="SignUp" onNext={SignUp}></Button> 
            </div>
                

            <div className={styless.signins}>
                    <span className={styless.hasInvites}> Have an invite text?</span>
                    <Link className={styless.signinLinks} to="./login">SignIn</Link>
            </div>
        </Card>
        </div>
    )
   
}

export default withRouter(EmailSignUp);
