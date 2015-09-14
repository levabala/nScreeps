var global = require('global');

function harvest(creep, room){
    var energy = room.find(FIND_SOURCES);
	if(creep.pos.isNearTo(energy[Memory.rooms.room.harvesterCount%2])){
		creep.harvest(energy[Memory.rooms.room.harvesterCount%2]);
	}
	else{
		//when spawn add creep.memory.energy = 0 or 1 =)
		creep.moveTo(energy[Memory.rooms.room.harvesterCount%2]);
	}
}

function transferToLink(creep){
	var linkRange = creep.pos.findInRange(FIND_MY_STRUCTURES, 2);
	if(linkRange.length > 0){
        if(creep.carryCapacity == creep.carry.energy){
            var closestLink = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: function(object) {
            	    if(object.structureType !== STRUCTURE_LINK ) {return false;}
            		return true;
            	}
        	});           
        	if(creep.pos.isNearTo(closestLink)){
        		creep.transferEnergy(closestLink);
        	}
        	else{
        		creep.moveTo(closestLink);
        	}
        }
    }
    else{
        creep.dropEnergy(creep.carry.energy);
    }
}

module.exports = {
	harvest: harvest,
	transferToLink: transferToLink
}
