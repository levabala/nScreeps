var globals = require('globals');
var spawn = require('spawn');


function harvests(creep, room){
    var energy = room.find(FIND_SOURCES);
    if(creep.pos.isNearTo(energy[0])){
        creep.harvest(energy[0]);
    }
    else{
        creep.moveTo(energy[0]);
    }
}

function transferToLink(creep){
    var linkRange = creep.pos.findInRange(FIND_MY_STRUCTURES, 2);
    if(linkRange.length > 0){
        if(creep.carryCapacity == creep.carry.energy){
            var closestLink = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: function(object) {
                    if(object.structureType == "link"){
                        return;
                    }
                }
            });           
            if(creep.pos.isNearTo(closestLink)){
                creep.transferEnergy(closestLink);
            }
            else{
                creep.moveTo(closestLink);
            }
        }
    }
    else{
        creep.dropEnergy(creep.carry.energy);
    }
}

module.exports = {
    harvests: harvests,
    transferToLink: transferToLink
}
