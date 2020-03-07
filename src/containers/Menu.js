import {connect} from "react-redux";
import Menu from "../components/Menu";
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({cart}) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id)
});

export default connect
(mapStateToProps)
(Menu);