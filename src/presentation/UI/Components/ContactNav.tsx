import { FaPlay } from "react-icons/fa6";

const ContactNav = () => {
    return (
        <div className="fixed z-50 ">
            <div className='px-7 justify-end items-center'>
                <div className='w-14 h-14 flex justify-center items-center rounded-full bg-blackDark shadow-md shadow-slate-50'>
                    <FaPlay className='text-primary text-[25px]' />
                </div>
            </div>
        </div>
    );
};

export default ContactNav;
