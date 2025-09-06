import "../css/CreateAccount.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons"

export default function CreateAccount() {
  return (
    <form action=""
    className="w-full font-inter flex flex-col gap-1.5"
    >
                    
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1">
                <label className="font-medium">First Name</label>
                <input 
                    type="text"
                    className="input-field font-normal"
                    placeholder="Juan"
                />
            </div>
                        
            <div className="flex-1">
                <label className="font-medium">Last Name</label>
                <input 
                    type="text"
                    className="input-field font-normal"
                    placeholder="Dela Cruz" 
                />
            </div>
        </div>
                        
        <label className="font-medium">Course/Program</label>
        <input 
            type="text"
            className="input-field font-normal"
            placeholder="Information Technology" 
        />
                
        <label htmlFor="" className="font-medium">Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="text-gray-400 text-lg"
            />
          </div>
          <input 
            type="email"
            placeholder="example@gmail.com"
            className="input-field-with-icon font-normal pl-11 pr-4"
          />
        </div>
                
        <label className="font-medium">Password</label>
                
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon 
              icon={faLock} 
              className="text-gray-400 text-lg"
            />
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="input-field-with-icon font-normal pl-11 pr-4"
          />
        </div>
        
        <h3 className="font-normal text-sm">By creating an account, you agree to our Terms of Service & Privacy Policy.</h3>
        <button
            className="w-full py-2 text-white font-semibold rounded-md cursor-pointer
                    bg-gradient-to-r from-emerald-500 to-lime-500
                    hover:from-emerald-600 hover:to-lime-600
                    shadow-lg transition-all duration-300"
            >
            Create Account
        </button>
    </form>
  )
}