import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { Footer } from "../components/Footer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Main />
            <Footer />
        </React.Fragment>
    );
};



