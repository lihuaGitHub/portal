    /** @jsx React.DOM */ 
var React = require('react/addons');

var Footer = React.createClass({
       render:function(){
       	return(
       	          <div className="Footer">
                                    <div className="Footer-main">
                                            <div className="Footer-independent">
                                                             <p className="Footer-title-a">产品</p>
                                                             <p className="Footer-list-li">企业征信</p> 
                                                             <p className="Footer-list-li">个人征信</p>  
                                                             <p className="Footer-list-li">关联网络</p>  
                                                             <p className="Footer-list-li">全息评估</p>  
                                                             <p className="Footer-list-li">其他</p>  
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">征信</p>
                                                             <p className="Footer-list-li">基本知识</p> 
                                                             <p className="Footer-list-li">信息结构</p>  
                                                             <p className="Footer-list-li">权益维护</p>  
                                                             <p className="Footer-list-li">相关法规</p>            
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">公司</p>
                                                             <p className="Footer-list-li">公司概况</p> 
                                                             <p className="Footer-list-li">团队介绍</p>  
                                                             <p className="Footer-list-li">资格资质</p>   
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">资讯</p>
                                                             <p className="Footer-list-li">誉存独家</p> 
                                                             <p className="Footer-list-li">业内新闻</p>  
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">联系</p>
                                                             <p className="Footer-list-li">联系方式</p> 
                                                             <p className="Footer-list-li">在线留言</p>  
                                                             <p className="Footer-list-li">加入我们</p>   
                                          </div>
                                          <div className="Footer-independent-left">
                                                             <p className="Footer-title-a">关注我们</p>
                                                             <p className="Footer-list-li">联系方式</p> 
                                          </div>
                                    </div>
                                    <div className="end">
                                    </div>
                               </div>
       	)
       }
});
module.exports = Footer;