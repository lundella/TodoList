window.onload = function () {
  var listStorage = ['reading', 'writing'];
  var todo = document.getElementById('todo');
  var listDom = document.getElementById('list');

  function createListItem(index, name) {
      var listItem = document.createElement('div');
      var textItem = document.createTextNode(name);
      var textArea = document.createElement('p');

      var checkbox = createCheckbox(listItem);
      var removeButton = createRemoveButton(listItem);

      textArea.appendChild(textItem);
      listItem.className = 'list-item';
      listItem.appendChild(checkbox);
      listItem.appendChild(textArea);
      listItem.appendChild(removeButton);

      return listItem;
  }

  function createCheckbox(listItem) {
      var checkbox;
      var doList = document.getElementById('list');
      var doneList = document. getElementById('done');

      checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      checkbox.onclick = function () {
          var self = this;
          var checked = false;

          if(self.getAttribute('checked') !== "true") {
              checked = true;
              doneList.appendChild(listItem);
          } else {
              doList.appendChild(listItem);
          }

          self.setAttribute('checked', checked);
      };

      return checkbox;
  }

  function createRemoveButton(listItem) {
      var removeButton;

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
      };

      return removeButton
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

  // 항목 추가 기능
  todo.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {

      listStorage.push(todo.value);

      listDom.appendChild(createListItem(listStorage.length, todo.value));

      todo.value = '';
    }
  });
};