"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
interface FlipWordsByChangesProps {
  word: string;
  duration?: number;
  className?: string;
  uniqueKey?: string | number; // renamed from "key" (reserved in React)
}
export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const nextIndex = (words.indexOf(currentWord) + 1) % words.length; // Wrap around using modulus
        setCurrentWord(words[nextIndex]);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating) {
            const timeoutId = setTimeout(startAnimation, duration);
            return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block text-center relative text-left- text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentWord}
            >
                {/* Render the current word with a space after it */}
                <span className="inline-block">{currentWord}</span>
                {/* Add space after the word */}
                <span className="inline-block mx-2"> </span> {/* Adjust the mx-2 for more or less space */}
            </motion.div>
        </AnimatePresence>
    );
};



export const FlipWordsByChanges = ({
  word,
//   duration = 3000,
  className,
  uniqueKey,
}: FlipWordsByChangesProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={uniqueKey || word} // this triggers animation on change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
     
        exit={{
          opacity: 0,
          y: -40,
        //   x: 40,
          filter: "blur(8px)",
          scale: 2,
        //   position: "absolute",
        transition:{ 
          duration: 0.2}
        }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className={cn(
          "z-10 inline-block text-center relative text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
      >
        <span className="inline-block">{word}</span>
        <span className="inline-block mx-2"> </span>
      </motion.div>
    </AnimatePresence>
  );
};