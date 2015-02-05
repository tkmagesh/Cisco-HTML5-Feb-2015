function doWork(){
		for(var i=0;i<10000;i++)
			for(var j=0;j<10000;j++)
				for(var k=0;k<100;k++){}
	}

var exeCount = 0;
self.addEventListener("message", function(msgEvtArg){
	if (msgEvtArg.data === "start"){
		doWork();
		++exeCount;
		self.postMessage({ type : "done", count : exeCount});
	} else {
		console.log("Unknown message received");
	}

})
