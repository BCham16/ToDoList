

const entry = document.querySelector('#taskInput');
const itemsUL = document.querySelector('#taskList');

//entry.addEventListener('keypress', function() {addItem(entry)})
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
  console.log(userSubmit);
  const newItem = document.createElement('li');
  newItem.innerHTML = `<input type="checkbox" class="completed"> >${userSubmit}<`;
  itemsUL.appendChild(newItem);
  clearAll();
}


