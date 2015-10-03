var globals = require('globals');
var creeps = require('creeps');

function repairRamparts(creep){
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		var room = globals.getRoomCreep(creep);
		var roomName = globals.getNameRoom(creep);
		var needRepairRampart = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == 'rampart'){
    				if(roomName == 'E4N9'){
    					return object.hits < globals.roomOptions.E4N9.maxHits;
    				}
    				else if(roomName == 'E1N7'){
    					return object.hits < globals.roomOptions.E1N7.maxHits;
    				}
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
