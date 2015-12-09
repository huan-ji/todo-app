var React = require('react');
var TaskStore = require('../store/task_store.js');
var TaskDetailView = require('./task_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return {
      selected: false
    };
  },

  handleClick: function(e) {
    this.setState({selected: true});
  },

  render: function () {
    var selected = '';
    if (this.state.selected) {
      selected = <TaskDetailView task={this.props.task}></TaskDetailView>;
    }
    return (
      <div>
        <div onClick={this.handleClick}>{this.props.task.title}</div>
        { selected }
      </div>
    );

  }
});

module.exports = TodoListItem;
