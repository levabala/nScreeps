var globals = require('globals');
var spawn = require('spawn');


function harvests(creep, room){
    var energy = Game.getObjectById(creep.memory.target);
    if(creep.pos.isNearTo(energy)){
        creep.harvest(energy);
    }
    else{
        creep.moveTo(energy);
    }
}

function transferToLink(creep){
    var linkRange = creep.pos.findInRange(FIND_MY_STRUCTURES, 2);
    if(linkRange.length > 0){
        if(creep.carryCapacity == creep.carry.energy){
            var closestLink = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: function(object) {
                    if(object.structureType == "link"){
                        return object;
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
