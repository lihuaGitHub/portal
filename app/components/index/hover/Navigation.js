    /** @jsx React.DOM */
var React = require('react/addons');
var Shownavigation=require('./navigation/Shownavigation');

var Navigation = React.createClass({
	 // getInitialState: function() {
  //       		return {
  //           			normalState: [false, false, false,false]
  //        		 }
  //      	 },
	// handle:function(index){
	// 	console.log(index);
	// 	// var  typeNom = this.state.normalState.indexOf(true);
	// 	// var changeState=[false, false, false,false];
	// 	// changeState[typeNom]=true;
	// 	// this.setState({
	// 	// 	normalState:changeState
	// 	// })
	// 	// var dataIndex = e.target.getAttribute("data-index");
	// 	// console.log(dataIndex);
	// },
      	render:function(){
      		return(	
      		<div className="Navigation">
	      		<div className="Navigation-main">
	      		     <div id="Navigation-a" className="Navigation-blcok"  data-index="a" onMouseOver={this.props.handle.bind(this,'1')}><Shownavigation  titleTop='1' titleA='产品介绍' titleB='Product'/></div>
	      		      <div id="Navigation-b" className="Navigation-blcok" data-index="b" onMouseOver={this.props.handle.bind(this,'2')}><Shownavigation  titleTop='2' titleA='征信知识' titleB='Product'/></div>
	      		      <div id="Navigation-c" className="Navigation-blcok" data-index="c" onMouseOver={this.props.handle.bind(this,'3')}><Shownavigation  titleTop='3' titleA='公司概况' titleB='Product'/></div>
	      		      <div id="Navigation-d" className="Navigation-blcok" data-index="d" onMouseOver={this.props.handle.bind(this,'4')}><Shownavigation  titleTop='4' titleA='资讯中心' titleB='Product'/></div>
	      		</div>
      		</div>
      	)
      }
});
module.exports = Navigation;
/*
var React = require('react/addons');


var Navigation = React.createClass({
      render:function(){
      	return(	
      		<div className="Navigation">
	      		<div className="Navigation-main">
	      		      <div className="Navigation-normal">
	      		      	<div className="Navigation-span-a">
	      		      	      <p className="Navigation-title-a">1</p>
	      		      	</div>
	      		      	<div className="Navigation-span-b">
	      		      	       <p className="Navigation-title-b">产品介绍</p>    
	      		      	</div>
	      		      	<div className="Navigation-span-c">
	      		      	       <p className="Navigation-title-c">Product</p>
	      		      	</div>
	      		      </div>
	      		      <div className="Navigation-normal">
	      		      	<div className="Navigation-span-a">
	      		      	      <p className="Navigation-title-a">2</p>
	      		      	</div>
	      		      	<div className="Navigation-span-b">
	      		      	       <p className="Navigation-title-b">征信知识</p>    
	      		      	</div>
	      		      	<div className="Navigation-span-c">
	      		      	       <p className="Navigation-title-c">Product</p>
	      		      	</div>
	      		      </div>
	      		      <div className="Navigation-normal">
	      		      	<div className="Navigation-span-a">
	      		      	      <p className="Navigation-title-a">3</p>
	      		      	</div>
	      		      	<div className="Navigation-span-b">
	      		      	       <p className="Navigation-title-b">公司概况</p>    
	      		      	</div>
	      		      	<div className="Navigation-span-c">
	      		      	       <p className="Navigation-title-c">Product</p>
	      		      	</div>
	      		      </div>
	      		      <div className="Navigation-normal">
	      		      	<div className="Navigation-span-a">
	      		      	      <p className="Navigation-title-a">4</p>
	      		      	</div>
	      		      	<div className="Navigation-span-b">
	      		      	       <p className="Navigation-title-b">资讯中心</p>    
	      		      	</div>
	      		      	<div className="Navigation-span-c">
	      		      	       <p className="Navigation-title-c">Product</p>
	      		      	</div>
	      		      </div>
	      		</div>
      		</div>
      	)
      }
});
module.exports = Navigation;
*/