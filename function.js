
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function showHide() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function sh1() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}

function hideItems() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
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