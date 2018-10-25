import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class TemplateDetails extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            marketplaceTemplate: Object.assign({}, props.marketplaceTemplate),
            errors: {}
        };
        this.goToCart = this.goToCart.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.marketplaceTemplate.id !== nextProps.marketplaceTemplate.id) {
            this.setState({ marketplaceTemplate: Object.assign({}, nextProps.marketplaceTemplate) });
        }
    }

    goToCart() {
        let marketplaceTemplate = this.props.marketplaceTemplate;
        let cart = sessionStorage.getItem("cart");
        if (cart) {
            sessionStorage.clear();
            cart = JSON.parse(cart);
            cart.push(marketplaceTemplate);
            let jsonStr = JSON.stringify(cart);
            sessionStorage.setItem("cart", jsonStr);
        } else {
            cart = [];
            cart.push(marketplaceTemplate);

            let jsonStr = JSON.stringify(cart);
            sessionStorage.setItem("cart", jsonStr);
        }
        this.context.router.history.push("/cart/" + marketplaceTemplate.id);
    }

    render() {
        const { marketplaceTemplate } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>Template detail</h2>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a>Marketplace</a>
                            </li>
                            <li className="active">
                                <strong>Template detail</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>


                <div className="wrapper wrapper-content animated fadeInRight">

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="ibox product-detail">
                                <div className="ibox-content">

                                    <div className="row">
                                        <div className="col-md-5">


                                            <div className="product-images">
                                                <div>
                                                    <img className="img-responsive" src={ marketplaceTemplate.image } height="auto" width="600" alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-7">

                                            <h2 className="font-bold m-b-xs">
                                                {marketplaceTemplate.title}
                                            </h2>
                                            <small>Many desktop publishing packages and web page editors now.</small>
                                            <div className="m-t-md">
                                                <h2 className="product-main-price">${marketplaceTemplate.price} <small className="text-muted">Exclude Tax</small> </h2>
                                            </div>
                                            <hr/>

                                            <h4>Product description</h4>

                                            <div className="small text-muted">
                                                {marketplaceTemplate.description}

                                            </div>
                                            <dl className="small m-t-md">
                                                <dt>Author</dt>
                                                <dd>{marketplaceTemplate.author}</dd>

                                            </dl>
                                            <hr/>

                                            <div>
                                                <div className="btn-group">
                                                    <button className="btn btn-primary btn-sm" onClick={this.goToCart}><i className="fa fa-cart-plus"/> Add to cart</button>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

TemplateDetails.propTypes = {
    marketplaceTemplate: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
TemplateDetails.contextTypes = {
    router: PropTypes.object
};
