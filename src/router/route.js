import React ,{ Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// TODO: Import these in alphabetical order
// Change to module import instead of default
import { App } from "./../App";
import { My404Component } from "./../commons/my404component";
import { Login } from "./../login";
import { Marketplace } from "../marketplace/index";
//import { WebBuilder } from "./../web-builder";
import { AppLayoutRoute } from "./../wrapper/layout-route";
import "./../App.css";

// Todo - Create a web-builder folder at the root
// subfolder is preset -> grapejs preset content
// web-builder.js -> which should contain the code to invoke grapejs

export const AppRouter = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <App>
                    <Switch>
                        <Route path="/login" component={({ history }) => <Login history={history} />} />
                        <AppLayoutRoute exact path="/marketplace" component={Marketplace}/>
                        <AppLayoutRoute path="/" component={Marketplace} />
                        <AppLayoutRoute path="/404" component={({ history }) => <My404Component history={history} />} />
                        {/*<Route path="/webbuilder" component={({ history }) => <WebBuilder history={history} />} />*/}
                    </Switch>
                </App>
            </Fragment>
        </Router>
    </Provider>
);

AppRouter.propTypes = {
    store: PropTypes.object.isRequired
};