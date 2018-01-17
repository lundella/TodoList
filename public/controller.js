window.onload = function () {
  var listStorage = ['reading', 'writing'];
  var todo = document.getElementById('todo');
  var listDom = document.getElementById('list');
  function createListItem(index, name) {
      var checkbox;
      var removeButton;
      var listItem;
      var textItem;
      var textArea;

      checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      removeButton = document.createElement('button');
      removeButton.innerHTML = 'X';
      removeButton.className = 'close-button';

      removeButton.onclick = function () {
        listStorage.forEach(function (item, index) {
          if(item === name) {
            listStorage.splice(index, 1);
          }
        });

        listDom.removeChild(listItem);
        console.log(listStorage);
      };

      listItem = document.createElement('div');
      textArea = document.createElement('p');
      textItem = document.createTextNode(name);

      textArea.appendChild(textItem);

      listItem.className = 'list-item';
      listItem.appendChild(checkbox);
      listItem.appendChild(textArea);
      listItem.appendChild(removeButton);

      return listItem;
  }

  function loadData(list) {
      var listStorage = list;
      var listDom = document.getElementById('list');

      if(!listStorage) {return;}

      while(listDom.hasChildNodes()) {
        listDom.removeChild(listDom.lastChild);
      }

      listStorage.forEach(function (item, index) {
          listDom.appendChild(createListItem(index, item));
      });
  }

  loadData(listStorage);

  todo.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {

      listStorage.push(todo.value);

      listDom.appendChild(createListItem(listStorage.length, todo.value));
      console.log(listStorage);

      todo.value = '';
    }
  });
};