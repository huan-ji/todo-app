var React = require('react');
var TaskStore = require('../store/task_store.js');

var TaskForm = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      body: ""
    };
  },

  updateTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  updateBody: function (e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function (e) {
    var task = {
      title: this.state.title,
      body: this.state.body
    };
    TaskStore.create(task);
    this.setState({
      title: "",
      body: ""
    });

  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        Title: <input
                  type="text"
                  onChange={this.updateTitle}
                  value={this.state.title}/>
        <br/>
        Body: <input
                  type="text"
                  onChange={this.updateBody}
                  value={this.state.body}/>
              <input type="submit" value="Add Task"/>
      </form>
    );
  }
});

module.exports = TaskForm;
