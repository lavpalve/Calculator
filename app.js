
function input(num){
	document.getElementById('textInput').value = document.getElementById('textInput').value + num;
}
function clear1(){
	var x = document.getElementById('textInput').value;
	document.getElementById('textInput').value = x.substring(0,x.length-1);
}
function clearAll(){
	document.getElementById('textInput').value = "0";
}
function add(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '+';
	var a =  document.getElementById('textInput').value;
	var b = 0;
	var c = 0;
	var d = 0;
	if(a.indexOf('+') != a.lastIndexOf('+')){               //05+5+  = 10
		c = a.indexOf('+');
	 	d += parseInt(a.substring(b,c));
		d += parseInt(a.substring(c+1,a.length));
	}
	console.log(d);
	if(d != 0) {
		document.getElementById('textInput').value = d + '+';
	}
}
var e = 0;
function sub(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '-';
	var a =  document.getElementById('textInput').value;
	var b = 0;
	var c = 0;
	var d = 0;
	var f = '';
	if(a.indexOf('-') == 0){
	   d = parseInt(a.substring(b+1,a.length)); 
		console.log('d='+d);
	   f = d.toString();                                        // -5-3- =  -8-3-
		console.log('f='+ f.length);
		d = d + parseInt(a.substring(f.length+2,a.length));
		console.log('d1='+'-'+d);
		if(d != 0) {
			document.getElementById('textInput').value ='-'+ d + '-';
		}
	}else if(a.indexOf('-') != a.lastIndexOf('-')){               //05-5-  = 0
		c = a.indexOf('-');
	 	d = parseInt(a.substring(b,c));                      //-15-5- = 0
		d -= parseInt(a.substring(c+1,a.length));            //05-5-  = 0
		console.log(d);
		if(d != 0) {
			document.getElementById('textInput').value = d + '-';
		}else if(d == 0 && e > 0 ){
			document.getElementById('textInput').value = d + '-';
		}
	}
	e = e + 1;
	
}
function mult(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '*';
	var a =  document.getElementById('textInput').value;
	var b = 0;
	var c = 0;
	var d = 0;
	if(a.indexOf('*') != a.lastIndexOf('*')){               //05*5*  = 25
		c = a.indexOf('*');
	 	d = parseInt(a.substring(b,c));
		d = d * parseInt(a.substring(c+1,a.length));
	}
	console.log(d);
	if(d != 0) {
		document.getElementById('textInput').value = d + '*';
	}
	
}function div(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '/';
	var a =  document.getElementById('textInput').value;
	var b = 0;
	var c = 0;
	var d = 0;
	if(a.indexOf('/') != a.lastIndexOf('/')){               //05/5/  = 1
		c = a.indexOf('/');
	 	d = parseInt(a.substring(b,c));
		d = d / parseInt(a.substring(c+1,a.length));
	}
	console.log(d);
	if(d != 0) {
		document.getElementById('textInput').value = d + '/';
	}
	
}
var g = 0;
function rem(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '%';
	var a =  document.getElementById('textInput').value;
	var b = 0;
	var c = 0;
	var d = 0;
	if(a.indexOf('%') != a.lastIndexOf('%')){               //05%5%  = 0
		c = a.indexOf('%');
	 	d = parseInt(a.substring(b,c));
		d = d % parseInt(a.substring(c+1,a.length));
	}
	console.log(d);
	if(d != 0) {
		document.getElementById('textInput').value = d + '%';
	}else if(d == 0 && g > 0){
		document.getElementById('textInput').value = d + '%';
	}
	g = g + 1;
}
function equal(){
	let x = document.getElementById('textInput').value;
	let y = eval(x);
	document.getElementById('textInput').value = y;
}
function dot(){
	document.getElementById('textInput').value = document.getElementById('textInput').value + '.';
}