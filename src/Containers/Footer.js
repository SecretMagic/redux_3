import React, {Component} from "react";
import {connect} from "react-redux";
import FilterLink from "../Components/FilterLink.js";

class Footer extends Component{
    render () {

        // let {clickChange, filterText} = this.props;
        return(
            <div>
                <FilterLink filterText="SHOW_ALL"></FilterLink>
                <FilterLink filterText="SHOW_COMPLETED"></FilterLink>
                <FilterLink filterText="SHOW_ACTIVE"></FilterLink>
            </div>        
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         filterText: state.filterText
//     }
// }

// const mapDispatchToProps = (Dispatch) => {
//     return {
//         clickChange: (text) => {
//             Dispatch(createFilterAction(text))
//         }
//     }
// } 

export default connect(null, null) (Footer);