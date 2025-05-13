import { ReactNode, useEffect } from 'react';
import AccordionSection from './components/AccordionSection';
import BottomSheetSection from './components/BottomSheetSection';
import SelectionSection from './components/SelectionSection';
import TabsSection from './components/TabsSection';
import ToastSection from './components/ToastSection';
import SliderSection from './components/SliderSection';
import Dropdown from '../components/molecules/Dropdown';
import ReactGA from 'react-ga4';
import RichEditor from './components/rich-editor';

export default function Home() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/home' });
  }, []);

  return (
    <div className="flex justify-center px-10 pt-5 pb-40 flex-col items-center space-y-32">
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

      <Section>
        <h3 className="font-semibold">Dropdown</h3>
        <div className="h-[100px] w-full shadow-lg p-5">
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={() => {}}
          />
        </div>
      </Section>

      <Section>
        <h3 className="font-semibold">Rich Editor Tiptap</h3>
        <RichEditor />
      </Section>
    </div>
  );
}

const Section = ({ children }: { children: ReactNode }) => (
  <section className="space-y-3 w-full mt-5">{children}</section>
);
