    /** @jsx React.DOM */
var React = require('react/addons');


var Banner=React.createClass({
      getInitialState: function() {
          return {
            imgState: [true, false, false]
          }
        },
        componentDidMount: function () {
          window.setInterval(this.next,3000);
        },
        next: function() {
          var curIndex = this.state.imgState.indexOf(true);
          var nextImgState = [false,false,false];
          if(curIndex==2){
          	curIndex=-1;
          	nextImgState[curIndex+1] = true;
          }else{
          	nextImgState[curIndex+1] = true;
          }
          
          this.setState({
            imgState: nextImgState
          })
        },
        prev: function() {
          var curIndex = this.state.imgState.indexOf(true);
          var nextImgState = [false,false,false];
           if(curIndex==0){
          	curIndex=3;
          	nextImgState[curIndex-1] = true;
          }else{
          	nextImgState[curIndex-1] = true;
          }
          this.setState({
            imgState: nextImgState
          })
        },
	render:function(){
            var imgClass = [];
            var cx = React.addons.classSet;
            imgClass.push(cx({
                'Show-out': this.state.imgState[0],
                'Hide-off': !this.state.imgState[0],
                'Banner-img': true
              }));
            imgClass.push(cx({
                'Show-out': this.state.imgState[1],
                'Hide-off': !this.state.imgState[1],
                'Banner-img': true
              }));
            imgClass.push(cx({
                'Show-out': this.state.imgState[2],
                'Hide-off': !this.state.imgState[2],
                'Banner-img': true
              }));
             return(
       	<div className="Banner">

       	     <div className="Banner-main">
                      <img className={imgClass[0]} src="/images/b.jpg" />
                      <img className={imgClass[1]} src="/images/ps2.jpg" />
                      <img className={imgClass[2]} src="/images/ps3.jpg" />
                      <div className="Banner-button">
                      	<a herf="#"className="prev"><i className="i-prev"></i></a>
                      	<a  herf="#"className="next"><i className="i-next"></i></a>
                      </div>
                      <button className="Toggle-btn-next" onClick={this.next}>next</button>
                      <button className="Toggle-btn-prev" onClick={this.prev}>prev</button>
       	     </div>
       	</div>
       	)
   }
});
module.exports = Banner;
