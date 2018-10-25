import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartList } from "./cart-list";


export class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cart.id !== nextProps.cart.id) {
            this.setState({ cart: Object.assign({}, nextProps.cart) });
        }
    }
    render() {
        let cart = sessionStorage.getItem("cart");
        cart = JSON.parse(cart);
        const itemsInCart = cart ? cart.length : 0;
        let totalPrice = cart ? cart[0].price : 0;
        if (cart && cart.length > 1) {
            for (let i = 1; i < cart.length; i++) {
                totalPrice = totalPrice + cart[i].price;
            }
        }
        const page = cart ? cart.map(item => (
            <CartList key={item.id} item={item}/>
        )) : "There is nothing in your cart";
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
                                <Link to="/">Marketplace</Link>
                            </li>
                            <li className="active">
                                <strong>Cart</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">

                    <div className="row">
                        <div className="col-md-9">

                            <div className="ibox">
                                <div className="ibox-title">
                                    <span className="pull-right">(<strong>{itemsInCart}</strong>) items</span>
                                    <h5>Items in your cart</h5>
                                </div>
                                <div className="ibox-content" >
                                    <div className="table-responsive">
                                        {page}
                                    </div>
                                </div>
                                <div className="ibox-content">

                                    <button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart"/> Checkout</button>
                                    <Link className="btn btn-white" to={"/marketplace"}><i className="fa fa-arrow-left"/> Continue shopping</Link>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">

                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Cart Summary</h5>
                                </div>
                                <div className="ibox-content">
                                    <span>
                                    Total
                                    </span>
                                    <h2 className="font-bold">
                                        ${totalPrice}
                                    </h2>

                                    <hr/>
                                    <span className="text-muted small">
                                    *Applicable sales tax will be applied
                                    </span>
                                    <div className="m-t-sm">
                                        <div className="btn-group">
                                            <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"/> Checkout</a>
                                            <a href="#" className="btn btn-white btn-sm"> Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Support</h5>
                                </div>
                                <div className="ibox-content text-center">

                                    <h2>Konnektive</h2>

                                    <h3><i className="fa fa-phone"/>1-800-270-8701</h3>
                                    <span className="small">
                                    Please contact with us if you have any questions. We are available 24h.
                                    </span>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired
};


