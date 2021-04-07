
function decToHex(n)
{ 
 if(n<16){
 var x=Number(n).toString(16);
 return "0"+x;
}
 else{
 return Number(n).toString(16); 
}
}
function Rec() {
  var R=document.inp.R.value;
  var G=document.inp.G.value;
  var B=document.inp.B.value;
  var C="#"+ decToHex(R)+decToHex(G)+decToHex(B);
  var Cell=document.getElementById("color");
  Cell.bgColor= C;
  }
function Change() {
  var Cell=document.getElementById("color");
  document.bgColor=Cell.bgColor;
}
