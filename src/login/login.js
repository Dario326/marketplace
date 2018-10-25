import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./styles.css";

export class Login extends React.Component {
    static propTypes = {
        actions: PropTypes.object,
        isLoading: PropTypes.bool,
        isAuthentcated: PropTypes.bool,
        isLoginError: PropTypes.bool,
        history: PropTypes.object,
        userData: PropTypes.object,
        settingsData: PropTypes.object
    }
    constructor(props,context) {
        super(props,context);
        this.state = {
            userName: "",
            passWord: "",
            isShowlogin: false,
        };
        this.userNameCheck = this.userNameCheck.bind(this);
        this.passwordCheck = this.passwordCheck.bind(this);
    }
    componentWillReceiveProps() {
        if (this.props.isAuthentcated && !this.props.isLoginError) this.props.history.push("/");
    }
    userNameCheck = (event) => {
        this.setState({ userName: event.target.value },this.showLogin);
    }
    passwordCheck = (event) => {
        this.setState({ passWord: event.target.value },this.showLogin);
    }
    showLogin = () => {
        const { userName, passWord } = this.state;
        if (userName.length > 0 && passWord.length > 0) this.setState({ isShowlogin: true });
        else this.setState({ isShowlogin: false });
    }
    render() {
        let { userName, passWord } = this.state;
        let { isLoading, isLoginError } = this.props;
        const loginBtn = this.state.isShowlogin ? "form-group loginBtn active" : "form-group loginBtn";
        return (
            <div className="text-center login-container animated fadeInDown border-size-md ">
                <div className="login-screen gray-bg p-m b-r-xl">
                    <div className="text-center p-xs border-size-xs login-logo">
                        {/*<img className="img-responsive" style={{ marginLeft: "50px" }} src={require("../img/GTpay.png")} alt=""/>*/}
                    </div>
                    <div className="p-m">
                        <h3>Welcome to the Marketplace</h3>
                        <p>Please enter your username and password to log in.</p>
                        <div className="m-t relative">
                            { isLoading && <div className="alert alert-info loginLoader"><i class="fa fa-spinner fa-pulse fa-lg m-r-xs"/> Please wait...</div> }
                            {/* { isAuthentcated && <div className="alert alert-success"><i class="fa fa-check m-r-xs fa-lg"/> Successfully logging in</div>} */}
                            { isLoginError && <div className="alert alert-danger"><i class="fa fa-close m-r-xs fa-lg"/> Please enter valid Username / Password</div> }
                            <div className="form-group">
                                <input type="text" onChange={this.userNameCheck} className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={this.passwordCheck} className="form-control" placeholder="Password"/>
                            </div>
                            <div className={loginBtn}>
                                <button type="submit" className="dim btn btn-primary block full-width m-b" onClick={() => this.props.actions.login(userName,passWord)}>Login</button>
                            </div>
                            <div className="form-group text-right">
                                <NavLink className=" forgotPassword" to="forgot_password"><small>Forgot password?</small></NavLink>
                            </div>
                            <div className="form-group text-right">
                                <NavLink className=" forgotPassword" to="forgot_password"><small>Sign Up</small></NavLink>
                            </div>
                        </div>

                        <p className="m-t"> <small>Marketplace &copy; 2018</small> </p>

                    </div>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object
};