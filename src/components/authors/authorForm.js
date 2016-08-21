/**
 * Created by VitorSeiji on 21/08/2016.
 */

"use strict";

var React = require('react');

var AuthorForm = React.createClass({

    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <input type="text"
                    name="firstName"
                    label="First Name"
                    value=""

                     />
                <br/>
                <input type="text"
                    name="lastName"
                    label="Last Name"
                    value=""

                     />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;
