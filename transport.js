var global = require('global');

function transportTo(creep){
	var emptyExtensions = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
		filter: function(object){
			if(object.structureType == 'extension'){
				return object.energy < object.energyCapacity;
			}
		}
	});
	global.getSpawn(creep);
	if(spawnClosest.energy < spawnClosest.energyCapacity){
		if(creep.pos.isNearTo(spawnClosest)){
        	creep.transferEnergy(spawnClosest);
    	}
    	else{
    		creep.moveTo(spawnClosest);
    	}
    }
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
