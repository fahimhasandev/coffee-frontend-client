import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import auth from "../firebase/firebase.init"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create email
  const createUser = (email, pass) => {
    // loading will work, when we are creating the user
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  // Sign in with email
  const signInUser = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass)
  }

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser
  }
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
