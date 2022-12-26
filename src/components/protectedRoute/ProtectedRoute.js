import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-store";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
    const { isLogged } = useContext(AuthContext);

    if (isLogged) {
        return <Route path={props.path}>{props.children}</Route>;
    } else {
        return <Redirect to="/login" />;
    }
}

export default ProtectedRoute;
