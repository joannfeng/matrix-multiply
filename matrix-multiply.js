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
    initMatrix(m1row.value, m1col.value);
    initMatrix(m2row.value, m2col.value);
}

function isInt(x, id) {
    if (Number.isInteger(parseInt(x)))
        document.getElementById(id).innerHTML = x;
    else
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

function initMatrix(rows, columns) {
    var matrix = new Array(rows);

    for(var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(columns);
    }

    //document.getElementById("demo6").innerHTML = matrix;
    //console.log(matrix);
}

// next time, try to display inputs in the shape of the matrix