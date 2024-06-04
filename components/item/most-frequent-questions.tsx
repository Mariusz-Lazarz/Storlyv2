import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    id: "item-1",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused and undamaged products. Returns are subject to a restocking fee of 10%.",
  },
  {
    id: "item-2",
    question: "How can I initiate a return or exchange?",
    answer:
      "To initiate a return or exchange, please contact our customer service team with your order number and reason for return/exchange.",
  },
  {
    id: "item-3",
    question: "How long does shipping take?",
    answer:
      "Our standard shipping usually takes 3-5 business days, while expedited shipping takes 1-2 business days.",
  },
];

const MostFrequentQuestions = () => {
  return (
    <Accordion type="single" collapsible className="w-full ">
      {questions.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger className="text-md">{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MostFrequentQuestions;
