var globals = require('globals');
var creeps = require('creeps');

function transportTo(creep){
    var room = globals.getRoomCreep(creep);
    var spawn = globals.getSpawn(room);
    var AllLinks = room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == "link"){
                return;
            }
        }
    });
    if(AllLinks[0].energy == AllLinks[0].energyCapacity){
        if(creep.pos.isNearTo(AllLinks[0])){
            AllLinks[0].transferEnergy(creep);
        }
        else{
            creep.moveTo(AllLinks[0])
        }
    }
    else if(spawn[0].energy < spawn[0].energyCapacity){
        if(creep.pos.isNearTo(spawn[0])){
            creep.transferEnergy(spawn[0]);
        }
        else{
            creep.moveTo(spawn[0]);
        }
    }
    else if(spawn[1]){
        if(spawn[1].energy < spawn[1].energyCapacity){
            if(creep.pos.isNearTo(spawn[1])){
                creep.transferEnergy(spawn[1]);
            }
            else{
                creep.moveTo(spawn[1]);
            }
        }
    }
    var emptyExtensions = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: function(object){
            if(object.structureType == 'extension'){
                return object.energy < object.energyCapacity;
            }
        }
    });
    if(emptyExtensions){
        if(creep.pos.isNearTo(emptyExtensions)){
            creep.transferEnergy(emptyExtensions);
        }
        else{
            creep.moveTo(emptyExtensions);
        }
    }
}

function takesEnergy(creep){
    var room = globals.getRoomCreep(creep);
    var energy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
    if(creep.pos.isNearTo(energy)){
        creep.pickup(energy);
    }
    else{
        creep.moveTo(energy);
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




