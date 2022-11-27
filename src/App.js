import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import "./Body.css";

function App() {
    return (
        <Layout>
            <Switch>
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
            </Switch>
        </Layout>
    );
}

export default App;
