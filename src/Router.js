import React, { Component } from 'react';
import { Router, Route, hashHistory } from "react-router";


import Page0 from "./page/page0/index.js";
import Page1 from "./page/page1/index.js";

import Page2 from "./page/page2/index.js";

require('../src/rem.js');
require('../src/work.js');

export default class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Page0} />
                <Route path="/Page0" component={Page0} />
                <Route path="/Page1" component={Page1} />
                <Route path="/Page2" component={Page2} />
            </Router>
        );
    }
}