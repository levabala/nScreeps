var global = require('global');
var creeps = require('creeps');

function repairRoad(creep){
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		
		var needRepairRoad = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == 'road'){
    				return object.hits < object.hitsMax;
    			}
    		}
		}
		if(needRepairRoad){
			if(creep.pos.isNearTo(needRepairRoad)){
				creep.repair(needRepairRoad);
			}
			else{
				creep.moveTo(needRepairRoad);
			}
		}
	}
}

module.exports = {
	repairRoad: repairRoad
}
