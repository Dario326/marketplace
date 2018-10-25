import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MarketplaceList } from "./marketplace-list";

export class Marketplace extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            marketplace: Object.assign({}, props.marketplace),
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.marketplace.id !== nextProps.marketplace.id) {
            this.setState({ marketplace: Object.assign({}, nextProps.marketplace) });
        }
    }
    render() {
        const { marketplace } = this.props;
        const page = marketplace ? marketplace.map(marketplaceTemplate =>
            <MarketplaceList key={marketplaceTemplate.id} marketplaceTemplate={marketplaceTemplate}/>
        ) : <div className="middle-box text-center animated fadeInDown"> <h2>Marketplace is Unavailable</h2> <h3>Please Try again Later</h3> </div>;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>MarketPlace</h2>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">
                                <a>Marketplace</a>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        {page}
                    </div>

                </div>
            </div>
        );
    }
}

Marketplace.propTypes = {
    marketplace: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};