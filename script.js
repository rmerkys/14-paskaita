function pridejimas() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    if (fname.length !== 0 && lname.length !== 0 && age > 0) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        document.getElementById("myForm").reset();
    } else {
        alert("Įveskite duomenis")
    }

  }

  function myFirstDeleteFunction() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    if (rowCount > 1) {
        document.getElementById("myTable").deleteRow(1);
    } else {
        alert("Nebėra ką trinti")
    }
  }

  function myLastDeleteFunction() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    if (rowCount > 1) {
        document.getElementById("myTable").deleteRow(-1);
    } else {
        alert("Nebėra ką trinti")
    }
  }

