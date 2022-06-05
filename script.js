

function addItem(userSubmit){
  const newItem = document.createElement('li');
  newItem.innerHTML = `<input type="checkbox"> ${userSubmit}`;
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


function showTime(){
  const date = document.getElementById('date')
  const weekDay = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ];
  const month = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ];

  const today = new Date(); 
  let dayToPrint = weekDay[today.getDay()]; 
  let monthToPrint = month[today.getMonth()];
  
  let descriptor = new String;
  let temp = today.getDate();
  if (temp == 1){descriptor = 'st'}
  else if (temp == 2){descriptor = 'nd'}
  else if (temp == 3){descriptor = 'rd'}
  else if (temp > 20 && temp % 10 == 1){descriptor = 'st'}
  else if (temp > 20 && temp % 10 == 2){descriptor = 'nd'}
  else if (temp > 20 && temp % 10 == 3){descriptor = 'rd'}
  else {descriptor = 'th'}
  let dayOfMonth = String(temp) + String(descriptor);
  
  let yearToPrint = today.getFullYear();
  
  date.textContent = `${dayToPrint}, ${monthToPrint} 
  ${dayOfMonth} ${yearToPrint}`;
}

entry.addEventListener('keypress', function(x) {
  if (x.key == 'Enter'){
    if (!this.value) return;
    addItem(this.value);
  }
})

clearButton.addEventListener('click', function(){clearTasks()})

showTime()