import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
