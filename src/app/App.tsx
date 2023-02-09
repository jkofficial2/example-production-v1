import { useTheme } from "./provider/theme";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/ui";
import "./styles/index.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Navbar />
      <button onClick={toggleTheme}>Switch theme</button>
      <AppRouter />
    </div>
  );
}
