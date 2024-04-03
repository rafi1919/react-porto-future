import {useState} from 'react'
import { FaGlobe} from "react-icons/fa6";


const Navbar =()=>{
    const [onToggle, setOnToggle] = useState(false)

    const handleToggle=()=>{
        setOnToggle(!onToggle)
    }

    return(
        <div className="fixed w-full flex justify-between p-5 bg-primary">
            <div className="">
                <p className="font-bold">Rafi's Porto</p>
            </div>
            <div className="">
                <div className='lg:hidden flex p-4 rounded-full bg-blackDark w-fit' onClick={handleToggle}>
                    <FaGlobe className='text-primary text-[1.25rem]' />
                </div>
                {onToggle && (
                    <ul className="lg:hidden flex flex-col gap-5 font-semiBold">
                    <li><p>About me</p></li>
                    <li><p>Project</p></li>
                    <li><p>More</p></li>
                </ul>
                )}
                <ul className="lg:flex hidden gap-5 font-semibold">
                    <li><p>About me</p></li>
                    <li><p>Project</p></li>
                    <li><p>More</p></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar