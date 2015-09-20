var globals = require('globals');

function builds(creep){
	var roomName = globals.getNameRoom(creep);
	var needBuild = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
	if(needBuild){
		if(creep.pos.isNearTo(needBuild)){
			creep.build(needBuild);
		}
		else{
			creep.moveTo(needBuild);
		}
	}
	else{
		var constructedWall = creep.pos.findClosestByRange(FIND_STRUCTURES, {
    		filter: function(object) {
    			if(object.structureType == "constructedWall"){
        			return object.hits < globals.roomOptions.E4N9.maxHits;
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
      	else{
      	    var needRepair = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
    		    filter: function(object) {
    			    if(object.structureType != "rampart"){
        			    return object.hits < object.hitsMax;
        		    }
    		    }
		    });
		    if(needRepair){
		        if(creep.pos.isNearTo(needRepair)){
            	    creep.repair(needRepair);
	    	    }
	    	    else{
	    		    creep.moveTo(needRepair);
	    	    }
		    }
      	}
    }
}	

module.exports = {
	builds: builds
}
