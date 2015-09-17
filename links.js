var globals = require('globals');

function transfersLink(room){
	var AllLinks = room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == "link"){
                return;
            }
        }
    });
    //AllLinks[0] - near storage
    //allLinks[1], allLinks[2] - for harvester's
	if(AllLinks[1]){
		if(allLinks[0].energy == 0){
    		if(allLinks[1].energy == allLinks[1].energyCapacity){
        		allLinks[1].transferEnergy(allLinks[0]);
    		}
    	}
	}
	if(AllLinks[2]){
		if(allLinks[0].energy == 0){
    		if(allLinks[2].energy == allLinks[2].energyCapacity){
        		allLinks[2].transferEnergy(allLinks[0]);
    		}
    	}
	}
}


module.exports = {
	transfersLink: transfersLink
}
