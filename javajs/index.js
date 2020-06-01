

/*function myf(){

var x=document.querySelector("h1");
x.classList.add("tofu");




};

function myF(){

  var x=document.querySelector("h1");
  x.classList.remove("tofu");
  
  
  
  
  };


  var a=document.querySelector("h2");
  a.addEventListener("mouseover",myq);
  function myq(){

a.classList.add("tofu");

  };

  var a=document.querySelector("h2");
  a.addEventListener("mouseout",myp);
  function myp(){

a.classList.remove("tofu");

  };*/
  function light(value){
var pic;
if(value==0){
pic="off.jpg";

}else{
  pic="on.jpg";
}

document.querySelector(".bulb").src=pic;

  }
