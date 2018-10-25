import React from "react";
import { smoothlyMenu } from "./helpers";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class TopHeader extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        isLoading: PropTypes.object,
        isAuthentcated: PropTypes.object,
        isLoginError: PropTypes.object,
        logout: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }
    toggleNavigation = (e) => {
        e.preventDefault();
        // TODO- Remove $
        // eslint-disable-next-line
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    };

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"/></a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <Link to="/" onClick= { this.props.logout}>
                                <i className="fa fa-sign-out"/> Log out
                            </Link>
                        </li>
                    </ul>
                    <div className="text-center">
                        {/*<img className="img-responsive center-block" style={{ height: 50 }} src={require("../img/GTpay.png")} alt=""/>*/}
                    </div>
                </nav>
            </div>
        );
    }
}