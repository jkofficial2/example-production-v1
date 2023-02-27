import { useTheme } from "./providers/theme";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar/ui";
import { Sidebar } from "widgets/Sidebar/ui";
import { Suspense } from "react";

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", [theme], {})}>
            <Suspense fallback="...Loading">
                <Navbar />
                <div className="content-page" data-testid="Navbar">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
