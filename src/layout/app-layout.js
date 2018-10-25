import React from "react";
import { Progress, Navigation, TopHeader, Footer } from "./../commons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../login/actions";
import { getUserData, getSettingsData } from "../login/selectors";

const AppLayout = ({ children, location, history, logout, userData, settingsData }) => {
    let wrapperClass = "gray-bg " + location.pathname;
    const userLogout = (e) => {
        e.preventDefault();
        logout();
        localStorage.clear();
        history.push("/login");
    };
    return (
        <div id="wrapper">
            <Progress />
            <Navigation userData={userData} settingsData={settingsData} location={location}/>
            <div id="page-wrapper" className={wrapperClass}>
                <TopHeader logout = {userLogout}/>
                {children}
                <Footer />
            </div>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.array.isRequired,
    location: PropTypes.object,
    history: PropTypes.object,
    logout: PropTypes.func,
    userData: PropTypes.object,
    settingsData: PropTypes.object
};
function mapStateToProps(state) {
    return {
        userData: getUserData(state),
        settingsData: getSettingsData(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        logout: () => dispatch(actions.logout())
    };
}

export const AppLayoutView = connect(mapStateToProps, mapDispatchToProps)(AppLayout);
