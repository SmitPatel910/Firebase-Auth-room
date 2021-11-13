import React from 'react'
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';


const Home = () => {

    const history = useHistory();

    function startRegister() {
        history.push('/activate');
    }

    return (
        <div className="mainstyle">
            <Card title="Welcome to RTC" icon="logo">
                <p className="text"> 
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks    
                </p>
                <div>
                    <Button  onNext={startRegister} text="Register Here"></Button>
                </div>
                <div className="signin">
                    <span className="hasInvite"> Have an invite text?</span>
                    <Link className="signinLink" to="./login">Signin</Link>
                </div>
            </Card>
        </div>
    )
}

export default Home
