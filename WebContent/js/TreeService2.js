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

function removeDuplicate(dataArr){
	
	var chekIdArr = [];
	var tempArr = [];
	
	for(i = 0 ; i < dataArr.length ; i ++){
		
		//alert(chekIdArr.indexOf(dataArr[i].id));
		//alert(chekIdArr.indexOf(dataArr[i].id) == -1);
		if(chekIdArr.indexOf(dataArr[i].id) == -1){
			chekIdArr.push(dataArr[i].id)
			tempArr.push(dataArr[i])
		}
		
	}
	return tempArr;		
	
}

//parent가 아닌것부터 부모를 찾아야 함.
function makeTree(dataArr){
	
	var isParentArr = [];
	var delList = [];
	var idDelList = [];
	//var chekIdArr = [];
	
	for(i = 0 ; i < dataArr.length ; i ++){
		if(isParentArr.indexOf(dataArr[i].parent) == -1){
			isParentArr.push(dataArr[i].parent);
		}
	}

	isParentArr.pop(0);
	//isParentArr 부모들

	for(i = 0 ; i < dataArr.length ; i ++){
		if(isParentArr.indexOf(dataArr[i].parent) != -1){//부모가 아닌 인덱스만.
			for(j = 0 ; j < dataArr.length ; j ++){//부모 찾기
				if(dataArr[i].id == dataArr[j].parent){
					//alert("dataArr[i].id" + dataArr[i].id  + "," + "dataArr[i].parent" +","+ dataArr[i].parent + "\n"
					//		+"dataArr[j].id" + dataArr[j].id  + "," + "dataArr[j].parent" +","+ dataArr[j].parent);  
					//dataArr[i].children.push(dataArr.pop(dataArr[j]));
					dataArr[i].children.push(dataArr[j]);
					delList.push(dataArr[j]);
					
				}
			}			
		}
	}

	for(i = delList.length -1 ; i > -1  ; i --){
		//alert(dataArr.indexOf(delList[i]));
		//idDelList.push(dataArr.pop(dataArr.indexOf(delList[i])));
		//dataArr.pop(dataArr.indexOf(delList[i]));
		if(dataArr.indexOf(delList[i])){
			list.splice(dataArr.indexOf(delList[i]), 1);
		}
			
		//test2 = idDelList;
		//dataArr.pop(dataArr.indexOf(delList[i]));
	}
	
	
	for(i = 0 ; i < dataArr.length ; i ++){
		if(dataArr.indexOf(dataArr[i].parent) != -1){
			
			//alert(dataArr[i].children[0].id);
		}
	}
	
	
	
	
	/*
	
	var tempArr = [];
	var chekIdArr = [];
	
	for(i = 0 ; i < dataArr.length ; i ++){
		
		if(chekIdArr.indexOf(dataArr[i].parent) == -1){
			chekIdArr.push(dataArr[i].id);
		}		
		
	}
	
	for(i = 0 ; i < dataArr.length ; i ++){
		
		if(chekIdArr.indexOf(dataArr[i].id) == -1){
			
			for(j = 0 ; j < dataArr.length ; j ++){
				
				if(dataArr[j].id == dataArr[i].parent){
					dataArr[j].children.push(dataArr[i]);
					//tempArr.push(dataArr[j]);
					break;
				}
				
			}
			
		}else{
			tempArr.push(dataArr[i]);
		}
		
	}*/
	
	return dataArr;	
}

//초기 화면 구성용
function init(){
	//upack(list);
	list = removeDuplicate(list);
	list = makeTree(list);	
	display();
}
window.onload = init;
