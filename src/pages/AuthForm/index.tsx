import CreateAccount from "../CreateAccountForm/components/CreateAccount"
import LogInForm from "../LogInForm/components/LogInForm"
import "./css/AuthForm.css"
import { useState } from "react"

export default function index() {
    
    const [signInClick, setSignIn] = useState(true)
  
  return (
    <div className="auth-form-container font-inter">
        <div className="form-container">
            <h1 className="font-bold">Welcome</h1>
            <h3 className="font-normal">Connect with your university community</h3>
                        
            <div className="bg-gray-200 w-full flex p-1 rounded-md">
                                
                <button
                    // className="bg-white flex-1 py-1"
                    className={`${signInClick ? "bg-white" : "bg-gray-200"} cursor-pointer flex-1 py-1 rounded-sm font-medium`}
                    onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>
                                
                <button
                    // className="flex-1 py-1"
                    className={`${signInClick ? "bg-grey-200" : "bg-white"} cursor-pointer flex-1 py-1 rounded-sm font-medium`}
                    onClick={() => setSignIn(false)}
                >
                    Sign Up
                </button>
            </div>
                          
            {signInClick ? <LogInForm/> : <CreateAccount/>}
        </div>
    </div>
  )
}