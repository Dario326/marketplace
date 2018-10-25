import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CartList = ({ item }) => {
    return (
        <table className="table shoping-cart-table">
            <tbody>
                <tr>
                    <td width="90">
                        <div className="cart-product-imitation">
                            <img src={item.image} height={75} alt="item"/>
                        </div>
                    </td>
                    <td className="desc">
                        <h3>
                            <a href="#" className="text-navy">
                                {item.title}
                            </a>
                        </h3>
                        <p className="small">
                            {item.description}
                        </p>
                        <dl className="small m-b-none">
                            <dt>Description lists</dt>
                            <dd>A description list is perfect for defining terms.</dd>
                        </dl>
                        <div className="m-t-sm">
                            <a href="#" className="text-muted"><i className="fa fa-trash"/> Remove item</a>
                        </div>
                    </td>
                    <td>
                        ${item.price}
                    </td>
                    <td width="65">
                        <input type="text" className="form-control" placeholder="1"/>
                    </td>
                    <td>
                        <h4>
                            ${item.price}
                        </h4>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

CartList.propTypes = {
    item: PropTypes.object.isRequired
};