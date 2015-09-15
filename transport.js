var global = require('global');

function transportTo(creep){
    var room = global.getRoomCreep(creep);
	var spawn = global.getSpawn(creep);
	if(spawn.energy < spawn.energyCapacity){
		if(creep.pos.isNearTo(spawn)){
        	creep.transferEnergy(spawn);
    	}
    	else{
    		creep.moveTo(spawn);
    	}
    }
    var emptyExtensions = room.find(FIND_MY_STRUCTURES, {
        filter: function(object){
            if(object.structureType == 'extension'){
                return object.energy < object.energyCapacity;
            }
        }
    });
    else if(emptyExtensions){
    	if(creep.pos.isNearTo(emptyExtensions)){
       		creep.transferEnergy(emptyExtensions);
    	}
    	else{
    		creep.moveTo(emptyExtensions);
    	}
    }
}

module.exports = {
	transportTo: transportTo
}
