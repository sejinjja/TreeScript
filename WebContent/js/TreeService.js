/**
 * 
 */

//태그에 현재 리스트 출력
function display() {
	document.getElementById("tree").innerHTML = JSON
			.stringify(list, null, '\t');
}


//TreeArray Unpack
function upack(mayTA) {

	var terminals = []

	for (i = 0; i < list.length; i++)
		terminals.push(false);

	while ((NTidx = terminals.indexOf(false)) != -1) {

		if (mayTA[NTidx].children.length == 0)
			terminals[NTidx] = true;
		else {
			terminals[NTidx] = true;
			for (i = 0; i < mayTA[NTidx].children.length; i++)
				terminals.push(false);
			while((tmp = mayTA[NTidx].children.pop()) != undefined)
				mayTA.push(tmp);
		}
	}

}

//초기 화면 구성용
function init(){
	upack(list);
	display();
}
window.onload = init;
