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
        console.log(this.state.showDetIndex);
    },
  	render:function(){
  		return(
  			<div className="contactHover">
                <ContactNavigation handle={this.handle}/>
                <ContactDetailed />
  			</div>
  		);
  	}
});

module.exports = ContactHover;