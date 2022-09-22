import { Fragment } from "react"
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'


const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    }

    return (
        <Fragment>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </Fragment>
    )
}

export default SignIn;