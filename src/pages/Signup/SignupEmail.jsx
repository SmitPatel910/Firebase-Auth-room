import React from 'react';
import EmailSignup from './Email/EmailSignUp';
import styles from  './SignupEmail.module.css';

const SignupStepPhoneEmail = () => {

    return (
        <>
            <div className={styles.cardwrapper}>
                    <div className={styles.buttonwrap}>
                        <EmailSignup/>                     
                    </div>
            </div>
        </>

    )
}

export default SignupStepPhoneEmail