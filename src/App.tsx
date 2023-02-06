import { Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { Link } from "react-router-dom";
import MainAsync from "./pages/MainPage/Main.async";
import AboutAsync from "./pages/AboutPage/About.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/ClassNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
