var globals = require('globals');
var creeps = require('creeps');

function repairRamparts(creep){
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		var room = global.getRoomCreep(creep);
		var needRepairRampart = room.find(FIND_MY_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == 'rampart'){
    				return object.hits < global.roomOptions.room.maxHits;
    			}
    		}
		});
		if(needRepairRampart){
			if(creep.pos.isNearTo(needRepairRampart)){
				creep.repair(needRepairRampart);
			}
			else{
				creep.moveTo(needRepairRampart);
			}
		}
	}	
}

module.exports = {
	repairRamparts: repairRamparts
}
