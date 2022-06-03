

const entry = document.querySelector('#taskInput');
const itemsUL = document.querySelector('#taskList');
var checkboxes = document.querySelectorAll('input[type=checkbox]');

entry.addEventListener('keypress', function(x) {
  if (x.key == 'Enter'){
    if (!this.value) return;
    addItem(this.value);
  }
})


function clearAll(){
  entry.value = '';
}

function addItem(userSubmit){
  const newItem = document.createElement('li');
  newItem.innerHTML = `<input type="checkbox" 
  class="completed"> >${userSubmit}<`;
  itemsUL.appendChild(newItem);
  clearAll();
  updateCheckboxes();
}

function updateCheckboxes(){
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  var completedItems = [];
  //console.log(checkboxes);
  checkboxes.forEach(function(cb){
    cb.addEventListener('change', function(){
      if (cb.checked){
        // completedItems.push(cb.parentElement);
        // console.log(cb.parentElement.textContent);
        //console.log(completedItems);
        cb.parentElement.style.setProperty(
          'text-decoration', 'line-through');
      }
      else {
        // completedItems.pop(cb.parentElement);
        // console.log(cb.parentElement.textContent);
        //console.log(completedItems);
        cb.parentElement.style.setProperty(
          'text-decoration', 'none');
      }
    })
  })
  
}



