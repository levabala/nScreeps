var globals = require('globals');
var creeps = require('creeps');

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

function takesEnergy(creep){
    var room = globals.getRoomCreep(creep);
    var energy = room.find(FIND_DROPPED_ENERGY);
    if(creep.pos.isNearTo(energy[0])){
        creep.pickup(energy[0]);
    }
    else{
        creep.moveTo(energy[0]);
    }
}

function transferToStore(creep){
    var room = globals.getRoomCreep(creep);
    var spawn = globals.getSpawn(room);
    var storage = room.storage;
    if(true){
        transportTo(creep);
    }
    else if(storage){
        if(creep.pos.isNearTo(storage)){
            creep.transferEnergy(storage);
        }
        else{
            creep.moveTo(storage);
        }
    }
}

module.exports = {
    transportTo: transportTo,
    takesEnergy: takesEnergy,
    transferToStore: transferToStore
}



