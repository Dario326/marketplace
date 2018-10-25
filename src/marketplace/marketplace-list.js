import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const MarketplaceList = ({ marketplaceTemplate }) => {
    return (
        <div className="col-md-3">
            <div className="ibox">

                <div className="ibox-content product-box">
                    <div>
                        <img className="img-responsive" src={marketplaceTemplate.image} alt="" height="300" width="auto"/>
                    </div>
                    <div className="product-desc">
                        <span className="product-price">
                            ${marketplaceTemplate.price}
                        </span>
                        <small className="text-muted">Category: {marketplaceTemplate.category}</small>
                        <Link to={"/marketplace/" + marketplaceTemplate.id} className="product-name"> {marketplaceTemplate.title}</Link>



                        <div className="small m-t-xs">
                            Many desktop publishing packages and web page editors now.
                        </div>
                        <div className="m-t text-righ">

                            <Link to={"marketplace/" + marketplaceTemplate.id} className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"/> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MarketplaceList.propTypes = {
    marketplaceTemplate: PropTypes.object.isRequired
};