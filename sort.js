 function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("roster");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
        var xContent = (isNaN(x.innerHTML)) 
          ? (x.innerHTML.toLowerCase() === '-')
            ? 0 : x.innerHTML.toLowerCase()
          : parseFloat(x.innerHTML);
        var yContent = (isNaN(y.innerHTML)) 
          ? (y.innerHTML.toLowerCase() === '-')
            ? 0 : y.innerHTML.toLowerCase()
          : parseFloat(y.innerHTML);

if (x.innerHTML == "" && dir == "asc") {
  x.innerHTML = "999";
  x.style.color = "rgba(0, 0, 0, 0)";
}

        if (dir == "asc") {
          if (xContent > yContent) {
            shouldSwitch= true;
            break;
          }
        }
        else if (dir == "desc") {
          if (xContent < yContent) {
            shouldSwitch= true;
            break;
          }
        }
      }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
