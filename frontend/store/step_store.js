var _steps = {};
var _callbacks = [];

var StepStore = {
  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  },

  addChangedHandler: function (handler) {
    _callbacks.push(handler);
  },

  removeChangedHandler: function (handler) {
    var index = _callbacks.indexOf(handler);
    _callbacks.splice(index, 1);
  },

  all: function (taskId) {
    var returnSteps = [];
    for (var id in _steps) {
      if (_steps.hasOwnProperty(id) && _steps[id].task_id == taskId) {
        returnSteps.push(_steps[id]);
      }
    }
    // debugger;
    return returnSteps;
  },

  fetch: function (taskId) {

    $.get("api/tasks/" + taskId + "/steps", {}, function (steps) {
      _steps = {};
      // debugger;
      if (steps) {
        steps.forEach(function (step) {
          _steps[step.id] = step;
        });
      }

      StepStore.changed();
    });
    // debugger;
  },

  create: function (data) {
    $.post("api/tasks/" + data.taskId + "/steps", {step: data}, function (step) {
      _steps[step.id] = step;
      StepStore.changed();
    });
  },

  destroy: function (id) {
    $.ajax({
      url: "api/steps/" + id,
      type: "DELETE",
      success: function (result) {
        delete _steps[result.id];
        StepStore.changed();
      }
    });
  },

  toggleDone: function(id) {
    $.ajax({
      url: "api/steps/" + id,
      type: "PATCH",
      success: function (result) {
        // debugger
        _steps[result.id] = result;
        StepStore.changed();
      }
    });
  }

};

module.exports = StepStore;
