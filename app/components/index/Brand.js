  /** @jsx React.DOM */  
var React = require('react/addons');

var Brand = React.createClass({

       render:function(){
              return(
       	 <div  className="Brand">
                             <div className="Brand-main">
                                    <div className="Brand-main-title">
                                          <p>
                                                <span className="Brand-main-title-a">品牌</span>
                                                <span className="Brand-main-title-b"> / Brand</span>
                                          </p>
                                    </div>
                                    <div className="Brand-main-picture">
                                    picture
                                    </div>
                             </div>
                      </div>
             )
       }
});
module.exports = Brand;