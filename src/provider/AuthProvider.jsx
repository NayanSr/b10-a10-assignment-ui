import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  // const user= {name:'Nayan', email:'ns@g.com'};

  const handleEmailRegitration = (email, password) => {
    //! Email Registration
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleEmailLogin = (email, password) => {
    //! Email Login
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    //! Google Login
    return signInWithPopup(auth, googleProvider);
  };

  const handleSignout = () => {
    //! Log Out
    return signOut(auth);
  };

  const manageProfile = (name, image) => {
    updateProfile(auth.currentUser, { displayName: name, photoURL: image });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleEmailRegitration,
    handleGoogleLogin,
    handleSignout,
    handleEmailLogin,
    manageProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
