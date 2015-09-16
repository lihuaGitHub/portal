    /** @jsx React.DOM */
var React = require('react/addons');


var Header = React.createClass({

      componentDidMount: function () {

      },
      render: function () {
        return (
            <div className="Header">
              <a className="Header-brand" href="/"><img src="/images/logo.png" /></a>
              <ul className="Header-list">
                <li className="Header-list-li"><a href="#">首页</a></li>
                <li className="Header-list-li"><a href="#">产品</a></li>
                <li className="Header-list-li"><a href="#">公司</a></li>
                <li className="Header-list-li"><a href="#">资讯</a></li>
                <li className="Header-list-li"><a href="#">征信知识</a></li>
                <li className="Header-list-li"><a href="#">联系我们</a></li>
                <li className="Header-list-li"><a href="#">注册</a></li>
                <li className="Header-list-li"><a href="#">登录</a></li>
              </ul>
            </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Header;

