import { useState } from "react";
import SearchableSelection from "../../components/molecules/Selection/SearchableSelection";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

export default function SelectionSection() {
  const [selectedSingle, setSelectedSingle] = useState<
    string | number | undefined
  >();
  const [selectedMultiple, setSelectedMultiple] = useState<(string | number)[]>(
    []
  );

  return (
    <>
      <div className="pl-2.5">
        <h4>Single</h4>
        <SearchableSelection
          options={options}
          value={selectedSingle}
          onChange={(value) => setSelectedSingle(value as string | number)}
        />
      </div>
      <div className="pl-2.5">
        <h4>Multiple</h4>
        <SearchableSelection
          multiple
          options={options}
          value={selectedMultiple}
          onChange={(value) =>
            setSelectedMultiple(value as (string | number)[])
          }
        />
      </div>
    </>
  );
}
