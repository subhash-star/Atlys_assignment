import { useState } from "react";
import "./Login.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const routetoHome = () => {
        navigate('/Home')
    }
    return (
        <div className="p-4 h-96 w-96 login-container flex flex-col rounded">
            <p className="text-center mt-7 col color-gray">WELCOME BACK</p>
            <h4 className="text-center mt-1 text-white">Log into your account</h4>
            <label className="mt-6">
                <span className="text-[#C5C7CA]" >
                    Email
                </span>
                <input type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }}
                    className="mt-1 p-2 w-full text-white bg-inherit rounded border-solid border-2 border-[#35373B]" placeholder="Enter your eamil" />
            </label>
            <label className="mt-3">
                <span className="text-[#C5C7CA]" >
                    Password
                </span>
                <input type="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }}
                    className="mt-1 p-2 w-full text-white bg-inherit rounded border-solid border-2 border-[#35373B]" placeholder="Enter your password" />
            </label>
            <button className="mt-3 p-2 bg-[#4A96FF] rounded text-white" onClick={routetoHome}>Login now</button>
            <p className="mt-3 col color-gray">Not registered yet? Register</p>
        </div>
    )
}
export { Login }