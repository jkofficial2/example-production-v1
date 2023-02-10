import { useTheme } from "./provider/theme";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets";
import "./styles/index.css";
import { Sidebar } from "widgets/Sidebar/ui";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
      <AppRouter />
      </div>
    </div>
  );
}
