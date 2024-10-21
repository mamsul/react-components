import { useState } from "react";
import Accordion, { AccordionItem } from "../components/molecules/Accordion";
import { useToast } from "../components/molecules/Toast/ToastService";
import SearchableSelectionMe from "../components/molecules/Selection/SearchableSelection";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

export default function Home() {
  const toast = useToast();

  const handleToastSuccess = () => toast.open("success", "Toast Success");
  const handleToastWarning = () => toast.open("warning", "Toast Warning");
  const handleToastError = () => toast.open("error", "Toast Error");
  const handleToastInfo = () => toast.open("info", "Toast Info");

  const [selectedSingle, setSelectedSingle] = useState<
    string | number | undefined
  >();
  const [selectedMultiple, setSelectedMultiple] = useState<(string | number)[]>(
    []
  );

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

      <section className="space-y-3 w-full mt-5">
        <h3>Toast</h3>

        <div className="flex flex-row space-x-2">
          <button className="btn btn-success" onClick={handleToastSuccess}>
            Toast Success
          </button>
          <button className="btn btn-warning" onClick={handleToastWarning}>
            Toast Warning
          </button>
          <button className="btn btn-danger" onClick={handleToastError}>
            Toast Error
          </button>
          <button className="btn btn-info" onClick={handleToastInfo}>
            Toast Info
          </button>
        </div>
      </section>

      <section className="space-y-3 w-full mt-5">
        <h3>Selection</h3>

        <div>
          <h4>Single</h4>
          <SearchableSelectionMe
            options={options}
            value={selectedSingle}
            onChange={(value) => setSelectedSingle(value as string | number)}
          />
        </div>
        <div>
          <h4>Multiple</h4>
          <SearchableSelectionMe
            multiple
            options={options}
            value={selectedMultiple}
            onChange={(value) =>
              setSelectedMultiple(value as (string | number)[])
            }
          />
        </div>
      </section>
    </div>
  );
}
