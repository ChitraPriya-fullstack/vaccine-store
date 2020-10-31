import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './signIn.styles.scss'; 

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '', 
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email : '' , password: ''});
    } 

    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return(
        <div className='sign-in'>
            <h2>Already have an account</h2>
            <span>Sign in with email and password</span>

            <FormInput onSubmit={this.handleSubmit}
                    type="email" 
                    name="email" 
                    value={this.state.email} required
                    handleChange={this.handleChange}
                    label = "Email"
            />
            <FormInput
                    type="password" name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label = "Password"
            />
            <div className="buttons">
                <CustomButton type="submit"> 
                    Sign In
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                    Sign In With Google
                </CustomButton>
            </div>
        </div>   
        )
    }
}

export default SignIn;