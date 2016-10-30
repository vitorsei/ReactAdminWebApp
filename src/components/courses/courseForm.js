
"use strict";

var React = require('react');
var Input = require('../common/textInput');
var SelectInput = require('../common/selectInput');

var CourseForm = React.createClass({
    propTypes: {
        course:	React.PropTypes.object.isRequired,
        onSave:	React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        allAuthors: React.PropTypes.array.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />

                <Input
                    name="watchHref"
                    label="URL"
                    value={this.props.course.watchHref}
                    onChange={this.props.onChange}
                    error={this.props.errors.watchHref} />

                <SelectInput
                    name="author"
                    label="Author"
                    value={this.props.course.author.id}
                    defaultOption="Select Author"
                    options={this.props.allAuthors}
                    onChange={this.props.onChange} error={this.props.errors.author}/>
                <Input
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />

                <Input
                    name="length"
                    label="length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;