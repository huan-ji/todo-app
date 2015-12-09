var React = require('react');
var TaskStore = require('../store/task_store.js');
var StepStore = require('../store/step_store.js');
var StepForm = require('./step_form.jsx');

var TaskDetailView = React.createClass ({
  getInitialState: function () {
    return {
      steps: StepStore.all(this.props.task.id)
    };
  },

  handleDestroy: function() {
    TaskStore.destroy(this.props.task.id);
  },

  handleStepChange: function (e) {
    this.setState({ steps: StepStore.all(this.props.task.id)});
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.handleStepChange);
    StepStore.fetch(this.props.task.id);
  },

  handleStepDoneClick: function (i, e) {
    StepStore.toggleDone(i);
  },

  render: function() {
    var body = this.props.task.body;
    var steps = this.state.steps;

    var self = this;

    var displaySteps = steps.map(function (step, i) {
      var text;
      if (step.done) {
        text = "Undo";
      } else {
        text = "Done";
      }

      return (
        <div key={i}>
          <li>{step.title}</li>
          <button onClick={self.handleStepDoneClick.bind(self, step.id)}>{text}</button>
        </div>
      );
    });

    return (
      <div>
        { body }
        <button
          onClick={this.handleDestroy}
          value="Delete Task">Delete Task
        </button>
        { displaySteps }
        <StepForm taskId={this.props.task.id}/>
      </div>
    );
  }

});

module.exports = TaskDetailView;
