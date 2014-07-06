module.exports = React.createClass({
  getInitialState: function(){
    return {
      value: this.props.count
    }
  },
  handleClick: function(){
    this.setState({value:this.state.value+1});
  },
  render: function(){
    return <div>{this.state.value}<a className="btn btn-success" onClick={this.handleClick}>Test</a></div>
  }
})
