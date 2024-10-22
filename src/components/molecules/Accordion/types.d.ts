import { HTMLAttributes, ReactNode } from "react";

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string | null;
  onValueChange?: (value: string | null) => void;
}

export interface IAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string | null;
  labelText?: string;
  customPanel?: ReactNode;
}

export interface IAccordionContext {
  selected: string | null;
  setSelected: (value: string | null) => void;
}
