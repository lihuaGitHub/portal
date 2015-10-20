/** @jsx React.DOM */
var React = require("react/addons");
var ContactUs = require("./detailed/showdetailed/ContactUs");
var Feedback = require("./detailed/showdetailed/Feedback");
var JoinUs = require("./detailed/showdetailed/JoinUs");

var ContactDetailed = React.createClass({

	render: function(){
		var showIndex = this.props.showDetIndex;
		if(showIndex==1){
			return (
				<div className="de-ContactUs clearfix">
					<ContactUs />
					<ContactUs />
				</div>
			);
		}else if(showIndex==2){
			return (
				<div className="de-Feedback clearfix">
					<Feedback />
				</div>
			)
		}else{
			return (
				<div className="de-JoinUs clearfix">
					<JoinUs />
				</div>
			)
		}
	}

});

module.exports = ContactDetailed;
