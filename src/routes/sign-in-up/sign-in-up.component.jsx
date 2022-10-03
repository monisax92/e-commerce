import SignInForm from "../../components/SignInForm/sign-in-form.component";
import SignUpForm from "../../components/SignUpForm/sign-up-form.component";

import './sign-in-up.styles.scss';

const SignInUp = () => {

    return (
        <div className="sign-up-page-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default SignInUp;