import {connect} from "react-redux";
import Filter from "../components/Filter";
import {setFilter, setSearchQuery} from "../actions/filter";


const mapStateToProps = ({filter}) => ({
  filterBy: filter.filterBy,
});

export default connect
(mapStateToProps,
  {setFilter, setSearchQuery})
(Filter);