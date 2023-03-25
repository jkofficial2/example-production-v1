import { useTheme } from "./providers/theme";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar/ui";
import { Sidebar } from "widgets/Sidebar/ui";
import { Suspense, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserMounted, userActions } from "entities/User";
import { useSelector } from "react-redux";

export default function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames("app", [theme], {})}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page" data-testid="Navbar">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
