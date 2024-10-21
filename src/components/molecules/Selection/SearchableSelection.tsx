import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  placeholder?: string;
  multiple?: boolean;
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[] | undefined) => void;
}

export default function SearchableSelection({
  options,
  placeholder = "Pilih Opsi...",
  multiple = false,
  value,
  onChange,
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [placeValue, setPlaceValue] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setIsSearch(false);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setPlaceValue(placeholder);
    if (value !== undefined) {
      setSelectedValues(
        multiple ? (value as (string | number)[]) : [value as string | number]
      );
    }
  }, [value, multiple, placeholder]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  const handleOptionClick = useCallback(
    (optionValue: string | number) => {
      if (multiple) {
        let updatedValues = [...selectedValues];
        if (updatedValues.includes(optionValue)) {
          updatedValues = updatedValues.filter((v) => v !== optionValue);
        } else {
          updatedValues.push(optionValue);
        }
        setSelectedValues(updatedValues);
        onChange?.(updatedValues);
      } else {
        setSelectedValues([optionValue]);
        onChange?.(optionValue);
        setIsSearch(false);
        if (!multiple) {
          setIsDropdownOpen(false);
        }
      }
    },
    [multiple, onChange, selectedValues]
  );

  const displayValue = options.find(
    (opt) => opt.value === selectedValues[0]
  )?.label;

  return (
    <div ref={dropdownRef} className="relative w-64">
      <input
        placeholder={multiple ? placeholder : placeValue}
        type="text"
        className="w-full h-10 outline-none rounded px-2 border border-gray-300 focus:border-gray-500"
        onClick={() => setIsDropdownOpen(true)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownOpen(true);
        }}
        onKeyDown={(e) => {
          if (!multiple && e.key) {
            setIsSearch(true);
            setPlaceValue((displayValue as string) || "");
          }
        }}
        value={
          multiple ? searchTerm : (!isSearch && displayValue) || searchTerm
        }
      />

      {isDropdownOpen && (
        <div className="absolute left-0 right-0 mt-1 border border-gray-300 rounded-md bg-white z-[99999] max-h-60 overflow-y-auto">
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-blue-100 flex items-center ${
                  selectedValues.includes(option.value) ? "bg-blue-100" : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {multiple && (
                  <input
                    type="checkbox"
                    readOnly
                    checked={selectedValues.includes(option.value)}
                  />
                )}
                {option.label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
