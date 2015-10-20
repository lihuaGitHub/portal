/** @jsx React.DOM */
var React = require('react/addons');

var Feedback = React.createClass({
	render: function(){
		return (
			<div className="Feedback">
				<form id="FeedbackForm" className="FeedbackForm">
					<div className="Feedback-div">
						<label className="labelForUser" htmlFor="user">姓名</label>
						<input className="FeedbackUser" type="text" name="user" ref="FeedbackUser" />
					</div>
					<div className="Feedback-div">
						<span className="Feedback-div-padding">
							<label className="labelForEmail" htmlFor="user">邮箱</label>
							<input className="FeedbackEmail fr" type="text" name="email" ref="FeedbackEmail" />
						</span>
					</div>
					<div>
						<label className="labelForTitle" htmlFor="user">主题</label>
						<input className="FeedbackTitle" type="text" name="titler" ref="FeedbackTitle" />
					</div>
					<div>
						<label className="labelForContent" htmlFor="content">内容</label>
						<textarea className="FeedbackContent" name="content" placeholder="有什么建议或者想法吗？欢迎联系我们."></textarea>
						<input className="FeedbackSub" type="submit" value="提交"　/>
					</div>
				</form>
			</div>
		)
	}
});
module.exports = Feedback;