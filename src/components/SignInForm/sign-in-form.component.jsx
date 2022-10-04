import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import {signInWithGooglePopup, signInWithEmailAndPass, createUserDocFromAuth} from '../../utils/firebase/firebase.utils';
import Button from "../Button/button.component";
import FormInput from "../FormInput/form-input.component";

import './sign-in-form.styles.scss';

const fieldsDefaults = {
    email: '',
    password: ''
};


   

const SignInForm = () => {

    const [fields, setFields] = useState(fieldsDefaults);
    const {email, password} = fields;

    // const {setCurrentUser} = useContext(UserContext); //useContext returns object with value, here we need only setter function from it to change this state when user signs in

    const fieldChangeHandler = (e) => {
        const {name, value} = e.target;
        setFields({...fields, [name]: value});
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try{
            const response = await signInWithEmailAndPass(email, password);
            // setCurrentUser(response.user);
            setFields(fieldsDefaults);
        }
        catch(error){
            if(error.code == 'auth/wrong-password'){
                alert('Password is incorrect!');
            } else if (error.code == 'auth/user-not-found'){
                alert("User with such email doesn't exist");
            } else{
                alert("Something went wrong...");
            }
        }
            
    }

    const logGoogleUser = async () => {
            await signInWithGooglePopup();
            // createUserDocFromAuth(response.user);
            // setCurrentUser(response.user);
    } 

    return(
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={submitHandler}>
                <FormInput label="Email" type="text" name="email" value={email} onChange={fieldChangeHandler}/>
                <FormInput label="Password" type="password" name="password" value={password} onChange={fieldChangeHandler}/>

            <div className="buttons-container">
                <Button label="Sign in" type="submit"/>
                <Button label="Sign in with Google" type="button" buttonType="google" onClick={logGoogleUser}/> 
                {/* type="button" so it's not treated as submit and we don't trigger onSubmit by clicking it */}
            </div>


            </form>
            
        </div>
    )
}             


export default SignInForm;