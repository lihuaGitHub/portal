/** @jsx React.DOM */
var React = require('react/addons');
var Banner= require('../common/Banner');

var Brand = React.createClass({

    render:function(){
        var backgroundImgs = ["/images/ps3.jpg", "/images/b.jpg", "/images/ps2.jpg"];
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
                        <Banner backgroundImgs={backgroundImgs} />
                    </div>
                    <div className="Brand-img-title">
                        <p>誉存公司成功监测88贷平台高危，保障财产书亿元</p>
                    </div>
                </div>
            </div>
        )
    }
});
  module.exports = Brand;
