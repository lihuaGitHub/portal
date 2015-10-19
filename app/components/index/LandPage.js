    /** @jsx React.DOM */
var React = require('react/addons');
var Banner=require('../common/Banner');
var LandPage = React.createClass({
       render:function(){
        var backgroundImgs = ["/images/b.jpg", "/images/ps2.jpg", "/images/ps3.jpg"];
        return(
            <Banner mTop={"-70"} backgroundImgs={backgroundImgs} />
        )
       }
});
module.exports = LandPage;
