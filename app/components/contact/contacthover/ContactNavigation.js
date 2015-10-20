/** @jsx React.DOM */
var React = require("react/addons");
var Shownavigation = require("./navigation/Shownavigation")

var Contactnavigation = React.createClass({
	render: function(){
      	return (
      		<div className="navigation">
	      		<div className="Navigation-main clearfix">
	      			<div id="Navigation-a" className="ContactNavigation-blcok clearfix" data-index="a" onMouseOver={this.props.handle.bind(null,'1')}>
	      		     	<Shownavigation  titleTop='1' titleA='联系我们' titleB='Contact'/>
	      		    </div>
	      			<div id="Navigation-a" className="ContactNavigation-blcok clearfix" data-index="b" onMouseOver={this.props.handle.bind(null,'2')}>
	      		     	<Shownavigation  titleTop='2' titleA='在线留言' titleB='Feedback'/>
	      		    </div>
	      		    <div id="Navigation-a" className="ContactNavigation-blcok clearfix" data-index="c" onMouseOver={this.props.handle.bind(null,'3')}>
	      		     	<Shownavigation  titleTop='3' titleA='加入我们' titleB='Join Us'/>
	      		    </div>
	      		</div>
      		</div>
      	)
    }
});

module.exports = Contactnavigation;
