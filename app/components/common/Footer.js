    /** @jsx React.DOM */ 
var React = require('react/addons');

var Footer = React.createClass({
       render:function(){
       	return(
       	          <div className="Footer">
                                    <div className="Footer-main">
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">产品</p>
                                                             <p className="Footer-list-li"><a href="#">企业征信</a></p> 
                                                             <p className="Footer-list-li"><a href="#">个人征信</a></p>  
                                                             <p className="Footer-list-li"><a href="#">关联网络</a></p>  
                                                             <p className="Footer-list-li"><a href="#">全息评估</a></p>  
                                                             <p className="Footer-list-li"><a href="#">其他</a></p>  
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">征信</p>
                                                             <p className="Footer-list-li"><a href="#">基本知识</a></p> 
                                                             <p className="Footer-list-li"><a href="#">信息结构</a></p>  
                                                             <p className="Footer-list-li"><a href="#">权益维护</a></p>  
                                                             <p className="Footer-list-li"><a href="#">相关法规</a></p>            
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">公司</p>
                                                             <p className="Footer-list-li"><a href="#">公司概况</a></p> 
                                                             <p className="Footer-list-li"><a href="#">团队介绍</a></p>  
                                                             <p className="Footer-list-li"><a href="#">资格资质</a></p>   
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">资讯</p>
                                                             <p className="Footer-list-li"><a href="#">誉存独家</a></p> 
                                                             <p className="Footer-list-li"><a href="#">业内新闻</a></p>  
                                          </div>
                                          <div className="Footer-independent">
                                                             <p className="Footer-title-a">联系</p>
                                                             <p className="Footer-list-li"><a href="#">联系方式</a></p> 
                                                             <p className="Footer-list-li"><a href="#">在线留言</a></p>  
                                                             <p className="Footer-list-li"><a href="#">加入我们</a></p>   
                                          </div>
                                          <div className="Footer-independent-left">
                                                             <p className="Footer-title-a">关注我们</p>
                                                             <img  className=" Footer-img" src="images/Qrcode.jpg"/> 
                                          </div>
                                    </div>
                                    <div className="end">
                                    </div>
                               </div>
       	)
       }
});
module.exports = Footer;