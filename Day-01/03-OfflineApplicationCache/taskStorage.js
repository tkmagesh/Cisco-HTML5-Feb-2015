var taskStorage = (function(){
		function loadTasksFromStorage(){
			for(var i=0;i<window.localStorage.length;i++){
				var taskId = window.localStorage.key(i);
				var taskName = window.localStorage.getItem(taskId);
				addTaskToList(taskId, taskName);
			}
		}

		function addTask(taskId, taskName){
			window.localStorage.setItem(taskId, taskName);
		}
		function removeTask(taskId){
			window.localStorage.removeItem(taskId);
		}
		return {
			getAll : loadTasksFromStorage,
			add : addTask,
			remove : removeTask
		}
	})();