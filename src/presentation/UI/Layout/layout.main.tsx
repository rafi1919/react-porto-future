import {useEffect, useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Footer from "../../Home/Footer/Footer";
import { twMerge } from "tailwind-merge";

const MainLayout=()=>{

const [isRoot, setIsRoot] = useState<boolean>(false);
const location = useLocation(); // Dapatkan lokasi dari react-router-dom

useEffect(() => {
setIsRoot(location.pathname == '/');
}, [location.pathname]);


    return(
        <>
        {/* <Navbar /> */}
        <main className="flex w-full flex-col">
            <div className={twMerge('mx-auto w-full')}>
            <Outlet />
            </div>
        </main>
        {/* {isRoot ? null : <Footer />} */}
        </>
    )
};
export default MainLayout
