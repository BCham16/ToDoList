

function addItem(userSubmit){
  const newItem = document.createElement('li');
  newItem.innerHTML = `<input type="checkbox"> > ${userSubmit} <`;
  itemsUL.appendChild(newItem);
  entry.value = '';
  updateCheckboxes();
}

function updateCheckboxes(){
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function(cb){
    cb.addEventListener('change', function(){
      if (cb.checked){
        cb.parentElement.style.setProperty('text-decoration', 'line-through');
      }
      else {cb.parentElement.style.setProperty('text-decoration', 'none');
      }
    })
  }) 
}

function clearTasks(){
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function(cb){
    if(cb.checked){
      const toRemove = cb;
      toRemove.parentElement.removeChild(toRemove.nextSibling);
      toRemove.parentElement.removeChild(toRemove);
    }
  })
}

const entry = document.querySelector('#taskInput');
const itemsUL = document.querySelector('#taskList');
const clearButton = document.querySelector('#clearTasks')

entry.addEventListener('keypress', function(x) {
  if (x.key == 'Enter'){
    if (!this.value) return;
    addItem(this.value);
  }
})

clearButton.addEventListener('click', function(){clearTasks()})