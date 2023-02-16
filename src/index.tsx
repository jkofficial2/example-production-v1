import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/provider/theme/ui/ThemeProvider";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/provider/ErrorBoundary";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
