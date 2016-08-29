"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var toastr = require('toastr');
var CourseApi = require('../../api/courseApi');

var ManageCoursePage = React.createClass({
    getInitialState: function () {
        return {
            course: {id: '', title: '', category: '', length: '', author: {id: '', name: ''}},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
      var courseId = this.props.params.id;

        if (courseId) {
            this.setState({course: CourseApi.getCoursesById(courseId)});
        }
    },

    setCourseState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    saveCourse: function (event) {
        event.preventDefault();
        toastr.success('Author saved.');
    },

    render: function () {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageCoursePage;