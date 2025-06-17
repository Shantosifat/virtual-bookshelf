import { createContext, useEffect, useState } from "react";
import app from "../Firebase/fireBase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser/signUp

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google signin

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  // update user profile 
  const updateUserProfile=(profile)=>{
    if(auth.currentUser){
      return updateProfile(auth.currentUser,profile)
    }
    else{
      return Promise.reject("no one is signed in")
    }
  }

  //   signin

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  logout

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  

  // to keep data after reload

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // to wipe out everything after sign up but data is saved
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    googleSignIn,
    logIn,
    logOut,
    loading,
    setLoading,
    updateUserProfile
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
