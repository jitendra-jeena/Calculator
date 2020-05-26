function res(val){
	document.getElementById("result_display").value += val;
	
	
}
function clr() {
	
	document.getElementById('result_display').value = "";
}

function answer(val){
	var eq = document.getElementById('result_display').value ;
	try{
		var sol = eval(eq)
		document.getElementById('result_display').value= sol;
	}
	catch{
		alert("Invalid Syntax")
	}
}