import { twMerge } from 'tailwind-merge';
import { FaGlobe, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa6";

type ButtonProps = {
    className?: string;
    icon?:string;
    text:string;
    variant: string
}

const Button:React.FC<ButtonProps> =({className, icon, text, variant})=>{
    let IconComponent;

    // Assigning the appropriate icon component based on the 'icon' prop
    if (icon === 'instagram') {
        IconComponent = FaInstagram;
    } else if (icon === 'linkedin') {
        IconComponent = FaLinkedin;
    } else if (icon === 'github') {
        IconComponent = FaGithub;
    } else {
        IconComponent = FaGlobe;
    }

    return(
        <div className={twMerge(`border-2  border-white w-fit  rounded-full`, variant === 'light' ?' border-grayLight hover:border-grayDark' : 'border-grayDark hover:border-grayLight', className)}>

            <button className={twMerge(`lg:px-5 lg:py-2 md:p-2 p-2 flex items-center gap-4 `, variant === 'light' ?'text-grayLight hover:text-grayDark' : 'text-grayDark hover:text-grayLight')}>
                <IconComponent />
                <p className="font-medium lg:text-base md:text-[11px] text-[8px]">
                    {text}
                </p>
            </button>
        </div>
    )
}

export default Button