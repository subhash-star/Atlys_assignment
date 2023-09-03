import crossIcon from "../../icons/cross.svg";
import './LoginModal.css'
export const LoginModal = ({ openRegister, hideModal }: { openRegister: () => void, hideModal: () => void }) => {
    return (
        <div className="p-4 h-96 w-96 login-container flex flex-col rounded-lg relative" >
            <img className="bg-inherit h-4 absolute right-5 top-12 cursor-pointer" src={crossIcon} alt="cross Logo" onClick={hideModal}></img>
            <p className="text-center mt-7 col color-gray">WELCOME BACK</p>
            <h4 className="text-center mt-1 text-white">Log into your account</h4>
            <label className="mt-6">
                <span className="text-[#C5C7CA]" >
                    Email
                </span>
                <input type="email" name="email" className="mt-1 p-2 w-full text-white bg-inherit rounded border-solid border-2 border-[#35373B]" placeholder="Enter your eamil" />
            </label>
            <label className="mt-3">
                <span className="text-[#C5C7CA]" >
                    Password
                </span>
                <input type="password" name="password" className="mt-1 p-2 w-full text-white bg-inherit rounded border-solid border-2 border-[#35373B]" placeholder="Enter your password" />
            </label>
            <button className="mt-3 p-2 bg-[#4A96FF] rounded text-white" onClick={hideModal}>Login now</button>
            <p className="mt-3 col color-gray cursor-pointer w-fit" onClick={openRegister}>Not registered yet? Register →</p>
        </div>
    )
}