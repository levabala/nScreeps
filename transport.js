var globals = require('globals');
var creeps = require('creeps');

function transportTo(creep){
	var room = globals.getRoomCreep(creep);
	var spawn = globals.getSpawn(room);
	var storage = room.storage;
	var roomName = globals.getNameRoom(creep);
	if(room.name == 'E4N9'){
		var AllLinks = [];
		AllLinks[0] = Game.getObjectById('55e9870c4cba46c70962a0c9');
		AllLinks[1] = Game.getObjectById('55f062d55e4d3c180b04e8ef');
		AllLinks[2] = Game.getObjectById('55e9a822756a7a044fae2f73');
		AllLinks[3] = Game.getObjectById('56018d4034274bb8090c53b4');
	}
	if(room.name == 'E1N7'){
	    var energy1 = Game.getObjectById('560abfdf1b44c3c448c3139b');
    	if(creep.carry.energy > 1){
    	    var emptyExtensions1 = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
			filter: function(object){
				if(object.structureType == 'extension'){
					return object.energy < object.energyCapacity;
				}
			}
		    });
		    if(emptyExtensions1){
		        creep.moveTo(emptyExtensions1);
		        creep.transferEnergy(emptyExtensions1);
		    }
		    else{
        	    creep.moveTo(Game.spawns.Spawn3);
        	    creep.transferEnergy(Game.spawns.Spawn3);
    	    }
    	}
    	else{
    	        creep.moveTo(energy1);
    	        creep.pickup(energy1);
    	}
	}
	else{
	var energy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY, {
		filter: function(object) {
		    if(room.name == 'E4N9'){
    			if(object.energy > 100){
    				return object;
    			}
		    }
		    else if(room.name == 'E1N7'){
		        return object;
		    }
		}
	});
	if(energy){
		if(creep.carry.energy < creep.carryCapacity){
			takesEnergy(creep, energy);
		}
		else{
			if(creep.pos.isNearTo(storage)){
				creep.transferEnergy(storage);
			}
			else{
				creep.moveTo(storage);
			}
		}
	}
	else if(AllLinks && AllLinks[0] && ((AllLinks[1].energy != 500 && AllLinks[2].energy != 500) && AllLinks[0].energy < 1)){
		if(creep.carry.energy == 0){
			if(creep.pos.isNearTo(storage)){
				storage.transferEnergy(creep);
			}
			else{
				creep.moveTo(storage);
			}
		}
		else{
			if(creep.pos.isNearTo(AllLinks[0])){
				creep.transferEnergy(AllLinks[0]);
			}
			else{
				creep.moveTo(AllLinks[0]);
			}
		}
	}
	else if(AllLinks && AllLinks[1] && AllLinks[2] && AllLinks[0] && ((AllLinks[1].energy == 500 || AllLinks[2].energy == 500) && AllLinks[0].energy > 1)){
		if(creep.carry.energy == 0){
			if(creep.pos.isNearTo(AllLinks[0])){
				AllLinks[0].transferEnergy(creep);
			}
			else{
				creep.moveTo(AllLinks[0]);
			}
		}
		else{
			if(creep.pos.isNearTo(storage)){
				creep.transferEnergy(storage);
			}
			else{
				creep.moveTo(storage);
			}
		}
	}
	else if(spawn[0].energy < spawn[0].energyCapacity){
			if(creep.carry.energy == 0){
				creeps.takeEnergy(creep);
			}
			else{
				if(creep.pos.isNearTo(spawn[0])){
					creep.transferEnergy(spawn[0]);
				}
				else{
					creep.moveTo(spawn[0]);
				}
			}
	}
	else if(spawn[1] && (spawn[1].energy < spawn[1].energyCapacity)){
		if(creep.carry.energy == 0){
			creeps.takeEnergy(creep);
		}
		else if(creep.pos.isNearTo(spawn[1])){
			creep.transferEnergy(spawn[1]);
		}
		else{
			creep.moveTo(spawn[1]);
		}
	}
	else{
		var emptyExtensions = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
			filter: function(object){
				if(object.structureType == 'extension'){
					return object.energy < object.energyCapacity;
				}
			}
		});
		if(emptyExtensions){
			if(creep.carry.energy == 0){
				creeps.takeEnergy(creep);
			}
			else if(creep.pos.isNearTo(emptyExtensions)){
				creep.transferEnergy(emptyExtensions);
			}
			else{
				creep.moveTo(emptyExtensions);
			}
		}
		else{
			if(creep.pos.isNearTo(storage)){
				creep.transferEnergy(storage);
			}
			else{
				creep.moveTo(storage);
			}
		}
	}   }
}

function takesEnergy(creep, energy){
	if(creep.pos.isNearTo(energy)){
		creep.pickup(energy);
	}
	else{
		creep.moveTo(energy);
	}
}

module.exports = {
	transportTo: transportTo,
	takesEnergy: takesEnergy
}




