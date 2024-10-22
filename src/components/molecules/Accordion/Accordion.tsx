import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { IAccordionContext, IAccordionItemProps, IAccordionProps } from "./types";

const AccordionContext = createContext<IAccordionContext>({
  selected: null,
  setSelected: () => {},
});

const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  ({ children, onValueChange, value, ...props }, ref) => {
    const [selected, setSelected] = useState<string | null>(value || null);

    useEffect(() => {
      onValueChange?.(selected);
    }, [onValueChange, selected]);

    return (
      <div ref={ref} className="w-full" {...props}>
        <AccordionContext.Provider value={{ selected, setSelected }}>
          {children}
        </AccordionContext.Provider>
      </div>
    );
  }
);

const AccordionItem = forwardRef<HTMLDivElement, IAccordionItemProps>(
  ({ children, value, labelText, customPanel, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { selected, setSelected } = useContext(AccordionContext);
    const isOpen = selected === value;

    return (
      <div ref={ref} className={clsx("w-full")} {...props}>
        {/* ---------- PANEL ---------- */}
        {customPanel ? (
          <div onClick={() => setSelected(isOpen ? null : value)}>
            {customPanel}
          </div>
        ) : (
          <DefaultPanel value={value} labelText={labelText} />
        )}

        {/* ---------- CONTENT ---------- */}
        <div
          className={clsx("overflow-y-hidden transition-all")}
          style={{ height: isOpen ? contentRef.current?.offsetHeight || 0 : 0 }}
        >
          <div ref={contentRef} className="px-4 py-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

const DefaultPanel = ({
  labelText,
  value,
}: Pick<IAccordionItemProps, "labelText" | "value">) => {
  const { selected, setSelected } = useContext(AccordionContext);
  const isOpen = selected === value;

  return (
    <button
      className="px-4 py-2 bg-blue-950 text-white flex justify-between items-center w-full"
      onClick={() => setSelected(isOpen ? null : value)}
    >
      <span>{labelText || "-"}</span>
      <CaretDownIcon
        className={clsx("h-4 w-4 transition-transform", {
          "rotate-180": isOpen,
        })}
      />
    </button>
  );
};

Accordion.displayName = "Accordion";
export default Accordion;

AccordionItem.displayName = "AccordionItem";
export { AccordionItem };
