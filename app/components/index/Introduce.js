    /** @jsx React.DOM */
var React = require('react/addons');
var Detailed=require('./index/Detailed')
var Navigation = require('./index/Navigation')

var Introduce = React.createClass({
      render:function(){
      	return(	
      		<div className="Introduce">
          111111111111111111111111
	               <Navigation/> 		
                      <Detailed/>
      		</div>
      	)
      }
});
module.exports = Introduce;