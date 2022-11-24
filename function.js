
function sh1() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
  var y = document.getElementById("myInput");
  y.style.display = "none";
}



document.getElementById('add-to-list').onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('li');
  newLI.innerHTML = 'A new item';
  list.appendChild(newLI);
  setTimeout(function() {
    newLI.className = newLI.className + " show";
  }, 10);
}
