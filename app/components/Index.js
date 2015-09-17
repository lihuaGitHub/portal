    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');
var Detailed=require('./index/Detailed')
var Navigation = require('./index/Navigation')

var Index = React.createClass({
      componentDidMount: function () {

      },

      render: function () {
        return (
          <div >
            <Header />
            <img className="Banner-img" src="/images/b.jpg" />
            <Navigation/>
            <Detailed/>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Index;
