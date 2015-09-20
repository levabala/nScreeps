var globals = require('globals');

function transfersLink(room){
    var AllLinks = room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == "link"){
                return object;
            }
        }
    });
    //AllLinks[0] - near storage
    //AllLinks[1], AllLinks[2] - for harvester's
    if(AllLinks[1]){
        if(AllLinks[0].energy == 0){
            if(AllLinks[1].energy == AllLinks[1].energyCapacity){
                AllLinks[1].transferEnergy(AllLinks[0]);
            }
        }
    }
    if(AllLinks[2]){
        if(AllLinks[0].energy == 0){
            if(AllLinks[2].energy == AllLinks[2].energyCapacity){
                AllLinks[2].transferEnergy(AllLinks[0]);
            }
        }
    }
}


module.exports = {
    transfersLink: transfersLink
}
