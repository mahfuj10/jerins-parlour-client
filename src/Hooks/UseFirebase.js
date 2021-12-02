import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitalize from "../Firebase/FirebaseInitalize";

firebaseInitalize();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);

            })
    }

    // handale google sign

    const handaleGoogleSign = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                const user = result.user;
                saveUser(user.email, user.displayName, 'POST')
            }).catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [])

    const logOut = () => {

        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message)
            })

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://radiant-hamlet-99209.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        handaleGoogleSign,
        user,
        error,
        logOut,
        registerUser
    }

}

export default UseFirebase;