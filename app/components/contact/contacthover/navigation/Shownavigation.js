/** @jsx React.DOM */
var React = require('react/addons');

var Shownavigation = React.createClass({
	render:function(){
		return(
                  <div className="Navigation-normal clearfix">
      	      	<div className="Navigation-span-a">
      	      	    <p className="Navigation-title-a">{this.props.titleTop}</p>
      	      	</div>
      	      	<div className="Navigation-span-b">
      	      	    <p className="Navigation-title-b">{this.props.titleA}</p>    
      	      	</div>
      	      	<div className="Navigation-span-c">
      	      	    <p className="Navigation-title-c">{this.props.titleB}</p>
      	      	</div>
      	      </div>
		)
	}
});
module.exports = Shownavigation;