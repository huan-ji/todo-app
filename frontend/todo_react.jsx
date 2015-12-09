var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./components/task_list.jsx');

document.addEventListener("DOMContentLoaded", function() {
ReactDOM.render(<TaskList/>, document.getElementById('root'));
});
