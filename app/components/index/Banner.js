    /** @jsx React.DOM */
var React = require('react/addons');


var Banner=React.createClass({
	render:function(){
             return(
       	<div className="Banner">
       	     <div className="Banner-main">
       	         <img className="Banner-img" src="/images/b.jpg" />
       	     </div>
       	</div>
       	)
   } 
});
module.exports = Banner;