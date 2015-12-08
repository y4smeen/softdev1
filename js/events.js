var thluffy = document.getElementById("thluffy");
console.log(thluffy);

window.addEventListener("mousemove", function(e) {
  if (e.pageX > 550) {
    thluffy.src="thluffy-right.jpg";
  } else {
    thluffy.src="thluffy-left.jpg";
  }
});

var count=1;
var addItem = function addItem(){
  var l = document.getElementById("thelist");
  var n = document.createElement("li");
  n.innerHTML="Item: "+count;
  count=count+1;
  l.appendChild(n);
}

var doStuff = function doStuff(){
  addItem();
}
