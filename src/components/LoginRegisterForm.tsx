import React from 'react'

type LoginRegisterFormProps = {
    loginOrRegister: string,
    setLoginOrRegister: (loginOrRegister: string) => void
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
    setLoginOrRegister,
    loginOrRegister
}) => {
    return (
        <div className="h-screen w-screen bg-slate-600 flex items-center justify-center gap-2">
            <div className="bg-slate-200 rounded-xl p-6 flex flex-col items-center justify-start gap-4 w-1/3">
                <h3 className="text-center font-semibold text-4xl">Login Form</h3>
                <div className="flex w-3/4 rounded-xl items-center justify-center border-[.3px] border-slate-400">
                    <label className="relative inline-block w-full h-10">
                        <input type="checkbox" className="opacity-0 w-0 h-0"
                            onChange={(e) => {
                                setLoginOrRegister(e.target.checked ? "register" : "login")
                            }}
                        />
                        <span className="slider round flex items-center">
                            <span className="text-white font-semibold absolute left-16">Login</span>
                            <span className="text-white font-semibold absolute right-16">Register</span>
                        </span>
                    </label>
                </div>
                <form className="flex flex-col gap-2 p-4 w-2/3">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter username" className="shadow-xl p-4 w-full rounded-md focus:border-cyan-500 focus:ring-cyan-500" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter password" className="shadow-xl placehoder-red-400 p-4 w-full rounded-md" />
                    <button type="submit" className="bg-gradient-to-r from-purple-500 to-fuchsia-500 p-2 text-center font-bold text-lg rounded-md mt-4  transition-all ">
                        {loginOrRegister === "login" ? "Login" : "Register"}
                    </button>
                </form>
            </div>
        </div>)
}

export default LoginRegisterForm