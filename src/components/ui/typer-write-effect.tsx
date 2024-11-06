import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

interface IWord {
    text: string;
    className?: string;
}

type IWordArray = IWord[];

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
    wordClassName,
}: {
    words: IWordArray;
    className?: string;
    cursorClassName?: string;
    wordClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: [0.4, 1],
                    y: [15, 0],
                    rotate: [10, 0],
                },
                {
                    duration: 0.4,
                    delay: initialRender ? 0 : stagger(0.1), // Adjusted stagger for smoother flow
                    ease: "easeOut",
                }
            );
            if (initialRender) {
                setInitialRender(false); // Set initialRender after animation starts
            }
        }
    }, [isInView, initialRender, animate]);

    const renderWords = (className: string = "") => (
        <motion.div ref={scope} className="inline w-full">
            {wordsArray.map((word, idx) => (
                <motion.div
                    key={`word-${idx}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: idx * 0.3, // Adjust delay for smoother appearance
                    }}
                >
                    {word.text.map((char, index) => (
                        <motion.span
                            key={`char-${index}-${char}`}
                            className={cn(`text-3xl lg:text-4xl`, word.className, className)}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div
            className={cn(
                "text-base text-white sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords(wordClassName)}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};


const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black `, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export default TypewriterEffectSmooth