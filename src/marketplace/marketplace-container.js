import { Marketplace as MarketplaceView } from "./marketplace";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as marketplaceActions from "./actions";

function mapStateToProps(state) {
    return {
        marketplace: state.marketplace
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(marketplaceActions, dispatch)
    };
}

export const Marketplace = connect(mapStateToProps, mapDispatchToProps)(MarketplaceView);