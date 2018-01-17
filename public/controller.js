window.onload = function () {
  var listStorage = ['reading', 'writing'];
  var todo = document.getElementById('todo');
  var listDom = document.getElementById('list');
  var createListItem = function (index, item) {
      var checkbox;
      var removeButton;
      var listItem;
      var textItem;
      checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      removeButton = document.createElement('button');
      removeButton.innerHTML = 'X';
      removeButton.className = 'close-button';

      removeButton.onclick = function () {
          console.log('remove button clicked!!');
          var listDom = document.getElementById('list');

          listDom.removeChild(listItem);
      };

      listItem = document.createElement('div');
      textItem = document.createTextNode(index + '. ' + item);

      listItem.className = 'list-item';
      listItem.appendChild(checkbox);
      listItem.appendChild(textItem);
      listItem.appendChild(removeButton);

      return listItem;
  };

  var loadData = function (list) {
      var listStorage = list;
      var listDom = document.getElementById('list');

      if(!listStorage) {return;}

      listStorage.forEach(function (item, index) {
          listDom.appendChild(createListItem(index+1, item));
      });
  };

  loadData(listStorage);

  todo.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {
      var item;

      listStorage.push(todo.value);

      item = createListItem(listStorage.length, todo.value);
      listDom.appendChild(item);

      todo.value = '';
    }
  });




};