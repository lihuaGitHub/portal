    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');
var Detailed=require('./index/Detailed')
var Navigation = require('./index/Navigation')
var Brand=require('./index/Brand')
var Viewmore=require('./index/Viewmore')
var Footer=require('./index/Footer')
var Banner=require('./index/Banner')
var Index = React.createClass({
      componentDidMount: function () {

      },
      render: function () {
        return (
          <div >
          <Header />
           <Banner/>
            <Navigation />
            <Detailed />
            <Viewmore/>
            <Brand/>
            <Footer/>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Index;







/*
 handle:function(id){

      }
id="brand" onMouseOver={this.handle.bind(this,id)}
//

var Index = React.createClass({
      componentDidMount: function () {

      },
      render: function () {
        return (
          <div >
            <Header />
            <img className="Banner-img" src="/images/b.jpg" />
            <Navigation />
            <Detailed />
            <Viewmore/>
            <Brand/>
          </div>
        )
      }
  });

*/
