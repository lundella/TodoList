window.onload = function () {
  var list = [];
  var todo = document.getElementById('todo');

  todo.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {
      list.push(todo.value);
      todo.value = '';
    }
  });


};