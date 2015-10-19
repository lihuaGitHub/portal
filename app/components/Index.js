    /** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./common/Header');
var Brand=require('./index/Brand')
var Viewmore=require('./index/Viewmore')
var Footer=require('./index/Footer')
var Banner=require('./index/Banner')
var Hover=require('./index/Hover')
var Index = React.createClass({
      componentDidMount: function () {

      },
      render: function () {
        return (
          <div >
          <Header />
           <Banner mTop={-70} background={["/images/b.jpg", "/images/ps2.jpg", "/images/ps3.jpg"]} />
           <Hover/>
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
