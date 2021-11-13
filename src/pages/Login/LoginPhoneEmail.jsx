import React from 'react';
import EmailLogin from './Email/EmailLogin';
import styles from  './LoginPhoneEmail.module.css';

const LoginStepPhoneEmail = () => {

    return (
        <>
            <div className={styles.cardwrapper}>
                <div>
                    <div className={styles.buttonwrap}>
                    <EmailLogin/>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default LoginStepPhoneEmail
