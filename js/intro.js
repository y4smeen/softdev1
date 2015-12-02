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

var ButtonCallback = function(e){
    console.log(e)
};

var b = Document.getElementById('b');
b.addEventListener('click',buttonCallback);

var b2Callback = function(e){
    e.preventDefault();
    removeItem(0);
};
document.getElementById('b2').addEventListener('click',b2Callback);

var thelist = document.getElementById("thelist");
var items = thelist.children;

var redCallback = function(e){
    console.log(this);
};

var addMouseEvents = function(item){
    item.addEventListener('mouseover',function(e){
	    this.classList.remove('green');
	    this.classList.add('blue');
    });
    item.addEventListener('mouseout',function(e){
	    this.classList.remove('blue');
	    this.classList.remove('green');
    });
};

for (var i=0l i<items.length; i++){
    addMouseEvents(items[i]);
}