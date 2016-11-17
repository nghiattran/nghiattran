function toggle(){
	if(document.getElementById("special").className=="special"){
		document.getElementById("special").className="special toggle";
		document.body.className="dark";
		document.getElementById("intro").className="intro dark";

	}else{
		document.getElementById("special").className="";
		document.getElementById("special").className="special";
		document.body.className="";
		document.getElementById("intro").className="";
		document.getElementById("intro").className="intro";
	};
}