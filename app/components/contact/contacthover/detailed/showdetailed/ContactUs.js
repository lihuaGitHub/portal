/** @jsx React.DOM */
var React = require('react/addons');

var ContactUs = React.createClass({
	render: function(){
		return (
			<div className="ContactUs">
				<h1 className="ContactUs-title">重庆誉存科技有限公司</h1>
				<p className="ContactUs-p">地址：重庆市北部新区麒麟座Ｄ10楼</p>
				<p className="ContactUs-p">电话：023-70165198</p>
				<p className="ContactUs-p">传真：023-70165198</p>
				<p className="ContactUs-p">电子邮件：kefu@socialcredits.cn</p>
				<p className="ContactUs-p">网址：www.socialcredits.cn</p>
			</div>
		)
	}
});

module.exports = ContactUs;