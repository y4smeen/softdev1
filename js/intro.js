
console.log("HELLO, JS loaded");

var x = 20;

var l = [10,20,'hello',30];

var d = {
    'k1': 'value 1',
    k2 : 123,
    123: [1,2,3,4,5]
};

function f(n){
    var x = 30;
    console.log("In f: " + x + n);
} // definition doesn't need semicolon

var fact = function fact (n){
    var prod=1;
    for ( ; n>1; n--){
	prod = prod * n;
    }
    return prod;
}; // declaration/statement needs semicolon

var addItem = function addItem(s){
    var l = document.getElementByID("thelist");
    var n = document.createElement("li");
    n.innerHTML = s;
    l.appendChild(n);
};

var removeItem = function removeItem(n){
    var items = document.getElementsByTagName("li");
    items[n].remove();
};