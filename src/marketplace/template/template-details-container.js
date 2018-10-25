import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { TemplateDetails as TemplateDetailsView } from "./template-details";
import * as selectors from "./selectors";

function mapStateToProps(state, ownProps) {
    const marketplaceTemplateId = ownProps.match.params.id;
    // TODO: Initialize using reducer
    let marketplaceTemplate = { id: "", title: "", price: "", category: "", description: "" };
    if (marketplaceTemplateId && state.marketplace.length > 0) {
        marketplaceTemplate = selectors.getMarketplaceTemplateById(state.marketplace, marketplaceTemplateId);
    }

    return {
        marketplaceTemplate
    };
}

const mapDispatchToProps = () => null;

export const TemplateDetails = connect(mapStateToProps, mapDispatchToProps)(TemplateDetailsView);