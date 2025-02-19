//your JS code here. If required
let color=document.querySelector("#colorSelect")
let remove=document.querySelector('input[type="button"]')
remove.addEventListener("click", ()=>{
	let selectedIndex=color.selectedIndex;
	if(selectedIndex != -1){
	color.remove(selectedIndex)
	}

})