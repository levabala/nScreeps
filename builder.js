var globals = require('globals');

function builds(creep){
	var room = globals.getRoomCreep(creep);
	var needBuild = room.find(FIND_CONSTRUCTION_SITES);
	if(needBuild){
		if(creep.pos.isNearTo(needBuild[0])){
			creep.build(needBuild[0]);
		}
		else{
			creep.moveTo(needBuild[0]);
		}
	}
	else{
		var constructedWall = room.find(FIND_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == "constructedWall"){
        			return object.hits < globals.roomOptions.room.maxHits;
        		}
    		}
		});
        if(constructedWall){
        	if(creep.pos.isNearTo(constructedWall)){
            	creep.repair(constructedWall);
	    	}
	    	else{
	    		creep.moveTo(constructedWall);
	    	}
      	}
    }
}	

module.exports = {
	builds: builds
}
