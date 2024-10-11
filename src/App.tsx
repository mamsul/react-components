import Accordion, { AccordionItem } from "./components/molecules/Accordion";

function App() {
  return (
    <div className="flex justify-center p-10 flex-col items-center">
      <section className="space-y-3 w-full">
        <h3>Accordion</h3>

        <Accordion value="accordion1" className="border max-w-sm">
          <AccordionItem value="1">Konten accordio 1</AccordionItem>
          <AccordionItem value="2" labelText="Accordion Item 2">
            Konten accordio 2
          </AccordionItem>
          <AccordionItem value="3" labelText="Accordion Item 3">
            Konten accordio 3
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export default App;
