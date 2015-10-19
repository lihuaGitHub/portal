    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');

var Contact = React.createClass({
      componentDidMount: function () {
      },
      render: function () {
        return (
          <div>
              <Header />
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Contact;
