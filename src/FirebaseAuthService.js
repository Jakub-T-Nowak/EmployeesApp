import firebaseConfig from "./FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // sendPasswordResetEmail,
    // signInWithPopup,
    // GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";

const auth = firebaseConfig.auth;

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
    return auth.signOut();
};

const subscribeToAuthChanges = (handleAuthChange) => {
    onAuthStateChanged(auth, (user) => {
        const isLogged = !!user
            handleAuthChange(isLogged);
    });
};

const FirebaseAuthService = {
    registerUser,
    loginUser,
    logoutUser,
    subscribeToAuthChanges,
};

export default FirebaseAuthService;
