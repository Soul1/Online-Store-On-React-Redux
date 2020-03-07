import {connect} from "react-redux";
import Book from "../components/BookCard";
import {addToCart, removeFromCart} from "../actions/cart";


const mapStateToProps = ({cart}, {id}) => ({
  addedCount: cart.items.reduce(
    (count, book) => count + (book.id === id ? 1 : 0),
    0,
  ),
});

export default connect(mapStateToProps, {addToCart, removeFromCart})(Book);