import { ReactNode } from "react";
import AccordionSection from "./components/AccordionSection";
import BottomSheetSection from "./components/BottomSheetSection";
import SelectionSection from "./components/SelectionSection";
import TabsSection from "./components/TabsSection";
import ToastSection from "./components/ToastSection";
import SliderSection from "./components/SliderSection";

export default function Home() {
  return (
    <div className="flex justify-center p-10 flex-col items-center space-y-32">
      <Section>
        <h3 className="font-semibold">Accordion</h3>
        <AccordionSection />
      </Section>

      <Section>
        <h3 className="font-semibold">Toast</h3>
        <ToastSection />
      </Section>

      <Section>
        <h3 className="font-semibold">Selection</h3>
        <SelectionSection />
      </Section>

      <Section>
        <h3 className="font-semibold">Tabs</h3>
        <TabsSection />
      </Section>

      <Section>
        <h3 className="font-semibold">Bottom Sheet</h3>
        <BottomSheetSection />
      </Section>

      <Section>
        <h3 className="font-semibold">Slider and Carousel</h3>
        <SliderSection />
      </Section>
    </div>
  );
}

const Section = ({ children }: { children: ReactNode }) => (
  <section className="space-y-3 w-full mt-5">{children}</section>
);
