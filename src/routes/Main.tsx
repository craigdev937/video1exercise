import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Pricing } from "../pages/Pricing";
import { Training } from "../pages/Training";
import { Contact } from "../pages/Contact";

let ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {path: "/", element: <Home />},
            {path: "/pricing", element: <Pricing />},
            {path: "/training", element: <Training />},
            {path: "/contact", element: <Contact />}
        ]
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


