import { FC, PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "light";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);


  const memoTheme = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={memoTheme}>{children}</ThemeContext.Provider>
  );
};
