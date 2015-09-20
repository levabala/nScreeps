var globals = require('globals');
var spawn = require('spawn');

function takeEnergy(creep){
	var room = globals.getRoomCreep(creep);
	if(creep.room.storage){
		if(creep.pos.isNearTo(creep.room.storage)){
       		creep.room.storage.transferEnergy(creep);
    	}
    	else{
    		creep.moveTo(creep.room.storage);
    	}
   	}
   	else{
		var allCount = spawn.allCount;
   	    if(spawn.needAllCreepsInRoom <= allCount.length){
       		var spawn = globals.getSpawn(room);
       		if(creep.pos.isNearTo(spawn[0])){
          	    spawn[0].transferEnergy(creep);
       		}
       		else{
       		    creep.moveTo(spawn[0]);
       		}
   	    }
   	}
}

function suicideCreep(creep){
	if(creep.ticksToLive < globals.suicideCreepTick){
	    var room = globals.getRoomCreep(creep);
		var spawn = globals.getSpawn(room);
		if(creep.pos.isNearTo(spawn[0])){
			creep.transferEnergy(spawn[0]);
			creep.suicide();
		}
		else{
			creep.moveTo(spawn[0]);
		}
		cleanMemory();
		return 1;
	}
	return 0;
}

function cleanMemory(){
	for(var creep in Memory.creeps){
        if(!Game.creeps[creep]){
            if(Memory.creeps[creep].safeToDelete){
                delete Memory.creeps[creep];
            } 
            else {
                Memory.creeps[creep].safeToDelete = true;
            }
        }
    }    
}


module.exports = {
	takeEnergy: takeEnergy,
	suicideCreep: suicideCreep
}
