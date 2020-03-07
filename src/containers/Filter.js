import {connect} from "react-redux";
import Filter from "../components/Filter";
import {setFilter, setSearchQuery} from "../actions/filter";


const mapStateToProps = ({books}) => ({
  filterBy: books.filterBy,
  searchQuery: books.searchQuery,
});

export default connect(mapStateToProps, {setFilter, setSearchQuery}) (Filter);