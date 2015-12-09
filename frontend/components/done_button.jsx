var React = require('react');
var TaskStore = require('../store/task_store.js');

var DoneButton = React.createClass({
  getInitialState: function () {
    return {
      text: ""
    };
  },

  handleClick: function (e) {
    // debugger
    TaskStore.toggleDone(this.props.task.id);
  },

  render: function () {
    // debugger;
    var text;
    if (this.props.task.done) {
      text = "Undo";
    } else {
      text = "Done";
    }

    return (
      <button onClick={this.handleClick}>{text}</button>
    );

  }
});

module.exports = DoneButton;
