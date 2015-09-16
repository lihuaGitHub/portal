    /** @jsx React.DOM */

var React = require('react/addons');
var Contact = require('../components/Contact');

var mountNode = document.getElementById("react-main-mount");

React.render(new Contact({}), mountNode);
