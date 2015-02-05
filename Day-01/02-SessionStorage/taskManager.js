



	window.addEventListener("DOMContentLoaded", init);
	function init(){
		document.getElementById("btnAddTask").addEventListener("click", onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
		taskStorage.getAll();
	}
	
	function onBtnAddTaskClick(){
		var taskName = document.getElementById("txtTask").value;
		
		var taskId = new Date().valueOf().toString();
		taskStorage.add(taskId, taskName);
		addTaskToList(taskId, taskName);
	}
	function addTaskToList(taskId, taskName){
		var taskItem = document.createElement("li");
		taskItem.setAttribute("taskId", taskId);
		taskItem.innerHTML = taskName;
		taskItem.addEventListener("click", onTaskItemClick);
		document.getElementById("olTaskList").appendChild(taskItem);
	}
	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
	}
	function onBtnRemoveCompletedClick(){
		var taskItems = document.getElementById("olTaskList").children;
		for(var i=taskItems.length-1; i>=0;i--)
			if (taskItems[i].classList.contains("completed")){
				var taskId = taskItems[i].getAttribute("taskId");
				taskStorage.remove(taskId);
				taskItems[i].remove();
			}
	}