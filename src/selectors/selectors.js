"use strict";

var authorsFormattedForDropdown = function (authors) {
    return authors.map(function (author) {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
};

module.exports = authorsFormattedForDropdown;