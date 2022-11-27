import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import styles from "./App.module.sass";
import "./Body.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className={styles["main-container"]}>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
