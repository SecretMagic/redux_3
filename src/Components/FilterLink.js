import React, {Component} from "react";
import {Link} from "react-router"

class FilterLink extends Component {
    render () {
        return(
            <Link activeStyle={{
                textDecoration: "none",
                color: "#000"                
            }} to={this.props.filterText == "SHOW_ALL" ? "/" : this.props.filterText}>{this.props.filterText}</Link>
        )
    }
}

/*class FilterLink extends Component{
    render() {
        let {selfFilterText, currentFilterText, clickChange} = this.props;
        return(
            selfFilterText == currentFilterText ? <span>{selfFilterText}</span> : <a href="#" onClick={() => {
                clickChange(selfFilterText)        
            }}>{selfFilterText}</a>
        )
    }
}*/

export default FilterLink;