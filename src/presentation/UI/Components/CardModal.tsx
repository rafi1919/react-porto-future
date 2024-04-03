import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

interface CardProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    subTitle: string;
    link: string;
    stack:string
}

const CardModal: React.FC<CardProps> = ({ isOpen, onClose, image, subTitle, link, stack}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && cardRef.current) {
            const card = cardRef.current;

            const handleMouseMove = (event: MouseEvent) => {
                const cardRect = card.getBoundingClientRect();
                const mouseX = (event.clientX - cardRect.left - cardRect.width / 2) / (cardRect.width / 2);
                const mouseY = (event.clientY - cardRect.top - cardRect.height / 2) / (cardRect.height / 2);

                gsap.to(card, {
                    rotationX: 10 * mouseY,
                    rotationY: -10 * mouseX,
                    transformPerspective: 500,
                    transformOrigin: "center",
                    duration: 0.5
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    transformPerspective: 500,
                    duration: 0.5
                });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [isOpen]);

    return (
        <div className={twMerge(`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm duration-500`, isOpen ? 'visible' : 'hidden')}>
            <div ref={cardRef} className="absolute p-8 ">
                <div className="flex justify-end mb-4">
                    <p onClick={onClose} className="cursor-pointer text-red-500 font-light text-[50px]">x </p>
                </div>
                <div className="py-7 max-w-[700px] flex flex-col items-center">
                    <img src={image} className="w-full rounded-lg " alt={subTitle} />
                    <p className="font-semibold text-grayLight text-3xl ">{subTitle}</p>
                    <p className="font-light text-grayLight text-xl">stack:</p>
                    <p className="font-light text-grayLight text-xl">{stack}</p>
                    {link ? (
                        <Link to={link} className="font-semibold text-primary text-xl">(Visit Website)</Link>
                    ) : (
                        <p className="font-semibold text-primary text-xl">Website is not deployed</p>
                    )}                
                </div>
            </div>
        </div>
    );
};

export default CardModal;
