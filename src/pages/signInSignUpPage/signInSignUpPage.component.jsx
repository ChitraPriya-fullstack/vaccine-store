import React from 'react';
import './signInSignUp.styles.scss';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';

const SignInSignUpPage = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default(SignInSignUpPage);