"use client"
import { createContext, useContext } from "react"

const AuthContext = createContext({})
export const useCurrentUser = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => children
export default AuthContext