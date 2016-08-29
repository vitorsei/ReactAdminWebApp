'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');

var InitializeActions = {
    initialApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE_AUTHOR,
            initialData: {
                authors: AuthorApi.getAllCourses(),
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitializeActions;
