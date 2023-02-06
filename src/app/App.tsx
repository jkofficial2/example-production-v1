import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.css";
import { useTheme } from "./provider/theme";
import { Main } from "pages/MainPage";
import { About } from "pages/AboutPage";
import { classNames } from "shared/lib/ClassNames/ClassNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
