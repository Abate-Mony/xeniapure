import { useState } from "react";

// import { ContentPlaceholder } from "./ContentPlaceholder";

import { AnimatedSlideText } from "@/components/Animated/animated";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Heading, { VariantHeading } from "@/components/ui/heading";
import { cn } from "../lib/utils";



// Define the interface for the structure of your objects
interface KomTraditionFAQ {
    question: string;
    answer: string;
    category: string;
    contact?: string; // Optional field for contact information
    additionalInfo?: string; // Optional field for any additional information
}

// Create an array of objects conforming to the KomTraditionFAQ interface
const faqs: KomTraditionFAQ[] = [
    {
        question: "What is the significance of the Fon in Kom tradition?",
        answer: "The Fon serves as both the spiritual and political leader of the Kom people, guiding their cultural practices and preserving ancestral customs.",
        category: "Kom Leadership",
        contact: "fonsupport@komculture.com",
        additionalInfo: "For more information about the Fon and his role, visit our Leadership section."
    },
    {
        question: "How can I join the Kom traditional meetings?",
        answer: "You can attend by registering through our website or by visiting the Kom Cultural Center. Ensure you follow the cultural etiquette during the meetings.",
        category: "Kom Meetings",
        contact: "meetings@komculture.com",
        additionalInfo: "Meeting schedules are posted on the Events page. Check there for the next gathering."
    },
    {
        question: "What is Laikom and its role in Kom tradition?",
        answer: "Laikom is the royal palace and the sacred center of Kom tradition, serving as the seat of the Fon and a place for key cultural ceremonies.",
        category: "Kom Cultural Heritage",
        contact: "heritage@komculture.com",
        additionalInfo: "Learn more about the palace in our Cultural Heritage section."
    },
    {
        question: "Are there any special cultural festivals I can attend?",
        answer: "Yes, Kom hosts several cultural festivals throughout the year, celebrating our heritage through traditional dances, music, and rituals.",
        category: "Kom Festivals",
        additionalInfo: "Visit our Festivals section for event dates and details on how to participate."
    },
    {
        question: "How can I support the preservation of Kom culture?",
        answer: "You can support us by donating to our preservation projects or volunteering at cultural events.",
        category: "Support Kom Tradition",
        contact: "support@komculture.com",
        additionalInfo: "Visit the Support Us page to learn how you can contribute to our mission."
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