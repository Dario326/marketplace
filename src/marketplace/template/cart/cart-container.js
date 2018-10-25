import { connect } from "react-redux";
import { Cart as CartView } from "./cart";


function mapStateToProps(state) {
    return {
        item: state.item
    };
}

const mapDispatchToProps = () => null;

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView);