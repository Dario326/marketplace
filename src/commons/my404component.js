import React from "react";
import "../styles/errors.css";

export const My404Component = () => {
    return (
        <div className="errorPage">
            <div className="errorContainer">
                {/*<img className="img-responsive center-block errorImg" style={{ height: 50 }} src={)} alt=""/>*/}
                <span className="errorNo text-muted">404</span>
                <span className="errorContent text-muted">page not found</span>
            </div>
        </div>
    );
};