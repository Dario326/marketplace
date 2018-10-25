import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserData, getAuthenticated, getSettingsData } from "./login/selectors";
import { LocalStorageHelper } from "./utilities";
import "./App.css";

export class AppView extends Component {

    static propTypes = {
        children: PropTypes.array.isRequired,
        history: PropTypes.object,
        actions: PropTypes.object,
        userData: PropTypes.object,
        SettingsData: PropTypes.object,
        active: PropTypes.bool,
        isAuthentcated: PropTypes.bool
    };
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        const localstorageManager = new LocalStorageHelper();
        const accessToken = localstorageManager.load(LocalStorageHelper.keys.ACCESS_TOKEN);
        const expireIn = localstorageManager.load(LocalStorageHelper.keys.EXPIRE_IN);
        const tokenType = localstorageManager.load(LocalStorageHelper.keys.TOKEN_TYPE);
        if (!accessToken && !expireIn && !tokenType) {
            this.props.history.push("/login");
        }
    }

    componentWillReceiveProps(nextProps) {
        const localstorageManager = new LocalStorageHelper();
        const accessToken = localstorageManager.load(LocalStorageHelper.keys.ACCESS_TOKEN);
        if (accessToken && !this.props.isAuthentcated && nextProps.isAuthentcated && !nextProps.userData.active) {
            this.props.history.push("/signup");
        }
    }
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userData: getUserData(state),
        settingsData: getSettingsData(state),
        isAuthentcated: getAuthenticated(state)
    };
}

export const App = withRouter(connect(mapStateToProps)(AppView));
