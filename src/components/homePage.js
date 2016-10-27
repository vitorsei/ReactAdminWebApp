/**
 * Created by VitorSeiji on 04/08/2016.
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Xavier's School for Gifted Youngsters Administration</h1>
                <p>Train young mutants in controlling their powers and help foster a friendly human-mutant relationship.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;


