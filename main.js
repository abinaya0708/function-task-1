
document.write("--Function for Operators--");
document.write("<br>");
document.write("<br>");

document.write("Numbers---10,20,30");
document.write("<br>");
document.write("<br>");

function add(a,b,c){
	v=a+b+c;
	return v;
}
function sub(a,b,c){
	v=a-b-c;
	return v;
}
function multi(a,b,c){
	v=a*b*c;
	return v;
}
function division(a,b,c){
	v=a/b/c;
	return v;
}
function modulo(a,b,c){
	v=a%b%c;
	return v;
}

// function calling

document.write("--Adding three numbers--");
document.write("<br>");
 var x=add(10,20,30);
 document.write(x);
 document.write("<br>");
 document.write("<br>");
 
 
 
 
 document.write("--Subtracting three numbers--");
document.write("<br>");
 var x=sub(10,20,30);
 document.write(x);
 document.write("<br>");
 document.write("<br>");
 
 
 document.write("--Multiplying three numbers--");
document.write("<br>");
 var x=multi(10,20,30);
 document.write(x);
 document.write("<br>");
 document.write("<br>");
 
 
 
 document.write("--Dividing three numbers--");
document.write("<br>");
 var x=division(10,20,30);
 document.write(x);
 document.write("<br>");
 document.write("<br>");
 
 
 
 
 document.write("--Modulo of three numbers--");
document.write("<br>");
 var x=modulo(10,20,30);
 document.write(x);
 document.write("<br>");
 document.write("<br>");