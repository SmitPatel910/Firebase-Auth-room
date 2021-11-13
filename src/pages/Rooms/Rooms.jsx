import React from "react";
import {firebase} from "../../base";
import "./Room.css";
import Button from "../../components/shared/Button/Button";
import { useHistory } from 'react-router';

const Rooms = () => {

    const history = useHistory();
    var user = firebase.auth().currentUser;
    const signout = () => {
        firebase.auth().signOut();
        history.push('/login');
    }

    return (
        <>
            <Button text="Signout" onNext={signout}></Button>
            <div className="className">
                <h3>Hello {user.displayName}</h3>
                <br /><br />
                <img src={user.photoURL} alt="Waiting....." />
            </div>
            
        </>
    )
}

export default Rooms



