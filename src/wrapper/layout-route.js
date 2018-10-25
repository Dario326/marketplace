import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Route } from "react-router";
import { AppLayoutView } from "./../layout/app-layout";


const AppLayout = withRouter(AppLayoutView);

export const AppLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AppLayout history = {matchProps.history}>
                <Component {...matchProps} />
            </AppLayout>
        )} />
    );
};

AppLayoutRoute.propTypes = {
    component: PropTypes.func
};