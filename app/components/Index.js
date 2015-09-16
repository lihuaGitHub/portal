    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');

var Index = React.createClass({
      componentDidMount: function () {

      },

      render: function () {
        return (
          <div >
            <Header />
            <img className="Banner-img" src="/images/banner.png" />
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Index;
