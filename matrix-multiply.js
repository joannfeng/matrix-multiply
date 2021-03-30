// type in # of rows and columns
// (# of columns of m1 --> # of rows of m2), lock
// perform mm and display result on html page

function get_input() {
    // check if int input
    var m1row = document.getElementById("m1-row");
    isInt(m1row.value, "demo1");
    var m1col = document.getElementById("m1-col");
    isInt(m1col.value, "demo2");
    var m2row = document.getElementById("m2-row");
    isInt(m2row.value, "demo3");
    var m2col = document.getElementById("m2-col");
    isInt(m2col.value, "demo4");

    // # of columns of m1 --> # of rows of m2 (must match)
    isValid(m1col.value, m2row.value, "demo5");

    // make each matrix
    tableCreate(m1row.value, m1col.value);
    tableCreate(m2row.value, m2col.value);
}

function isInt(x, id) {
    /*if (Number.isInteger(parseInt(x)))
        document.getElementById(id).innerHTML = x;
    else
        document.getElementById(id).innerHTML = "not an int";*/
    if (!Number.isInteger(parseInt(x)))
        document.getElementById(id).innerHTML = "not an int";
}

function isValid(m1col, m2row, id) {
    if (m1col != m2row) {
        document.getElementById(id).innerHTML = 
            "Number of columns from m1 does not match number of rows from m2.";
        return false;
    } else {
        document.getElementById(id).innerHTML = "";
        return true;
    }
}

// next time, try to display inputs in the shape of the matrix
function tableCreate(rows, columns) {
    var body = document.body,
        tbl  = document.createElement('table');
        tbl.style.width  = '100px';
        tbl.style.border = '1px solid black';
        tbl.style.justifySelf = 'center';

    for (var i = 0; i < rows; i++) {
        var tr = tbl.insertRow();
        for(var j = 0; j < columns; j++) { 
            var td = tr.insertCell();
            var input = document.createElement("input");
            input.type = "number";
            input.id = "matrix [" + i + "," + j + "]";
            td.appendChild(input);
        }
    }
    
    body.appendChild(tbl);
    body.appendChild(document.createTextNode( '\u00A0' )); // create blank space
    document.getElementById("matrix").innerHTML = "<button onclick=\"get_input()\">Submit</button>";
}