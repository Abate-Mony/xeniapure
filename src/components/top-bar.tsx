import { LinkedinIcon } from "lucide-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Separator } from "./ui/separator";

const socialIcons = [
    {
        name: "Facebook",
        icon: <BsFacebook size={10} className="size-4 text-black" />,
        link: "https://www.facebook.com"
    },
    {
        name: "Twitter",
        icon: <BsTwitter size={10} className="size-5 text-black" />,
        link: "https://www.twitter.com"
    },
    {
        name: "Instagram",
        icon: <BsInstagram size={10} className="size-5 text-black" />,
        link: "https://www.instagram.com"
    },
    {
        name: "LinkedIn",
        icon: <LinkedinIcon size={10} className="size-5 text-black" />,
        link: "https://www.linkedin.com"
    },
    {
        name: "GitHub",
        icon: <BsGithub size={10} className="size-5 text-black" />,
        link: "https://www.github.com"
    }
];
const TopBar = () => {
    return (
        <>
            <div className="flex items-center py-2.5 px-2  gap-x-3 max-w-6xl mx-auto  bg-slate-50">
                {socialIcons.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                    </a>
                ))}

            </div>
            <Separator />
        </>
    )
}

export default TopBar
