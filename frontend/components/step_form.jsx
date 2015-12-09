var React = require('react');
var StepStore = require('../store/step_store.js');

var StepForm = React.createClass({
  getInitialState: function () {
    return {
      title: ""
    };
  },

  updateTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  handleSubmit: function (e) {
    var task = {
      title: this.state.title,
      taskId: this.props.taskId
    };
    StepStore.create(task);
    this.setState({
      title: ""
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
              <input type="submit" value="Add Task"/>
      </form>
    );
  }
});

module.exports = StepForm;
