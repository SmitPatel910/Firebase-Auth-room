import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import {firebase, db} from '../../../base';
import styles from './StepName.module.css';
import { withRouter } from "react-router";
import {useHistory } from 'react-router-dom';


const StepName = ({ onNext }) => {
    const [fullname, setFullname] = useState("New User");
    const [DOB, setDOB] = useState("09-10-2000");
    const [religion, setReligion] = useState("Hindu");
    const [height, setHeight] = useState(5);
    const history = useHistory();
    
    
    

    const handleSubmit = (e) => {
        var user = firebase.auth().currentUser;
        console.log(user);
        user.updateProfile({ displayName: fullname})
            .then(function() {  
            }).catch(function(error){
                alert(error);
            });

        db.collection("User Details")
          .add({
            Name: fullname,
            Birth_Date: DOB,
            Religion: religion,
            Height: height
        })
  
          .then(() => {
            alert("User Detail Submitted👍");
            onNext();
          })
          .catch((error) => {
            alert(error.message);
            history.push('/activate');
          });
      };



    async function goNext () {
        if (!fullname) {
            return;
        }
            console.log(fullname, DOB, religion, height);
            await handleSubmit();
            
    }

    return (
        <>
            
            <div className={styles.center}>
            <Card title="User Details" icon="goggle-emoji">
            <input className={styles.input}  type="text" placeholder="Your name" onChange={(e)=>{setFullname(e.target.value)}}/>  
                <br/>  
            <input className={styles.input}  type="date" placeholder="Date of Birth" onChange={(e)=>{setDOB(e.target.value)}}/> 
                <br />           
            <input className={styles.input}  type="text" placeholder="Religion" onChange={(e)=>{setReligion(e.target.value)}}/> 
                <br />
            <input className={styles.input}  type="number" placeholder="Height" onChange={(e)=>{setHeight(e.target.value)}}/>         
            <div>
                <Button onNext={goNext} text="Next" />
            </div>

            </Card>
            </div>
        </>
    );
};

export default withRouter(StepName);