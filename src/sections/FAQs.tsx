import { useState } from "react";

// import { ContentPlaceholder } from "./ContentPlaceholder";

import { AnimatedSlideText } from "@/components/Animated/animated";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Heading, { VariantHeading } from "@/components/ui/heading";
import { cn } from "../lib/utils";



// Define the interface for the structure of your objects
interface CleaningServiceFAQ {
    question: string;
    answer: string;
    category: string;
    contact?: string; // Optional field for contact information
    additionalInfo?: string; // Optional field for any additional information
}

// Create an array of objects conforming to the KomTraditionFAQ interface
const faqs: CleaningServiceFAQ[] = [
    {
        question: "What types of cleaning services do you offer?",
        answer: "We offer a wide range of cleaning services including residential, commercial, deep cleaning, carpet cleaning, window cleaning, and post-construction cleanup.",
        category: "Services Offered",
        contact: "services@shipsharpcleaning.com",
        additionalInfo: "Visit our Services page to see a full list of cleaning services available."
    },
    {
        question: "How can I schedule a cleaning appointment?",
        answer: "You can schedule an appointment through our website, by calling us, or by sending an email to our support team.",
        category: "Booking",
        contact: "bookings@shipsharpcleaning.com",
        additionalInfo: "For more information on how to book, please visit the Booking section of our website."
    },
    {
        question: "What products do you use for cleaning?",
        answer: "We use eco-friendly and non-toxic cleaning products to ensure a safe and clean environment for you and your family.",
        category: "Cleaning Products",
        contact: "support@shipsharpcleaning.com",
        additionalInfo: "For a list of the products we use and their safety certifications, visit our Products page."
    },
    {
        question: "Do I need to be home during the cleaning service?",
        answer: "No, it’s not required to be home, but you are welcome to be there. We can arrange secure access to your property if needed.",
        category: "Service Policies",
        additionalInfo: "Contact us for further details on how to arrange access to your home or office."
    },
    {
        question: "How can I provide feedback or request a re-clean?",
        answer: "We value your feedback and offer a satisfaction guarantee. If you’re not satisfied with a cleaning, please contact us within 24 hours, and we’ll arrange a re-clean.",
        category: "Customer Support",
        contact: "feedback@shipsharpcleaning.com",
        additionalInfo: "Learn more about our satisfaction guarantee on the Customer Support page."
    },
    {
        question: "What safety protocols are in place for COVID-19?",
        answer: "Our team follows all recommended COVID-19 safety protocols, including mask-wearing, sanitizing, and social distancing.",
        category: "Health & Safety",
        additionalInfo: "Read more about our COVID-19 safety measures on our Health & Safety page."
    }
];


// Export the array for use in other parts of the application
// export default faqs;

export const FrequentAskQuestion = () => {
    const [activeItem, setActiveItem] = useState<string | null>(faqs[0].question);

    const handleItemClick = (question: string) => {
        setActiveItem(activeItem === question ? null : question);
    };
    return (<div className="bg-white- container mx-auto py-10">

        <VariantHeading>
            <AnimatedSlideText text='Frequent Asked Question' inView className='text-2xl !font-medium !capitalize mb-6  text-center'>

            </AnimatedSlideText>
            <Heading className="text-center  !text-xl max-w-3xl mx-auto mb-4 text-muted-foreground">
                Empower Your Decision-Making: Find Answers to Common Questions Here.
            </Heading>
        </VariantHeading>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden sm:block lg:order-last">

                <img alt="faqs" src={"https://www.ontracklogix.com/assets/faqbg-BMWnbEzk.png"}
                    className="w-full h-96 object-cover rounded-lg mb-4" />
            </div>
            <div className="">
                <Accordion type="single" collapsible defaultValue={faqs[0].question}>
                    {faqs.map((faq) => (
                        <AccordionItem
                            value={faq.question}
                            key={faq.question}

                        >
                            <AccordionTrigger
                                defaultChecked
                                onClick={() => handleItemClick(faq.question)}
                                className={cn("text-lg", activeItem === faq.question && "text-primary-color")}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-loose tracking-wide">{faq.answer}</p>
                                <br />
                                {faq.contact && (
                                    <p>
                                        For more detail contact
                                        <Button variant="link" className="ml-1 px-0">
                                            {faq.contact}
                                        </Button>
                                    </p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                </Accordion>

            </div>
        </div>

    </div>)
};

// const accordionIds = [0, 1, 2, 3];