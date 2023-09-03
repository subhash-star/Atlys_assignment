import { postArr } from "./constant"
import chatbubble from '../../icons/chat_bubble.svg'
import { LoginModal } from "../LoginModal/LoginModal"
import { RegisterModal } from "../RegisterModal/RegisterModal"
import { useState } from "react"
const Home = () => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const openResiterModal=()=>{
        setIsBlurred(true);
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    }
    const openLoginModal=()=>{
        setIsBlurred(true);
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    }

    const hideModal=()=>{
        setIsBlurred(false);
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    }
    return (
        <>
            <div className={"w-[40rem] m-auto " + (isBlurred ? "blur-sm pointer-events-none" : '')}>
                <div className="mt-10">
                    <h1 className="mt-4 text-2xl text-white">Hello Jane</h1>
                    <p className="mt-3 text-[#C5C7CA]" >How are you doing today?would you like to share something with commmunity</p>
                </div>
                <div className="rounded-lg mt-8 bg-[#35373B] p-3 relative cursor-pointer" onClick={openResiterModal}>
                    <h4 className="mt-2 text-white">Create post</h4>
                    <input className="mt-2 p-4 w-full text-white bg-[#191920] rounded " placeholder="How are you feeeling today" />
                    <div className="flex justify-end"><button className="mt-2 p-2 px-5 bg-[#4A96FF] rounded text-white relative " >Post </button></div>
                </div>
                {postArr.map((el) => (
                    <div className="rounded-lg mt-4 bg-[#35373B] p-3 relative cursor-pointer" onClick={openResiterModal}>
                        <h5 className="mt-2 text-white">{el.name}</h5>
                        <p className=" text-[#7F8084]">{el.time}</p>
                        <p className="mt-2 p-4 w-full text-[#7F8084] bg-[#191920] rounded " >{el.text}</p>
                        <div className="flex">
                            <img className="bg-inherit" src={chatbubble} alt="ChitChat Logo"></img>
                            <p className=" p-2 text-[#7F8084] rounded text-white relative " >{el.comments} comments </p>
                        </div>
                    </div>
                ))}
            </div >
            {isLoginOpen && <LoginModal openRegister={openResiterModal} hideModal={hideModal}></LoginModal> }
            {isRegisterOpen && <RegisterModal openLogin={openLoginModal} hideModal={hideModal}></RegisterModal>}
        </>
    )
}

export { Home }