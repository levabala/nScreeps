var globals = require('globals');
var spawn = require('spawn');


function harvests(creep, room){
    var energy = room.find(FIND_SOURCES);
    var target = creep.memory.target;
    if(creep.pos.isNearTo(energy[target])){
        creep.harvest(energy[target]);
    }
    else{
        creep.moveTo(energy[target]);
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
