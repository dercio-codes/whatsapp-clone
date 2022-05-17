import initFirebase from '../../firebase/initFirebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

initFirebase() // initialize firebase

const firebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider:  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },

    ],
    signInSuccessUrl: '/chatroom',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        },
    },
}

const FirebaseAuth = () => {

    return (
        <div>
                <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
        </div>
    )
}

export default FirebaseAuth