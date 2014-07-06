var Button = require('./button');
var count;
module.exports = React.createClass({
  getInitialState:function(){
    return {value: 10};
  },
  doSmth: function(){
    count
  },
  render: function(){
    return <div className="container"><Button count={this.state.value} onActionClick= {this.doSmth}/></div>;
  }
});
