import React, { Component } from "react";
import {Provider} from "react-redux";
import App from "./App.js";
import {Router, Route, hashHistory} from "react-router";

class Root extends Component {
    render () {
        console.log(this.props)
        return(
            <Provider store={this.props.store}>
                <Router history={hashHistory}>
                    <Route path="/(:filterText)" component={App}></Route>
                </Router>
            </Provider>
        )
    }    
} 

export default Root;