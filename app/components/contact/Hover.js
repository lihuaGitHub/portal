/** @jsx React.DOM */
var React = require('react/addons');
var Detailed=require('./hover/Detailed');
var Navigation=require('./hover/Navigation');


var Hover= React.createClass({
    getInitialState: function() {
        return {
            // normalState: [false, false, false,false]
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
  			<div className="Hover">
  				<Navigation handle={this.handle} />
  				<Detailed showIndex = {this.state.showDetIndex} />
  			</div>
  			)
  		}
	});

module.exports = Hover;