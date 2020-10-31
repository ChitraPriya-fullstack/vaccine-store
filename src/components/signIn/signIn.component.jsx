import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './signIn.styles.scss'; 

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '', 
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : '' , password: ''});
        }catch(error){
            console.log(error);
        }
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
            <form onSubmit={this.handleSubmit}>
                <FormInput
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
            </form>
        </div>   
        )
    }
}

export default SignIn;