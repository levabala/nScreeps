var globals = require('globals');
var creeps = require('creeps');

function upgrade(creep){
	var room = globals.getRoomCreep(creep);
	if(creep.carry.energy == 0){
		creeps.takeEnergy(creep);
	}
	else{
		if(creep.pos.isNearTo(creep.room.controller)){
        	creep.upgradeController(creep.room.controller);
        }
        else{
        	creep.moveTo(creep.room.controller);
        }
	}
}

module.exports = {
	upgrade: upgrade
}
