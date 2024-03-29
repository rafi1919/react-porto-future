
interface LayoutProps {
    children: React.ReactNode;
}

const LayoutDark =({children}: LayoutProps)=>{
    return(
        <div className='w-full bg-blackLight '>
            <div className="px-7 md:px-3 max-w-[1200px] mx-auto ">
            <div className="pt-[80px] py-6">
                {children}
            </div>
            </div>
        </div>
    )
}
export default LayoutDark