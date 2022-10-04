import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import { createAuthUserFromEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../Button/button.component";
import FormInput from "../FormInput/form-input.component";
import './sign-up-form.styles.scss';

const fieldsDefaults = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [fields, setFields] = useState(fieldsDefaults);
    const {displayName, email, password, confirmPassword} = fields;

    // const {setCurrentUser} = useContext(UserContext);

    const fieldChangeHandler = (e) => {
        const {name, value} = e.target;
        setFields({...fields, [name]: value});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            console.log("Make sure passwords match.");
            return;
        }
        
        try{
            const response = await createAuthUserFromEmailAndPassword(email, password);
            createUserDocFromAuth(response.user, {displayName});
            // setCurrentUser(response.user);
            setFields(fieldsDefaults);
        }
        catch(error){
            console.log("User could not be created", error.message);
        }
            
    }

    return(
    <div className="sign-up-container">

        <h2>Create new account</h2>

        <span>Sign up with email and password</span>
        <form onSubmit={submitHandler}>

            <FormInput label="Display name" required type="text" onChange={fieldChangeHandler} name="displayName" value={displayName}/>

            <FormInput label="Email" required type="text" onChange={fieldChangeHandler} name="email" value={email}/>

            <FormInput label="Password" required type="password" onChange={fieldChangeHandler} name="password" value={password}/>

            <FormInput label="Confirm password" required type="password" onChange={fieldChangeHandler} name="confirmPassword" value={confirmPassword}/>

            <Button type="submit" label="Sign up"/>
        </form>

         {/* <span>Sign up with Google account</span> */}
         
    </div>
    )
};

export default SignUpForm;