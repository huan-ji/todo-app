var _tasks = {};
var _callbacks = [];

var TaskStore = {
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

  all: function () {
    var returnTasks = [];
    for (var id in _tasks) {
      if (_tasks.hasOwnProperty(id)) {
        returnTasks.push(_tasks[id]);
      }
    }
    return returnTasks;
  },

  fetch: function () {
    // debugger;
    $.get("api/tasks", {}, function (tasks) {
      _tasks = {};
      tasks.forEach(function (task) {
        _tasks[task.id] = task;
      });
      TaskStore.changed();
    });
  },

  create: function (data) {
    $.post("api/tasks", {task: data}, function (task) {
      _tasks[task.id] = task;
      TaskStore.changed();
    });
  },

  destroy: function (id) {
    $.ajax({
      url: "api/tasks/" + id,
      type: "DELETE",
      success: function (result) {
        delete _tasks[result.id];
        TaskStore.changed();
      }
    });
  },

  toggleDone: function(id) {
    $.ajax({
      url: "api/tasks/" + id,
      type: "PATCH",
      success: function (result) {
        // debugger
        _tasks[result.id] = result;
        TaskStore.changed();
      }
    });
  }

};

module.exports = TaskStore;
