var globals = require('globals');
var creeps = require('creeps');

function repairRoad(creep){
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		var room = globals.getRoomCreep(creep);
		var needRepairRoad = room.find(FIND_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == 'road'){
    				return object.hits < object.hitsMax;
    			}
    		}
		});
		if(needRepairRoad){
			if(creep.pos.isNearTo(needRepairRoad[0])){
				creep.repair(needRepairRoad[0]);
			}
			else{
				creep.moveTo(needRepairRoad[0]);
			}
		}
	}
}

module.exports = {
	repairRoad: repairRoad
}
