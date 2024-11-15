import { cn } from "@/lib/utils";
import OurSkills from "@/sections/our-section";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedSlideText } from "../Animated/animated";
import Heading from "./heading";
import { useScrollLock } from 'usehooks-ts'
import { useOnClickOutside } from 'usehooks-ts'
type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    url?: string; // Add a URL property for website preview
    name?: string
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
 
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);
    const { lock, unlock } = useScrollLock({
        autoLock: false,
        lockTarget: 'body',
    })

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };
    useEffect(() => {
        if (selected) {
            lock()
        }
        else {
            unlock()
        }
    }, [selected])
    const ref=useRef<any>();
    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    useOnClickOutside(ref, handleOutsideClick)
    return (
        <div
            id="scrollable"
            className="w-full h-full gap-1 lg:gap-2 grid grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))] scrollto sm:grid-cols-4 md:grid-cols-4 max-w-7xl mx-auto relative">
            {cards.map((card, i) => (
                <div key={i} className={`bg-gray-300- shadow-lg h-[min(calc(100vh-1rem),20rem)] rounded-none '}`}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden mx-auto scrollto group",
                            selected?.id === card.id
                                ? "rounded-none cursor-pointer scrollto z-[100000] fixed w-[min(calc(100vw-2rem),60rem)] inset-0  h-[min(calc(100vh-6rem),30rem)] m-auto flex justify-center items-center flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-none h-[min(calc(100vh-1rem),20rem)] active"
                                    : "bg-white rounded-none h-[min(calc(100vh-1rem),20rem)]"
                        )}
                        layoutId={`card-${card.id}`}
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected}
                            close={handleOutsideClick}
                        />}
                        <ImageComponent card={card} id={card.id} selected={selected} />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "fixed h-full w-full left-0 top-0 bg-black/80  opacity-0 z-[1000] backdrop-blur-0",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.8 : 0 }}
            />
        </div>
    );
};

const ImageComponent = ({ card, id, selected }: { card: Card, id: number, selected?: any }) => {
    const isSelected = selected?.id === id;
    return (
       <motion.div
       className={cn(
        "object-fill object-top absolute inset-0 h-full w-full transition duration-200 group-active:border-primary-color border-secondary-color border-4",
        isSelected ? "w-[min(calc(100%-1rem),60rem)] border-0 " : "opacity-100"
    )}
       layoutId={`image-${card.id}-image`}
       >
         <img
            className="size-full"
            src={card.thumbnail}
       
            alt="thumbnail"
        />
       </motion.div>
    );
};

const SelectedCard = ({ selected,
    close
}: {
    selected: Card | null,

    close: () => void
}) => {

    return (
        <div className="bg-transparent scrollto overflow-x-hidden !h-[min(calc(100vh-2rem),20rem)]- overflow-y-auto scrollto inset-0 h-full w-[min(calc(100%-1rem),40rem)]- w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[600]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 size-full w-[calc(100%+0.3rem)] bg-black  z-10 "
            />
            <div className="flex-none px-2 relative z-[83] flex gap-x-3 w-full bg-white  justify-between items-center h-8 ">
                <div
                    onClick={() => {
                        close();

                    }}
                >
                    <span className=""
                    >
                        <X size={20} />
                    </span>
                </div>
                <Heading className="flex-1 font-black text-center text-sm lg:text-lg">
                    {selected?.name || ""}

                </Heading>


            </div>

            <motion.div
                layoutId={`content-${selected?.id}`}
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 100,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative  w-full z-[70]  px-4 h-full overflow-auto flex-1 scrollto "
            >
                <AnimatedSlideText inView
                    text="ROSE MARY"
                    className='text-center  text-blue-950- text-blue-400  font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>

                </AnimatedSlideText>
                <OurSkills />

                <p className="line-clamp-3- text-white ">

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ratione deserunt, temporibus autem iure molestiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    estiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ratione deserunt, temporibus autem iure molestiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    estiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    estiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ratione deserunt, temporibus autem iure molestiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                    estiae veritatis odio nesciunt officia soluta ea quis, animi doloribus quos voluptates, cupiditate dolorem alias veniam.
                </p>

            </motion.div>
        </div>
    );
};
