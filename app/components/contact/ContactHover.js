/** @jsx React.DOM */
var React = require("react/addons");
var ContactNavigation = require("./contacthover/ContactNavigation");
var ContactDetailed   = require("./contacthover/ContactDetailed");

var ContactHover= React.createClass({
    getInitialState: function() {
        return {
            showDetIndex: 1
        }
    },
    handle: function(str){
       	this.setState({
       	 	showDetIndex: str
       	});
    },
  	render:function(){
  		return(
  			<div className="contactHover">
                <ContactNavigation handle={this.handle}/>
                <ContactDetailed showDetIndex={this.state.showDetIndex} />
  			</div>
  		);
  	}
});

module.exports = ContactHover;