"use strict";

var React = require('react');

var DropDown = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        value: React.PropTypes.oneOfType(
            [
                React.PropTypes.string,
                React.PropTypes.string
            ]
        ),
        valueField: React.PropTypes.string,
        labelField: React.PropTypes.string,
        onChange: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: null,
            valueField: 'value',
            labelField: 'label',
            onChange: null
        };
    },

    getInitialState: function() {
        var selected = this.getSelectedFromProps(this.props);
        return {
            selected: selected
        };
    },

    componentWillReceiveProps: function(nextProps) {
        var selected = this.getSelectedFromProps(nextProps);
        this.setState({
            selected: selected
        });
    },

    getSelectedFromProps: function(props) {
        var selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    },

    render: function() {
        var self = this;
        var options = self.props.options.map(function(option) {
            return (
                <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
                    {option[self.props.labelField]}
                </option>
            );
        });
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.id}</label>
                <select id={this.props.id}
                        className='form-control'
                        value={this.state.selected}
                        onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        );
    },

    handleChange: function(e) {
        if (this.props.onChange) {
            var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
            };
            this.props.onChange(change);
        }
        this.setState({selected: e.target.value});
    }

});


module.exports = DropDown;