    /** @jsx React.DOM */ 
var React = require('react/addons');

var Footer = React.createClass({
       render:function(){
       	return(
       	          <div className="Footer">
                                    <div className="Footer-main">
                                          <div className="Footer-independent">
                                                <div className="Footer-title">
                                                      <p className="Footer-title-a">shoye</p>
                                                </div>
                                                <div className="Footer-list">
                                                      <p className="Footer-li">Footer</p>
                                                  
                                                </div>
                                          </div>
                                    </div>
                               </div>
       	)
       }
});
module.exports = Footer;