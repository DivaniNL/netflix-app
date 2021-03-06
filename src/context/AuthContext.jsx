import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading ] = useState(false);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        localStorage.setItem("loggedinUser", true)
        return auth.signInWithEmailAndPassword(email, password)
        
    }

    function logout(){
        auth.signOut()
    }
    useEffect(() => {
        const unsubsrcibe =  auth.onAuthStateChanged(user => {
          setLoading(false)
          setCurrentUser(user)
        })
          
          return unsubsrcibe
      }, [])
    

    const value = {
        currentUser,
        login,
        logout,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}