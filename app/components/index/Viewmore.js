  /** @jsx React.DOM */  
var React = require('react/addons');

var Viewmore = React.createClass({
       render:function(){
              return(
       	 <div className="Viewmore">
                             <div className="Viewmore-main">
                                          <div className="Viewmore-main-more">
                                                  <a href="#" className="Viewmore-main-more-a">查看更多</a>
                                          </div>
                             </div>
                      </div>
             )
       }
});
module.exports = Viewmore;