// const Array_study = require('./array');

// Array_study.array_Access();


var DiskList = DiskList || {};

DiskList = function(){
	this.dataStore = [1,"apple",5,"fifaonline"];
	this.addElement = function(element){
            if( !isNaN(element) ){
			for (var i = 0; i < this.dataStore.length; ++i){
				if (this.dataStore[i] < element){
					this.dataStore.push(element);
					console.log(this.dataStore);
					return;
				}
			}
            }else{
			let checklist = this.dataStore;
			checklist.push(element);
			let checkNum = checklist.length-1;
			checklist.sort();
			if(checklist[checkNum]===element){
				this.dataStore=checklist;
				console.log(this.dataStore);
				return;
			}

            }
	}
};

var firstDisk = new DiskList();
firstDisk.addElement(6);
firstDisk.addElement("zman");
