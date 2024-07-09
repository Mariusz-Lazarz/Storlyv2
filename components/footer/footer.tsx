import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerSections = [
  {
    title: "Help",
    items: [
      "Get Help",
      "FAQ",
      "Shipping",
      "Returns",
      "Order Status",
      "Payment Options",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "Press",
      "Investors",
      "Sustainability",
      "Affiliate Program",
    ],
  },
  {
    title: "Support",
    items: [
      "Contact Us",
      "Live Chat",
      "Technical Support",
      "Community",
      "Documentation",
    ],
  },
  {
    title: "Legal",
    items: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Accessibility",
      "Trademark",
    ],
  },
  {
    title: "Social",
    items: [
      "Facebook",
      "Twitter",
      "Instagram",
      "LinkedIn",
      "YouTube",
      "Pinterest",
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gray-600 my-4"></div>
      <div className="hidden md:flex flex-row justify-between p-4">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-8">
            <span className="font-bold">{section.title}</span>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="font-bold opacity-70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {footerSections.map((section, index) => (
        <Accordion type="multiple" key={index} className="block md:hidden">
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="font-bold p-4">
              {section.title}
            </AccordionTrigger>
            {section.items.map((item, idx) => (
              <AccordionContent key={idx} className="p-4">
                {item}
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
      <div className="text-center font-bold mt-10">
        © 2024 Mariusz Łazarz All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
