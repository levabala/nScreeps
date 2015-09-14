var global = require('global');

function build(creep){
	var needBuild = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	if(needBuild){
		creep.moveTo(needBuild);
		creep.build(needBuild);
	}
	else{
		var constructedWall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
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
