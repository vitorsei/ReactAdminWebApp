"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    getInitialState: function () {
        return {
            course: {id: '', title: '', category: '', length: '', author: {id: '', name: ''}},
            errors: {},
            dirty: false
        };
    },

    render: function () {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageCoursePage;