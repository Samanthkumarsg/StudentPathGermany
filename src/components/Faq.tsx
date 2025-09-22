import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
    const faqs = [
        {
            id: "item-1",
            question: "How does ArrivePath help me move to Germany?",
            answer: "ArrivePath streamlines your relocation process by offering an all-in-one platform for housing, legal registration, bank accounts, airport pickup, insurance, and job opportunities. We provide step-by-step guidance from before your departure to settling in comfortably."
        },
        {
            id: "item-2",
            question: "How do I find suitable housing?",
            answer: "We offer verified apartments, dorms, and shared flats matched to your budget and preferences. Our team helps you compare options and secure accommodation quickly and safely."
        },
        {
            id: "item-3",
            question: "What happens when I arrive in Germany?",
            answer: "We arrange airport pickup, temporary accommodation, and transportation so that your arrival is seamless. A dedicated team will meet you, guide you through the initial setup, and ensure you feel settled from day one."
        },
        {
            id: "item-4",
            question: "Can ArrivePath help me with legal and banking matters?",
            answer: "Yes. We assist with Anmeldung (registration), opening bank accounts, obtaining health insurance, and getting a SIM card. Our team ensures all paperwork is handled efficiently and correctly."
        },
        {
            id: "item-5",
            question: "Does ArrivePath help me find a job?",
            answer: "We provide access to part-time job opportunities, CV/resume support, and professional consulting. Our goal is to help you kickstart your career in Germany while balancing your studies or relocation priorities."
        },
        {
            id: "item-6",
            question: "Is there a community or support network?",
            answer: "Absolutely. ArrivePath connects you to student groups, local events, and community networks so you can build relationships, make friends, and feel at home quickly."
        },
        {
            id: "item-7",
            question: "How do I get started with ArrivePath?",
            answer: "Simply fill out our onboarding form. We’ll create a personalized plan with housing options, airport pickup, and a checklist to guide you. Once you arrive, our team will meet you and help you settle in smoothly."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto border  p-5 bg-white">
            <div className="border rounded-md p-5 bg-white flex flex-col">
                <h1 className="px-5 text-xl text-stone-600 font-semibold mb-2">Frequently Asked Questions</h1>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full px-5 "
                    defaultValue="item-1"
                >
                    {faqs.map(faq => (
                        <AccordionItem key={faq.id} value={faq.id}>
                            <AccordionTrigger className="font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance font-normal">
                                <p>{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
