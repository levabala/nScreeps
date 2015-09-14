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

var harvesterCount = 0;
var builderCount = 0;
var guardCount = 0;
var scoutCount = 0;
var mechanicCount = 0;
var mechanic1Count = 0;
var transportCount = 0;
var upgraderCount = 0;
var healerCount = 0;
var archerCount = 0;

function countCreeps(allCreeps){
	for(var id in allCreeps){
		var creep = allCreeps[id];
		if(creep.memory.role == 'builder'){
       		builderCount+=1;        
   		}
   		if(creep.memory.role == 'harvester'){
   	    	harvesterCount+=1;
   		}
   		if(creep.memory.role == 'guard'){
       		guardCount+=1;
   		}
   		if(creep.memory.role == 'scout'){
       		scoutCount+=1;
   		}
   		if(creep.memory.role == 'upgrader'){
       		upgraderCount+=1;
   		}
   		if(creep.memory.role == 'mechanic'){
       		mechanicCount+=1;
   		}
   		if(creep.memory.role == 'mechanic1'){
       		mechanic1Count+=1;
   		}
   		if(creep.memory.role == 'transport'){
       		transportCount+=1;
   		}
   		if(creep.memory.role == 'archer'){
   			archerCount+=1;
   		}
   		if(creep.memory.role == 'healer'){
   			healerCount+=1;
   		}
	}
	return;
}
module.exports = {
	takeEnergy: takeEnergy,
	suicideCreep: suicideCreep,
	harvesterCount: harvesterCount,
	builderCount: builderCount,
	guardCount: guardCount,
	scoutCount: scoutCount,
	mechanicCount: mechanicCount,
	mechanic1Count: mechanic1Count,
	transportCount: transportCount,
	upgraderCount: upgraderCount,
	healerCount: healerCount,
	archerCount: archerCount
}
