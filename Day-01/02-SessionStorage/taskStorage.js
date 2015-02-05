var taskStorage = (function(){
		var storage = window.sessionStorage;
		function loadTasksFromStorage(){
			for(var i=0;i<storage.length;i++){
				var taskId = storage.key(i);
				var taskName = storage.getItem(taskId);
				addTaskToList(taskId, taskName);
			}
		}

		function addTask(taskId, taskName){
			storage.setItem(taskId, taskName);
		}
		function removeTask(taskId){
			storage.removeItem(taskId);
		}
		return {
			getAll : loadTasksFromStorage,
			add : addTask,
			remove : removeTask
		}
	})();