var globals = require('globals');

function transportTo(creep){
    var room = globals.getRoomCreep(creep);
    var spawn = globals.getSpawn(room);
    console.log(creep);
    if(spawn[0].energy < spawn[0].energyCapacity){
        if(creep.pos.isNearTo(spawn[0])){
            creep.transferEnergy(spawn[0]);
        }
        else{
            creep.moveTo(spawn[0]);
        }
    }
    var emptyExtensions = room.find(FIND_MY_STRUCTURES, {
        filter: function(object){
            if(object.structureType == 'extension'){
                return object.energy < object.energyCapacity;
            }
        }
    });
    if(emptyExtensions){
        if(creep.pos.isNearTo(emptyExtensions[0])){
            creep.transferEnergy(emptyExtensions[0]);
        }
        else{
            creep.moveTo(emptyExtensions[0]);
        }
    }
}

module.exports = {
    transportTo: transportTo
}


