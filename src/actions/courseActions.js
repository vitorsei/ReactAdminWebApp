"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
    createCourse: function(course) {
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            author: newCourse
        });
    }

    // updateAuthor: function(author) {
    //     var updatedAuthor = AuthorApi.saveAuthor(author);
    //
    //     Dispatcher.dispatch({
    //         actionType: ActionTypes.UPDATE_AUTHOR,
    //         author: updatedAuthor
    //     });
    // },
    //
    // deleteAuthor: function(id) {
    //     AuthorApi.deleteAuthor(id);
    //
    //     Dispatcher.dispatch({
    //         actionType: ActionTypes.DELETE_AUTHOR,
    //         id: id
    //     });
    // }
};

module.exports = CourseActions;
