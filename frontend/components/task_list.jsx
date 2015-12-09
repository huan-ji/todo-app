var React = require('react');
var TaskStore = require('../store/task_store.js');
var TaskListItem = require('./task_list_item.jsx');
var TaskForm = require('./task_form.jsx');
var DoneButton = require('./done_button.jsx');

var TaskList = React.createClass({
  getInitialState: function() {

    return {
      store: TaskStore.all()
    };
  },

  componentDidMount: function () {
    TaskStore.addChangedHandler(this.tasksChanged);
    TaskStore.fetch();
  },

  componentWillUnmount: function () {
    TaskStore.removeChangedHandler(this.tasksChanged);
  },

  tasksChanged: function () {
    this.setState({store: TaskStore.all()});
  },

  render: function() {

    var taskTitles = this.state.store.map(function(task, i) {
      return (
        <div key={i}>
          <DoneButton task={task}/>
          <TaskListItem task={task}/>
        </div>
      );
    });
    // debugger;
    return (

      <div>
        { taskTitles }
        <TaskForm/>
      </div>
    );
  }

});

module.exports = TaskList;
