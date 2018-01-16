window.onload = function () {
  var listStorage = [];
  var todo = document.getElementById('todo');

  todo.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {
      listStorage.push(todo.value);
      todo.value = '';

      loadData(listStorage);
    }
  });

  var loadData = function (list) {
    var listStorage = list;
    var listDom = document.getElementById('list');

    if(!listStorage) {return;}

    listStorage.forEach(function (item, index) {
      var listItem = document.createElement('p');
      var textItem = document.createTextNode(index+1 + '. ' + item);

      listItem.className = 'list-item';
      listItem.appendChild(textItem);
      listDom.appendChild(listItem);
    });
  }
};