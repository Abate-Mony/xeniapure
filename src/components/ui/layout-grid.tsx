"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Heading from "./heading";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    url?: string; // Add a URL property for website preview
    name?: string
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [spans, setSpans] = useState<string[]>([]);

    useEffect(() => {
        const getSpansForLargeScreens = () => {
            const options = [
                ['col-span-4'],
                ['col-span-3', 'col-span-1'],
                ['col-span-1', 'col-span-3'],
                ['col-span-2', 'col-span-2'],
                ['col-span-2', 'col-span-1', 'col-span-1'],
                ['col-span-1', 'col-span-2', 'col-span-1'],
                ['col-span-1', 'col-span-1', 'col-span-2'],
                ['col-span-1', 'col-span-1', 'col-span-1', 'col-span-1']
            ];
            return options[Math.floor(Math.random() * options.length)];
        };

        const getSpansForSmallDevices = () => {
            const options = [
                ['col-span-2', 'col-span-2'],
                ['col-span-4']
            ];
            return options[Math.floor(Math.random() * options.length)];
        };

        const generateSpansForCards = () => {
            const isSmallScreen = window.innerWidth < 640;
            let spans: string[] = [];
            let rowIndex = 0;

            while (rowIndex < cards.length) {
                if (isSmallScreen) {
                    const smallDeviceSpans = getSpansForSmallDevices();
                    smallDeviceSpans.forEach(span => {
                        if (rowIndex < cards.length) {
                            spans.push(span);
                            rowIndex++;
                        }
                    });
                } else {
                    const currentSpans = getSpansForLargeScreens();
                    currentSpans.forEach(span => {
                        if (rowIndex < cards.length) {
                            spans.push(span);
                            rowIndex++;
                        }
                    });
                }
            }

            return spans;
        };

        // Update spans on component mount and on window resize
        const updateSpans = () => setSpans(generateSpansForCards());
        updateSpans();
        window.addEventListener('resize', updateSpans);

        return () => window.removeEventListener('resize', updateSpans);
    }, [cards]);

    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    useEffect(() => {
        if (selected) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [selected]);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
        // alert("cli")
    };

    return (
        <div className="w-full h-full gap-1 lg:gap-2 grid grid-cols-4 scrollto sm:grid-cols-4 md:grid-cols-4 max-w-7xl mx-auto relative">
            {cards.map((card, i) => (
                <div key={i} className={`bg-gray-300- shadow-lg h-[min(calc(100vh-1rem),25rem)] rounded-none ${spans[i] || 'col-span-1'}`}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden mx-auto scrollto",
                            selected?.id === card.id
                                ? "rounded-none cursor-pointer scrollto z-[100000] fixed w-[min(calc(100vw-2rem),60rem)] inset-0 top-[4rem] h-[min(calc(100vh-6rem),30rem)] m-auto flex justify-center items-center flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-none h-[min(calc(100vh-1rem),25rem)]"
                                    : "bg-white rounded-none h-[min(calc(100vh-1rem),25rem)]"
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
                    "fixed h-full w-full left-0 top-0 bg-black opacity-0 z-[1000]",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const ImageComponent = ({ card, id, selected }: { card: Card, id: number, selected?: any }) => {
    const isSelected = selected?.id === id;
    return (
        <motion.img
            layoutId={`image-${card.id}-image`}
            src={card.thumbnail}
            className={cn(
                "object-fill object-top absolute inset-0 h-full w-full transition duration-200",
                isSelected ? "w-[min(calc(100%-1rem),60rem)]" : "opacity-100"
            )}
            alt="thumbnail"
        />
    );
};

const SelectedCard = ({ selected,
    close
}: {
    selected: Card | null,

    close: () => void
}) => {
    return (
        <div className="bg-transparent scrollto !h-[min(calc(100vh-5rem),20rem)]- overflow-y-auto scrollto inset-0 h-full w-[min(calc(100%-1rem),60rem)]- w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[600]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-[calc(100%+0.3rem)] bg-black opacity-20 z-10 hidden -translate-x-1"
            />
            <div className="flex-none px-2 flex gap-x-3 w-full bg-white  justify-between items-center h-10 border-green-500">
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
                <Heading className="flex-1 text-center text-sm lg:text-lg">
                    {selected?.name || ""}

                </Heading>
                <span className="p-1">

                    <a href={selected?.url || "#"} target="_blank">
                        <ExternalLink size={20} />
                    </a>
                </span>


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
                className="relative px-8= pb-4- z-[70]  py-2- h-full flex-1 "
            >
                <p className="line-clamp-3 ">
                    {selected?.content}
                </p>
                {/* {selected?.url && (
                    <iframe
                        src={selected.url}
                        className="w-full  h-[calc(100vh-10rem)]- h-full mt-4- scrollto"
                        title="https://akobateemmanuel.vercel.app/"
                    />
                )} */}
            </motion.div>
        </div>
    );
};
