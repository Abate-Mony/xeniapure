import { useAnimate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { AnimatedSlideText } from "./Animated/animated";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-10-01";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const ShiftingCountdown = () => {
    return (
        <div className="bg-gradient-to-br bg-white- p-4 py-12">
            <div className="border-2 shadow-sm bg-white text-gray-800 w-[calc(100%-1rem)] max-w-6xl border-colorPrimary rounded-full  mx-auto">

                <Marquee className="px-0 py-2 " pauseOnHover speed={70}>
                    <pre className="px-4 py-2 text-xl lg:text-2xl font-semibold tracking-wide">
                        Welcome to the heart of Kom tradition! Discover the rich heritage, vibrant festivals, and deep ancestral customs that shape the Kom people. Join us in celebrating history, culture, and community.
                    </pre>
                </Marquee>


                {/* <HeroSection /> */}
            </div>
            <AnimatedSlideText inView
                text="Counting Down To The Next KOM Convention
"
                className='text-center  text-blue-950- text-primary-color font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>

            </AnimatedSlideText>

            <div className="mx-auto flex w-full items-center max-w-2xl">
                <CountdownItem unit="Day" text="days" />
                <CountdownItem unit="Hour" text="hours" />
                <CountdownItem unit="Minute" text="minutes" />
                <CountdownItem unit="Second" text="seconds" />
            </div>
            <Link to={"/convention"}>
                <Button className="block- gap-x-4 sticky- bg-primary-color btn-  mt-4
            w-[min(420px,calc(100%-1rem))] px-0
            mx-auto font-bold text-sm z-50 h-14 flex items-center 
            bottom-0 rounded-none   left-0 uppercase  text-center ">
                    Lean more <ArrowRight size={25} />
                </Button>
            </Link>
        </div>
    );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div className="flex h-24 w-1/4 flex-col bg-transparent items-center justify-center gap-1 border-r-[1px] border-slate-200 font-mono md:h-36 md:gap-2">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-2xl font-medium text-black md:text-4xl lg:text-6xl xl:text-7xl"
                >
                    {time}
                </span>
            </div>
            <span className="text-sm font-light font-pacifico  text-slate-500 md:text-sm lg:text-base">
                {text}
            </span>
        </div>
    );
};

export default ShiftingCountdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
const useTimer = (unit: Units) => {
    const [ref, animate] = useAnimate();

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeRef = useRef(0);

    const [time, setTime] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        const end = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = +end - +now;

        let newTime = 0;

        if (unit === "Day") {
            newTime = Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((distance % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((distance % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };

    return { ref, time };
};