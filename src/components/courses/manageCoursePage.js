"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            course: {id: '', title: '', category: '', length: '', author: {id: '', name: ''}},
            authors: [],
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        this.setState({authors: AuthorStore.getAllAuthors()});

        var courseId = this.props.params.id;

        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    setAuthor: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.course.author.name = value;
        this.state.course.author.id = value;
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.course.title.length < 3)
        {
            this.state.errors.title = 'Title must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function (event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        this.setState({dirty: false});
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                authorOptions={this.state.authors}
                dropDownOnChange={this.state.setAuthor}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageCoursePage;