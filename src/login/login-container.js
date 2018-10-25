import { Login as LoginPage } from "./login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../login/actions";
import { getUserData, getSettingsData } from "./selectors";

const mapStateToProps = (state) => {
    return {
        isLoading: state.LOGIN.isLoading,
        isAuthentcated: state.LOGIN.isAuthentcated,
        isLoginError: state.LOGIN.isLoginError,
        userData: getUserData(state),
        settingsData: getSettingsData(state)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);