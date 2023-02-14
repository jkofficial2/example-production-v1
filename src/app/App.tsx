import { useTheme } from "./provider/theme";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets";
import "./styles/index.css";
import { Sidebar } from "widgets/Sidebar/ui";
import { Suspense } from "react";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Suspense fallback="...Loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
