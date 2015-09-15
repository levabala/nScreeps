var global = require('global');

function build(creep){
	var room = global.getRoomCreep(creep);
	var needBuild = room.find(FIND_CONSTRUCTION_SITES);
	if(needBuild){
		if(creep.pos.isNearTo(needBuild)){
			creep.build(needBuild);
		}
		else{
			creep.moveTo(needBuild);
		}
	}
	else{
		var constructedWall = room.find(FIND_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == "constructedWall"){
        			return object.hits < global.roomOptions.room.maxHits;
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

module.exports{
	build: build
}
