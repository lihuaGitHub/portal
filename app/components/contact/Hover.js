/** @jsx React.DOM */
var React = require('react/addons');


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
  			
  			</div>
  			)
  		}
	});

module.exports = Hover;