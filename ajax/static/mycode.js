console.log("HELLO");

var demo1 = function demo1(){
  $.get("static/datafile",function(d){
    console.log("we got: "+d);

  });
  console.log("back from getstuff");
};
