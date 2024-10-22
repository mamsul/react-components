import AccordionSection from "./components/AccordionSection";
import SelectionSection from "./components/SelectionSection";
import TabsSection from "./components/TabsSection";
import ToastSection from "./components/ToastSection";

export default function Home() {
  return (
    <div className="flex justify-center p-10 flex-col items-center">
      <section className="space-y-3 w-full">
        <h3 className="font-semibold">Accordion</h3>
        <AccordionSection />
      </section>

      <section className="space-y-3 w-full mt-5">
        <h3 className="font-semibold">Toast</h3>
        <ToastSection />
      </section>

      <section className="space-y-3 w-full mt-5">
        <h3 className="font-semibold">Selection</h3>
        <SelectionSection />
      </section>

      <section className="space-y-3 w-full mt-5">
        <h3 className="font-semibold">Tabs</h3>
        <TabsSection />
      </section>
    </div>
  );
}
