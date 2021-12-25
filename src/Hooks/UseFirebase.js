import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitalize from "../Firebase/FirebaseInitalize";

firebaseInitalize();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // create new user
    const registerUser = (email, password, name, history, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // google sign

    const handaleGoogleSign = (location, history) => {
        setIsLoading(true);

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                const user = result.user;
                saveUser(user.email, user.displayName, 'POST');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        setIsLoading(false);
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
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

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://radiant-hamlet-99209.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setAdmin(data.admin)
            })
    }, [user?.email])

    return {
        handaleGoogleSign,
        user,
        error,
        isLoading,
        admin,
        logOut,
        registerUser
    }

}

export default UseFirebase;