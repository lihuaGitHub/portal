    /** @jsx React.DOM */

    
var React = require('react/addons');
var Showdetailed = require('./detailed/Showdetailed')

var Detailed = React.createClass({
	
       render:function(){
       	return(
       	<div className="Detailed">
       	       <div className="Detailed-title">
       	             <p className="Detailed-title-p">
       	                    <span className="Detailed-title-span-a">产品介绍 </span>
       	                    <span className="Detailed-title-span-b"> /  Porduct</span>
       	             </p>
       	       </div>  
       	       	<div >   
       	       	      <Showdetailed titleA='全面数据披露'titleB='精准核000实信息' titleTop='企业征信' img='/images/normal-a.png'/>
       	       	</div>
       	       	<div>
       	       	      <Showdetailed titleA='智能匹配' titleB='独家分析社会属性'titleTop='个人征信' img='/images/normal-b.png'/>
       	       	</div>
       	       	<div>
       	       	     <Showdetailed titleA='企业复杂网络关系'titleB='挖掘深层信息' titleTop='关联网络' img='/images/normal-c.png'/>
       	       	</div>
       	       	<div>
       	       	     <Showdetailed titleA='数据分析'titleB='客观准确的多维度评分' titleTop='全息评估' img='/images/normal-d.png'/>
       	       	</div>
              </div>
       	)
       }
});

module.exports = Detailed;





/*
var React = require('react/addons');

var Detailed = React.createClass({
       render:function(){
       	return(
       	<div className="Detailed">
       	       <div className="Detailed-title">
       	             <p className="Detailed-title-p">
       	                    <span className="Detailed-title-span-a">产品介绍 </span>
       	                    <span className="Detailed-title-span-b"> /  Porduct</span>
       	             </p>
       	       </div>
       	       <div className="Detailed-enterpriseWrap">
	       	       <div className="Detailed-enterprise">
	       	       	  <img className="Detailed-img" src="/images/normal-a.png" />
	       	       	  <p className="Detailed-p-a">企业征信</p>
	       	       	  <p className="Detailed-p-b">全面数据披露</p>
	       	       	  <p className="Detailed-p-b">精准核实信息</p>
	       	       </div>
	       	       <div className="Detailed-enterprise">
	       	       	  <img className="Detailed-img" src="/images/normal-b.png" />
	       	       	  <p className="Detailed-p-a">个人征信</p>
	       	       	  <p className="Detailed-p-b">智能匹配</p>
	       	       	  <p className="Detailed-p-b">独家分析社会属性</p>
	       	       </div>
	       	       <div className="Detailed-enterprise">
	       	       	  <img className="Detailed-img" src="/images/normal-c.png" />
	       	       	  <p className="Detailed-p-a">关联网络</p>
	       	       	  <p className="Detailed-p-b">企业复杂网络关系</p>
	       	       	  <p className="Detailed-p-b">挖掘深层信息</p>
	       	       </div>
	       	       <div className="Detailed-enterprise">
	       	       	  <img className="Detailed-img" src="/images/normal-d.png" />
	       	       	  <p className="Detailed-p-a">全息评估</p>
	       	       	  <p className="Detailed-p-b">数据分析</p>
	       	       	  <p className="Detailed-p-b">客观准确的多维度评分</p>
	       	       </div>
       	       </div>
       	</div>
       	)
       }
});
module.exports = Detailed;
*/