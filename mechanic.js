var globals = require('globals');
var creeps = require('creeps');

function repairRamparts(creep){
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		var room = globals.getRoomCreep(creep);
		var needRepairRampart = room.find(FIND_MY_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == 'rampart'){
    			    //need fix E4N9
    				return object.hits < globals.roomOptions.E4N9.maxHits;
    			}
    		}
		});
		if(needRepairRampart){
			if(creep.pos.isNearTo(needRepairRampart[0])){
				creep.repair(needRepairRampart[0]);
			}
			else{
				creep.moveTo(needRepairRampart[0]);
			}
		}
	}	
}

module.exports = {
	repairRamparts: repairRamparts
}
