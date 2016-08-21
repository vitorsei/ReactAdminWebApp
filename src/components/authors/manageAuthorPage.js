/**
 * Created by VitorSeiji on 21/08/2016.
 */
"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({

    render: function() {
        return (
            <AuthorForm />
        );
    }
});

module.exports = ManageAuthorPage;

