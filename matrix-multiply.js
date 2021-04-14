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

    createForm_S();
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

/***

Changes:
### LINE 19 ### Changed code to use my functions 

How to Read:
Basically all my code does is it takes the data from your first section and creates two "matrices" and a submit button from them.
1. Start with createForm_S(). This function acts as a top level section that organizes the rest of the group. 
It creates a form and appends the matrices and their outputs to the form (the submit button as well).
createForm_S() calls tableCreate_S() and getRowCol() which just create new tables and get table dimensions respectively.

2. When you submit this multiply button, it activates the getFormOutput_S(). This is where you'd technically 
handle the input that you get from matrices as well as all the error-handling.

Notes:
1. Good Practice for Javascript includes using eventListeners and callback functions, but that's just a note for the future.
These concepts are slightly more difficult, and I'd feel better teaching them in person. Otherwise your code looks great!
My only criticism is that if you are following a more C-like format, try making your function more modular (as in return inputs and outputs).
For example, I'd have only one main function that deals with the body of the document. That makes it easier to keep track of everything!
2. Hopefully you're using the chrome console to debug. That makes life so much easier!!!!! CTRL_SHIFT_I
3. New stuff to learn would probably be event listeners and CSS (to make styling easier)
4. GREAT JOB CODE LOOKS GOOD

***/

/* Just a fancier/more specific version of get_input()
    this version just outputs the dimensions of both as a JS object, which is just a boneless class!
*/
function getRowCol(){
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

    /* I'm returning a javascript object, but think of it as more of a
    struct or a more fun dictionary!
    EX code involving getRowCol() ->
    `
    var sus = getRowCol();
    sus.row1 <-- should get u m1row.value!
    `
    */
    return {
        row1: m1row.value,
        col1: m1col.value,
        row2: m2row.value,
        col2: m2col.value
    }
}

/* instead of instantly adding a table to the body, let this function create an instance of a table to use later :)
    that way, you can easily append it to the form rather than the body.
*/
function tableCreate_S(rows, columns) {
    
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

    return tbl
}
/*
This function creates the form <-- as such it is probably the top most level of my added code. It's the one 
that calls all the others
*/
function createForm_S() {
    var body = document.body // get body from Browser
    form = document.createElement('form') // create a form <form> ... </form>
    form.id = "two_matrix";
    var dim = getRowCol(); // I'm getting the dimensions of the two matrices
    var mat1 = tableCreate_S(dim.row1, dim.col1); // Creating <table>...</table> elements for both matrices
    var mat2 = tableCreate_S(dim.row2, dim.col2);
    
    var submit = document.createElement('button'); // these lines create the submit button
    submit.innerHTML = "Multiply";
    submit.type = "button"; // THIS IS SUPER IMPORTANT <-- buttons inside forms automatically refresh on submit, so you need to make sure the type is button so it doesn't
    submit.onclick = getFormOutput_S; // the reason why I don't put getFormOutput_S() is because the parentheses tells the program to actually run the function when I just need to pass the function itself.

    form.appendChild(mat1); // appends everything. Think of it kind of like a tree ...
    form.appendChild(mat2);
    form.appendChild(submit);
    body.append(form);
}
/*
Here's my function to handle my output!
- inputs is an object that contains pairs that have all the values of the inputs inside them
- you can either return the inputs as an object to mess with later or perform your matrix 
multiplication inside your function to handle getting the output of the getFormOutput
*/
function getFormOutput_S(){
    form = document.getElementById("two_matrix"); // gets the form using its ID
    var inputs = form.getElementsByTagName('input'); // gets every single element that includes the tag-name INPUT
    for (let input of inputs){  // should print out to console the IDs and Values(ctrl-shift-I)
        console.log(input.id);
        console.log(input.value);
    }
}