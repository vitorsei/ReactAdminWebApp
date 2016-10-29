"use strict";

var React = require('react');

var SelectInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        defaultOption: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string,
        options: React.PropTypes.arrayOf(React.PropTypes.object)
    },
    render: function () {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                    <select
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        className="form-control">
                        <option value="">{this.props.defaultOption}</option>
                        {this.props.options.map(function (option) {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                        }
                    </select>
                    {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
                </div>
            </div>
        );
    }
});

module.exports = SelectInput;
