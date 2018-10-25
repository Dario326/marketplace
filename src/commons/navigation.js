import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import metisMenu from "metismenu";
import { LocalStorageHelper } from "../utilities";
export class Navigation extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            companyId: "",
            companyName: ""
        };
        this.updateCompany = this.updateCompany.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
    }

    static propTypes = {
        location: PropTypes.object.isRequired,
        userData: PropTypes.object,
        settingsData: PropTypes.object,
        companyId: PropTypes.string
    };

    componentDidMount() {
        const { menu } = this.refs;
        // TODO- Remove $
        // eslint-disable-next-line
        $(menu).metisMenu();
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }
    updateCompany(event) {
        const localStorageHelper = new LocalStorageHelper();
        const field = event.target.name;
        const companyId = event.target.value;
        const subcompanies = JSON.parse(localStorageHelper.load("subcompanies"));
        const companyName = subcompanies.filter(company => {
            //eslint-disable-next-line
            return company.companyId == companyId;
        });
        this.setState({ companyName: companyName[0] });
        this.setState({ companyId });
    }
    changeCompany(e) {
        const localstorageManager = new LocalStorageHelper();
        localStorage.removeItem("companyId");
        localStorage.removeItem("company");
        localstorageManager.store("companyId", this.state.companyId);
        localstorageManager.store("company", this.state.companyName.companyName);
        this.forceUpdate();
        window.location.replace("/");
    }

    render() {
        const localStorageHelper = new LocalStorageHelper();
        const userName = localStorageHelper.load("user");
        const companyName = localStorageHelper.load("company");
        let subcompanies = localStorageHelper.load("subcompanies");
        subcompanies ? subcompanies = JSON.parse(subcompanies).sort((a,b) => {
            let companyA = a.companyName.toLowerCase();
            let companyB = b.companyName.toLowerCase();
            return (companyA < companyB) ? -1 : (companyA > companyB) ? 1 : 0;
        }) : [];
        const { userData, settingsData } = this.props;
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                        </span>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{userName}</strong>
                            </span> <span style={{ color: "white" }} className="text-muted text-xs block">{companyName}</span> </span> </a>
                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="#"> Logout</a></li>
                        </ul>
                        </div>
                        <div className="logo-element">
                            MarketPlace
                        </div>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-credit-card-alt"/> <span className="nav-label">Marketplace</span></Link>
                    </li>
                    <li className={this.activeRoute("/listItem")}>
                        <Link to="/listItem"><i className="fa fa-th-large"/> <span className="nav-label">List Item</span></Link>
                    </li>
                    <li className={this.activeRoute("/settings")}>
                        <Link to="/settings"><i className="fa fa-th-large"/> <span className="nav-label">settings</span></Link>
                    </li>
                </ul>

            </nav>
        );
    }
}
Navigation.contextTypes = {
    router: PropTypes.object
};