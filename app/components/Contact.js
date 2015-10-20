    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');
var Map = require('./contact/Map');
var ContactHover = require("./contact/ContactHover")
var Footer = require('./common/Footer');

var Contact = React.createClass({
      componentDidMount: function () {
      },
      render: function () {
        return (
          <div>
              <Header />
              <Map />
              <ContactHover />
              <Footer />
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Contact;
