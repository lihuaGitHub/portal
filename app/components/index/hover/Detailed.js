    /** @jsx React.DOM */

    
var React = require('react/addons');
var Showdetailed = require('./detailed/Showdetailed')

var Detailed = React.createClass({
      //  getInitialState : function(){
      //          return {on : true};
      //  },
      // onMouseOver : function(){
      //         this.setState({on : !this.state.on});
      // }, 
              render:function(){
                     // console.log(this.props.showIndex);
                     var number=this.props.showIndex;
                     // console.log(number+"you move me ")
                     if (number==1){
                             // bga = this.state.on ? "Detailed-img" : img = ".Detailed-img";
                             // imgb = this.state.on ? "images/normal-b.png" : img = "images/change-b.png";
                             // imgc = this.state.on ? "images/normal-c.png" : img = "images/change-c.png";
                             // imgd = this.state.on ? "images/normal-d.png" : img = "images/change-d.png";
       	return(
       	             <div className="Detailed">
       	                    <div className="Detailed-title">
       	                           <p className="Detailed-title-p">
       	                                  <span className="Detailed-title-span-a">产品介绍 </span>
       	                                  <span className="Detailed-title-span-b"> /  Porduct</span>
       	                           </p>
       	             </div>  
       	             <div>
                                                 <Showdetailed titleA='全面数据披露' titleB='精准核000实信息' titleTop='企业征信' bg="Detailed-img Detailed-img-a"/></div>
                                     <div >
                                                 <Showdetailed titleA='智能匹配' titleB='独家分析社会属性'titleTop='个人征信' bg="Detailed-img Detailed-img-b"/></div>
       	             <div >
                                                 <Showdetailed titleA='企业复杂网络关系'titleB='挖掘深层信息' titleTop='关联网络'bg="Detailed-img Detailed-img-c"/></div>
       	             <div >
                                                 <Showdetailed titleA='数据分析'titleB='客观准确的多维度评分' titleTop='全息评估' bg="Detailed-img Detailed-img-d"/></div>
                             </div>
       	)
                     }
                     else if(number==2){
                            return(
                          <div className="Detailed">
                                  <div className="Detailed-title">
                                         <p className="Detailed-title-p">
                                                <span className="Detailed-title-span-a"></span>
                                                <span className="Detailed-title-span-b"> /  Porduct</span>
                                         </p>
                           </div>  
                           <div >
                                                 <Showdetailed titleA='全面数据披露'titleB='精准核000实信息' titleTop='2' bg="Detailed-img Detailed-img-a"/></div>
                                     <div >
                                                 <Showdetailed titleA='智能匹配' titleB='独家分析社会属性'titleTop='2' bg="Detailed-img Detailed-img-b"/></div>
                           <div >
                                                 <Showdetailed titleA='企业复杂网络关系'titleB='挖掘深层信息' titleTop='2'bg="Detailed-img Detailed-img-c"/></div>
                           <div >
                                                 <Showdetailed titleA='数据分析'titleB='客观准确的多维度评分' titleTop='2' bg="Detailed-img Detailed-img-d"/></div>
                             </div>
                            )
                     }
                     else if(number==3){
                            return(
                           <div className="Detailed">
                                  <div className="Detailed-title">
                                         <p className="Detailed-title-p">
                                                <span className="Detailed-title-span-a">产品介绍33 </span>
                                                <span className="Detailed-title-span-b"> /  Porduct</span>
                                         </p>
                           </div>  
                           <div >
                                                 <Showdetailed titleA='全面数据披露'titleB='精准核000实信息' titleTop='3' bg="Detailed-img Detailed-img-a"/></div>
                                     <div >
                                                 <Showdetailed titleA='智能匹配' titleB='独家分析社会属性'titleTop='3' bg="Detailed-img Detailed-img-b"/></div>
                           <div >
                                                 <Showdetailed titleA='企业复杂网络关系'titleB='挖掘深层信息' titleTop='3'bg="Detailed-img Detailed-img-c"/></div>
                           <div >
                                                 <Showdetailed titleA='数据分析'titleB='客观准确的多维度评分' titleTop='3' bg="Detailed-img Detailed-img-d"/></div>
                             </div>
                            )
                     }
                     else{
                            return(
                           <div className="Detailed">
                                  <div className="Detailed-title">
                                         <p className="Detailed-title-p">
                                                <span className="Detailed-title-span-a">产品介绍44</span>
                                                <span className="Detailed-title-span-b"> /  Porduct</span>
                                         </p>
                           </div>  
                           <div >
                                                 <Showdetailed titleA='全面数据披露'titleB='精准核000实信息' titleTop='4' bg="Detailed-img Detailed-img-a"/></div>
                                     <div >
                                                 <Showdetailed titleA='智能匹配' titleB='独家分析社会属性'titleTop='4' bg="Detailed-img Detailed-img-b"/></div>
                           <div >
                                                 <Showdetailed titleA='企业复杂网络关系'titleB='挖掘深层信息' titleTop='4'bg="Detailed-img Detailed-img-c"/></div>
                           <div >
                                                 <Showdetailed titleA='数据分析'titleB='客观准确的多维度评分' titleTop='4' bg="Detailed-img Detailed-img-d"/></div>
                             </div>
                            )
                     }
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