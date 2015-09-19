var globals = require('globals');
var spawn = require('spawn');
var action = require('action');


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
   		var spawn = globals.getSpawn(room);
   		if(creep.pos.isNearTo(spawn[0])){
      	    spawn[0].transferEnergy(creep);
   		}
   		else{
   		    creep.moveTo(spawn[0]);
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

function transfersLink(room){
	var AllLinks = room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == "link"){
                return;
            }
        }
    });
    //AllLinks[0] - near storage
    //allLinks[1], allLinks[2] - for harvester's
	if(AllLinks[1]){
		if(allLinks[0].energy == 0){
    		if(allLinks[1].energy == allLinks[1].energyCapacity){
        		allLinks[1].transferEnergy(allLinks[0]);
    		}
    	}
	}
	if(AllLinks[2]){
		if(allLinks[0].energy == 0){
    		if(allLinks[2].energy == allLinks[2].energyCapacity){
        		allLinks[2].transferEnergy(allLinks[0]);
    		}
    	}
	}
}


module.exports = {
	transfersLink: transfersLink
}


function status(){
	//about creeps
	console.log('------->TICK<-------');
	console.log('------->E4N9<-------');
	console.log('harvesterNeed - '+spawn.harvesterNeed+'harvesterCount - '+spawn.harvesterCount);
	console.log('builderNeed - '+.spawn.builderNeed+'builderCount - '+spawn.builderCount);
	console.log('guardNeed - '+spawn.guardNeed+'guardNeed - '+spawn.guardCount);
	console.log('upgraderNeed - '+spawn.upgraderNeed+'upgraderCount - '+spawn.upgraderCount);
	console.log('mechanicNeed - '+spawn.mechanicNeed+'mechanicCount - '+spawn.mechanicCount);
	console.log('mechanic1Need - '+spawn.mechanic1Need+'mechanic1Count - '+spawn.mechanic1Count);
	console.log('transportNeed - '+spawn.transportNeed+'transportCount - '+spawn.transportCount);
	//about enemys
	var alarm = action.alarm;
	if(alarm == 1){
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
	}
}

module.exports = {
	takeEnergy: takeEnergy,
	suicideCreep: suicideCreep,
	status: status,
	transfersLink: transfersLink
}
