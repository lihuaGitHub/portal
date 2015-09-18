    /** @jsx React.DOM */
var React = require('react/addons');
var Showdetailed = React.createClass({
	render:function(){
		return(
                                                 <div className="Detailed-enterpriseWrap">
		            <div className="Detailed-enterprise">
	       	       	  <img className="Detailed-img" src={this.props.img} />
	       	       	  <p className="Detailed-title-change-a">{this.props.titleTop}</p>
	       	       	  <p className="Detailed-title-b">{this.props.titleA}</p>
	       	       	  <p className="Detailed-title-b">{this.props.titleB}</p>
	       	            </div>
                                            </div>
		)
	}
});
module.exports = Showdetailed;
/*
<div className="Detailed-enterprise">
       	       	  <img className="Detailed-img" src="/images/normal-a.png" />
       	       	  <p className="Detailed-p-a">企业征信</p>
       	       	  <p className="Detailed-p-b">全面数据披露</p>
       	       	  <p className="Detailed-p-b">精准核实信息</p>
       	       </div>
       	       <div className="Detailed-personal">
       	       	  <img className="Detailed-img" src="/images/normal-b.png" />
       	       	  <p className="Detailed-p-a">个人征信</p>
       	       	  <p className="Detailed-p-b">智能匹配</p>
       	       	  <p className="Detailed-p-b">独家分析社会属性</p>
       	       </div>
       	       <div className="Detailed-associated">
       	       	  <img className="Detailed-img" src="/images/normal-c.png" />
       	       	  <p className="Detailed-p-a">关联网络</p>
       	       	  <p className="Detailed-p-b">企业复杂网络关系</p>
       	       	  <p className="Detailed-p-b">挖掘深层信息</p>
       	       </div>
       	       <div className="Detailed-assessment">
       	       	  <img className="Detailed-img" src="/images/normal-d.png" />
       	       	  <p className="Detailed-p-a">全息评估</p>
       	       	  <p className="Detailed-p-b">数据分析</p>
       	       	  <p className="Detailed-p-b">客观准确的多维度评分</p>
       	       </div>
       	       */