interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string | null;
  onValueChange?: (value: string | null) => void;
}

interface IAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string | null;
  labelText?: string;
  customPanel?: ReactNode;
}

interface IAccordionContext {
  selected: string | null;
  setSelected: (value: string | null) => void;
}
