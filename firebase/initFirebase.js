import firebase from 'firebase/app'
// the below imports are option - comment out what you don't need
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const clientCredentials = {
    // apiKey: "AIzaSyC21ZnljReUXu-8Zlfc5UFUtzhUCrLpYAU",
    // authDomain: "activefm-community-chat.firebaseapp.com",
    // projectId: "activefm-community-chat",
    // storageBucket: "activefm-community-chat.appspot.com",
    // messagingSenderId: "332591026612",
    // appId: "1:332591026612:web:358f5ccb647890745062e1"


    apiKey: "AIzaSyCi1Fr9lRoaRi4wWQmwEgrRCqFxsY3Ycdw",
    authDomain: "whatsapp-web-fbc3f.firebaseapp.com",
    projectId: "whatsapp-web-fbc3f",
    storageBucket: "whatsapp-web-fbc3f.appspot.com",
    messagingSenderId: "509898380560",
    appId: "1:509898380560:web:d137602013e59ca6cc4195"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in clientCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}