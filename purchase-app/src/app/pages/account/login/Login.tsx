"use client"
import { useState } from "react";

import { LOGIN_VIEW } from "@/modules/account/login-template";

import Button from "@/components/atoms/Button";

interface ILoginProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Login = ({ setCurrentView }: ILoginProps) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("coso")
    //  implementar lógica para iniciar sesión
    try {
      // Lógica para iniciar sesión utilizando los valores de email y password
    } catch (error) {
      setErrorMessage("Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.");
    }
  };

  return (
    <div id="login-pages" className="w-2/4">
      <div id="onboarding-card" className="min-w-full m-auto bg-gray-bg">
        <div 
          id="onboarding-form" 
          className="p-16 rounded-xl bg-gray-bg flex flex-col justify-center w-full text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
            <h2 className="text-2xl font-bold	">
            WELCOME BACK
            </h2>
            <p className="text-xl">Sign in to access an enhanced shopping experience.</p>
          
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                title="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border m-2 text-xl bg-white p-4 w-full rounded-lg font-extralight"
                required
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                title="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border m-2 text-xl bg-white p-4 w-full rounded-lg font-extralight"
                required
              />
            </div>
            {errorMessage && <span className="text-red-500">{errorMessage}</span>}
            <Button name="Sign in" />
          </form>
          <div>
            <button 
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} 
              className="hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;