import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signUp.styles.scss'; 

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword)
        {
            alert("Passwords Dont Match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]: value});
    };
    
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2>Do not have an account</h2>
                <span>Sign Up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName} required
                        handleChange={this.handleChange}
                        label= "Your Name"
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email} required
                        handleChange={this.handleChange}
                        label = "Email"
                    />
                    <FormInput
                        type="password" name="password" 
                        value={password} 
                        handleChange={this.handleChange}
                        label = "Password"
                    />
                    <FormInput
                        type="password" name="confirmPassword" 
                        value={confirmPassword} 
                        handleChange={this.handleChange}
                        label = "Confirm Password"
                    />
                    <CustomButton type="submit"> 
                            Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}
    

export default SignUp;