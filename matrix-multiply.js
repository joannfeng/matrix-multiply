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
    document.getElementById("mat1").innerHTML = "hello there general kenobi";
    document.getElementById("mat1").innerHTML = "<form id=\"mat1\">";
    for (var i = 0; i < m1row.value; i++) {
        for(var j = 0; j < m1col.value; j++) { 
            document.getElementById("mat1").innerHTML = "<input type=\"text\" id=\"1[\" + i + \",\" + j + \"]\" name=\"[\" + i + \",\" + j + \"]\">";
        }
        document.getElementById("mat1").innerHTML = "<br><br>"
    } 
    document.getElementById("mat1").innerHTML = "<input type=\"submit\" value=\"Submit\">";
    document.getElementById("mat1").innerHTML = "</form>";

    document.getElementById("mat2").innerHTML = "<form id=\"mat2\">";
    for (var i = 0; i < m2row.value; i++) {
        for(var j = 0; j < m2col.value; j++) {
            document.getElementById("mat2").innerHTML = "<input type=\"text\" id=\"2[\" + i + \",\" + j + \"]\" name=\"[\" + i + \",\" + j + \"]\">"; 
        }
        document.getElementById("mat2").innerHTML = "<br><br>"
    } 
    document.getElementById("mat2").innerHTML = "<input type=\"submit\" value=\"Submit\">";
    document.getElementById("mat2").innerHTML = "</form>";

    /*
    tableCreate(m1row.value, m1col.value, "mat1");
    tableCreate(m2row.value, m2col.value, "mat2");

    document.getElementById("matrices").innerHTML = 
        "<button onclick=\"getMatValues(" + mat1 + ")\">Submit Matrix</button>";

    var mat1 = getMatValues("mat1");
    var mat2 = getMatValues("mat2");

    document.getElementById("matrices").innerHTML = "mat1";
    document.getElementById("matrices").innerHTML = "mat2";
    */
}

function isInt(x, id) {
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

function tableCreate(rows, columns, id) {
    var body = document.body,
        tbl  = document.createElement('table');
        tbl.style.width  = '100px';
        tbl.style.border = '1px solid black';
        tbl.style.justifySelf = 'center';
        tbl.id = id;
        tbl.class = "here";

    for (var i = 0; i < rows; i++) {
        var tr = tbl.insertRow();
        for(var j = 0; j < columns; j++) { 
            var td = tr.insertCell();
            var input = document.createElement("input");
            input.type = "number";
            input.id = "mat [" + i + "," + j + "]";
            td.appendChild(input);
        }
    }
    
    body.appendChild(tbl);
    body.appendChild(document.createTextNode( '\u00A0' )); // create blank space
}

function getMatValues(id) {
    document.getElementById("matrices").innerHTML = "hewwo";
    /*var data = []; 
    var table = document.getElementById(id); 
    var input = table.getElementsByTagName('input'); 
    for (var z = 0; z < input.length; z++) { 
        data.push(input[z].id);
    }
    return data;*/

    var a=[];
    $('input:text').each(function(){
        a.push($(this).attr('name'))
    })
    console.log(a)
}