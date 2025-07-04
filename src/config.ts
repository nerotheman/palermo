import { useLocale } from "next-intl";
import { Pathnames } from "next-intl/navigation";

export const locales = ["sv", "en"] as const;

export const useGetLocale = () => {
  const locale = useLocale();

  return locale as "en" | "sv";
};

export const pathnames = {
  "/studio": "/studio",
  "/": "/",
  "/menu": {
    en: "/menu",
    sv: "/meny",
  },
  // Simplified since the path is the same for all locales
  "/lunch": "/lunch",
} satisfies Pathnames<typeof locales>;

export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;
