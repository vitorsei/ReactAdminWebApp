/** * Created by 5a.victor on 09/08/2016. */
"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorsList');

var AuthorsPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },
    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorsPage;
