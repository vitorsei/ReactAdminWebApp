"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseList = require('./courseList');
var CourseStore = require('../../stores/courseStore');

var CoursePage = React.createClass({
    getInitialState: function () {
      return {
          courses: CourseStore.getAllCourses()
      };
    },

    componentWillMount: function() {
        CourseStore.addChangeListener(this._onChange);
    },

    //Clean up when this component is unmounted
    componentWillUnmount: function() {
        CourseStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ courses: CourseStore.getAllCourses() });
    },

    render: function () {
        return (
            <div>
                <h1>Courses</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }
});

module.exports = CoursePage;
