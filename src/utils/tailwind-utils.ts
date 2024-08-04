import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classname(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}
