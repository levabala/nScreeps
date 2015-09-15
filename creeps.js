var global = require('global');

function takeEnergy(creep){
	var room = global.getRoomCreep(creep);
	if(creep.room.storage){
		if(creep.pos.isNearTo(creep.room.storage)){
       		creep.room.storage.transferEnergy(creep);
    	}
    	else{
    		creep.moveTo(creep.room.storage);
    	}
   	}
   	var spawn = global.getSpawn(creep);
   	else{
   		creep.moveTo(spawn);
      	spawn.transferEnergy(creep);
   	}
}

function suicideCreep(creep){
	if(creep.ticksToLive < global.suicideCreepTick){
		global.getSpawn(creep);
		if(creep.pos.isNearTo(getSpawn)){
			creep.transferEnergy(getSpawn);
			creep.suicide();
		}
		else{
			creep.moveTo(getSpawn);
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
	suicideCreep: suicideCreep,
	controlRoom: controlRoom
}
