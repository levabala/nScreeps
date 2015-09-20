var globals = require('globals');
var creeps = require('creeps');
//need make check to spawn transport
function transportTo(creep){
    var room = globals.getRoomCreep(creep);
    var spawn = globals.getSpawn(room);
    var storage = room.storage;
    var AllLinks = room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == "link"){
                return object;
            }
        }
    });
    if(AllLinks[0]){
        if(AllLinks[0].energy > 1){
            if(creep.carry.energy == 0){
                if(creep.pos.isNearTo(AllLinks[0])){
                    AllLinks[0].transferEnergy(creep);
                }
                else{
                    creep.moveTo(AllLinks[0])
                }
            }
            else{
                if(creep.pos.isNearTo(storage)){
                    creep.transferEnergy(storage);
                }
                else{
                    creep.moveTo(storage);
                }
            }
        }    
        else if(spawn[0].energy < spawn[0].energyCapacity){
        if(creep.carry.energy == 0){
            creeps.takeEnergy(creep);
        }
        else{
            if(creep.pos.isNearTo(spawn[0])){
                creep.transferEnergy(spawn[0]);
            }
            else{
                creep.moveTo(spawn[0]);
            }
        }
    }
    else{
            var emptyExtensions = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: function(object){
                    if(object.structureType == 'extension'){
                        return object.energy < object.energyCapacity;
                    }
                }
            });
            if(emptyExtensions){
                if(creep.carry.energy == 0){
                    creeps.takeEnergy(creep);
                }
                else if(creep.pos.isNearTo(emptyExtensions)){
                    creep.transferEnergy(emptyExtensions);
                }
                else{
                    creep.moveTo(emptyExtensions);
                }
            }
            else{
                if(creep.pos.isNearTo(storage)){
                    creep.transferEnergy(storage);
                }
                else{
                    creep.moveTo(storage);
                }
            }
    }
        
    }
    else if(spawn[0].energy < spawn[0].energyCapacity){
        if(creep.carry.energy == 0){
            creeps.takeEnergy(creep);
        }
        else{
            if(creep.pos.isNearTo(spawn[0])){
                creep.transferEnergy(spawn[0]);
            }
            else{
                creep.moveTo(spawn[0]);
            }
        }
    }
    else if(spawn[1]){
        if(creep.carry.energy == 0){
            creeps.takeEnergy(creep);
        }
        else{
            if(spawn[1].energy < spawn[1].energyCapacity){
                if(creep.pos.isNearTo(spawn[1])){
                    creep.transferEnergy(spawn[1]);
                }
                else{
                    creep.moveTo(spawn[1]);
                }
            }
        }
    }
    else{
        if(creep.carry.energy == 0){
            creeps.takeEnergy(creep);
        }
        else{
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
            else{
                if(creep.pos.isNearTo(storage)){
                    creep.transferEnergy(storage);
                }
                else{
                    creep.moveTo(storage);
                }
            }
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

module.exports = {
    transportTo: transportTo,
    takesEnergy: takesEnergy
}





