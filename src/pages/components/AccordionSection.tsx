import Accordion, { AccordionItem } from "../../components/molecules/Accordion";

export default function AccordionSection() {
  return (
    <div className="pl-2.5">
      <Accordion value="accordion1" className="border max-w-sm">
        <AccordionItem value="1">Konten accordio 1</AccordionItem>
        <AccordionItem value="2" labelText="Accordion Item 2">
          Konten accordio 2
        </AccordionItem>
        <AccordionItem value="3" labelText="Accordion Item 3">
          Konten accordio 3
        </AccordionItem>
      </Accordion>
    </div>
  );
}
