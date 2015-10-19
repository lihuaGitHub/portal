/** @jsx React.DOM */
var React = require('react/addons');

var Map = React.createClass({

	render: function(){
		return (
			<div className="Map">
				<div className="Map-title">
       	            <p className="Map-title-p">
       	                <span className="Map-title-p-title-span-a">产品介绍 </span>
       	                <span className="Map-title-span-b"> /Contact Us</span>
       	            </p>
       	        </div>
       	        <div className="Map-img">
       	        	<img src="./images/b.jpg" alt="" />
       	        </div>  
			</div>
		);
	}

});

module.exports = Map;

