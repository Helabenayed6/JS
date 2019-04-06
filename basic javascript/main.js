function mettreEnGras() {
	 document.getElementById("text").style.fontWeight = 'bold';
	}
function mettreItalic(){
document.getElementById("text").style.fontStyle='italic';}

function underlineOverline(){
	document.getElementById("text").style.textDecoration='underline';}

function salut(listtaille) {
	document.getElementById("text").style.fontSize=listtaille.value;
}

function hello (listfont) {
	document.getElementById("text").style.fontFamily=listfont.value;
}