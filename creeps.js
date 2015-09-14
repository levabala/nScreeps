var global = require('global');

function takeEnergy(creep){
	var room = global.room(creep);
	if(creep.room.storage){
		if(creep.pos.isNearTo(creep.room.storage)){
       		creep.room.storage.transferEnergy(creep);
    	}
    	else{
    		creep.moveTo(creep.room.storage);
    	}
   	}
   	global.getSpawn(creep);
   	else{
   		creep.moveTo(getSpawn);
      	getSpawn.transferEnergy(creep);
   	}
}

function suicideCreep(creep){
	if(!creep.memory.role == 'harvester'){
		if(creep.ticksToLive < global.suicideCreepTick){
			getSpawn(creep);
			if(creep.pos.isNearTo(getSpawn)){
				creep.transferEnergy(getSpawn);
				creep.suicide();
			}
			else{
				creep.moveTo(getSpawn);
			}
		}
		return true;
	}
	return false;
}

module.exports = {
	takeEnergy: takeEnergy,
	suicideCreep: suicideCreep
}
