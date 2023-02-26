const addBtn = document.getElementsByClassName("add-btn");
const todo = document.getElementById("todo");

addBtn[0].addEventListener("click",add);

function add(){
	let task = document.getElementById("add-area").value;
	if(task){
		let elem = document.createElement("li");
		elem.innerHTML = `${task}<button onclick = "del(this)">完了</button>`;
		todo.appendChild(elem);
		document.getElementById("add-area").value = "";
	}else{
		alert("空欄です！");
	}
}
function del(delTask){
	delTask.parentNode.remove();
}

