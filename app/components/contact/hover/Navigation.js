/** @jsx React.DOM */
var React = require('react/addons');
var Shownavigation=require('./navigation/ShowNavigation');

var Navigation = React.createClass({

      	render:function(){
      		return(	
      		<div className="Navigation">
	      		<div className="Navigation-main clearfix">
	      		    <div id="Navigation-a" className="Navigation-blcok clearfix"  data-index="a" onMouseOver={this.props.handle.bind(null,'1')}>
	      		     	<Shownavigation  titleTop='1' titleA='contact' titleB='Product'/>
	      		    </div>
	      		    <div id="Navigation-b" className="Navigation-blcok clearfix" data-index="b" onMouseOver={this.props.handle.bind(null,'2')}>
	      		      	<Shownavigation  titleTop='2' titleA='feedback' titleB='Product'/>
	      		    </div>
	      		    <div id="Navigation-c" className="Navigation-blcok clearfix" data-index="c" onMouseOver={this.props.handle.bind(null,'3')}>
	      		      	<Shownavigation  titleTop='3' titleA='join us' titleB='Product'/>
	      		    </div>
	      		</div>
      		</div>
      	);
    }
});

module.exports = Navigation;