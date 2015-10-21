
'use strict';

var globals = require('globals');
var creeps = require('creeps');
var links = require('links');
var spawn = require('spawn');
var harvester = require('harvester');
var builder = require('builder');
var mechanic = require('mechanic');
var mechanic1 = require('mechanic1');
var transport = require('transport');
var upgrades = require('upgrade');
var support = require('support');
var status = require('status');

var room1 = Game.spawns.Spawn1.room;
var spawn1 = Game.spawns.Spawn1;

var defense = require('defense');

var checkEnemy = defense.checkEnemy(room1);
if(checkEnemy){
    globals.alarm = 1;
}

var creepsInRoom = globals.creepsInRoom;

    var calcEnergy = spawn.calcEnergy(room1);
    var calcTarget = spawn.calcTarget(room1);
    for(var o in spawn.stockTransport){
        if(spawn.stockTransport[o].ticksToLive < globals.suicideCreepTick){
            spawn.transportStock+=1;
        }
    }
    spawn.stock();
    spawn.spawnCreeps(room1, spawn1, calcEnergy, calcTarget);

for(var i in Game.creeps){
    var creep = Game.creeps[i];
    //creep.moveTo(Game.flags.wwe);
    if(creep.memory.role == 'secondHarvester'){
        var target = Game.getObjectById(creep.memory.target);
        if(target){
            if(creep.pos.isNearTo(target)){
                creep.harvest(target);
                creep.dropEnergy(creep.carry.energy);
            }
            else{
                creep.moveTo(target, {reusePath: globals.reusePathTick});
            }
        }
        else{
            creep.moveTo(Game.flags.ss, {reusePath: globals.reusePathTick});
        }
    }
    else if(creep.memory.role == 'more3EnergyHarvest'){
        if(creep.room.name != 'W18N7'){
            creep.moveTo(Game.flags.wwe1, {reusePath: globals.reusePathTick});
        }
        else{
            var energy = Game.getObjectById(creep.memory.target);
            if(energy){
                if(creep.pos.isNearTo(energy)){
                    creep.harvest(energy);
                }
                else{
                    creep.moveTo(energy, {reusePath: globals.reusePathTick});
                }
            }
        }
    }
    else if(creep.memory.role == 'transfer2'){
        var link = Game.getObjectById(creep.memory.link);
        if(creep.pos.isEqualTo(Game.flags.link)){
            if(creep.carry.energy != 0){
                creep.transferEnergy(creep.room.storage);
            }
            else{
                if(link.energy != 0){
                    link.transferEnergy(creep);
                }
            }
        }
        else{
            creep.moveTo(Game.flags.link, {reusePath: globals.reusePathTick});
        }
    }
    else if(creep.memory.role == 'caravan'){
        if(creep.carry.energy == 0){
            if(creep.pos.isNearTo(Game.spawns.Spawn1.room.storage)){
                Game.spawns.Spawn1.room.storage.transferEnergy(creep);
            }
            else{
                creep.moveTo(Game.spawns.Spawn1.room.storage, {reusePath: globals.reusePathTick});
            }
        }
        else{
            if(creep.pos.isNearTo(Game.spawns.thirdSpawn1.room.storage)){
                creep.transferEnergy(Game.spawns.thirdSpawn1.room.storage);
            }
            else{
                creep.moveTo(Game.spawns.thirdSpawn1.room.storage, {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'moreEnergy11Harvester'){
        if(creep.room.name != 'W18N6'){
            creep.moveTo(Game.flags.topd, {reusePath: globals.reusePathTick});
        }
        else{
            var energy = Game.getObjectById(creep.memory.target);
            if(energy){
                if(creep.pos.isNearTo(energy)){
                    creep.harvest(energy);
                }
                else{
                    creep.moveTo(energy, {reusePath: globals.reusePathTick});
                }
            }
        }
        
    }
    //CLAIM
    else if(creep.memory.role == 'claim'){
        creep.moveTo(Game.flags.hehe, {reusePath: globals.reusePathTick});
    }
    else if(creep.memory.role == 'visionsEnergy'){
        if(creep.carry.energy == 0){
            if(creep.room.name != 'W18N7'){
                creep.moveTo(Game.flags.wwe1, {reusePath: globals.reusePathTick});
            }
            else{
                var visionsEnergy = creep.room.find(FIND_DROPPED_ENERGY);
                visionsEnergy.sort(function(a, b) {
                    if(a.energy > b.energy) {return -1;}
                    if(a.energy < b.energy) {return 1;}
                    return 0;
                    });
                if(visionsEnergy[0]){
                    if(creep.pos.isNearTo(visionsEnergy[0])){
                        creep.pickup(visionsEnergy[0]);
                    }
                    else{
                        creep.moveTo(visionsEnergy[0], {reusePath: globals.reusePathTick});
                    }
                }
                else{
                    if(!creep.pos.isNearTo(Game.flags.wwe1)){
                        creep.moveTo(Game.flags.wwe1, {reusePath: globals.reusePathTick});
                    }
                }
            }
        }
        else{
            var storage = Game.spawns.thirdSpawn1.room.storage;
            if(creep.pos.isNearTo(storage)){
                creep.transferEnergy(storage);
            }
            else{
                creep.moveTo(storage, {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'secondTransport'){
        if(creep.carry.energy == 0){
            var transportFlag = Game.flags.harvest;
            if(creep.room.name == 'W19N8'){
                var source = creep.room.find(FIND_DROPPED_ENERGY);
                if(source.length){
                    if(creep.memory.ids){
                        if(creep.pos.isNearTo(source[creep.memory.ids])){
                            if(source[creep.memory.ids]){
                                creep.pickup(source[creep.memory.ids]);
                            }
                        }
                        else{
                            if(source[creep.memory.ids]){
                                creep.moveTo(source[creep.memory.ids], {reusePath: globals.reusePathTick});
                            }
                        }
                    }
                    else{
                        if(spawn.secondTransports.length == 0){
                            creep.memory.ids = "0";
                        }
                        else if(spawn.secondTransports[0].memory.ids == "0"){
                            creep.memory.ids = "1";
                        }
                        else{
                            creep.memory.ids = "0";
                        }
                    }
                }
                else{
                    if(!creep.pos.isNearTo(transportFlag)){
                        creep.moveTo(transportFlag, {reusePath: globals.reusePathTick});
                    }
                }
            }
            else{
                creep.moveTo(Game.flags.ss, {reusePath: globals.reusePathTick});
            }
        }
        else if(creep.carry.energy != 0){
            if(creep.pos.isNearTo(Game.spawns.Spawn1.room.storage)){
                creep.transferEnergy(Game.spawns.Spawn1.room.storage);
            }
            else{
                creep.moveTo(Game.spawns.Spawn1.room.storage, {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'support'){
        support.support(creep);
    }
    else if(creep.memory.role == 'support1'){
        if(creep.room.name != 'W19N6'){
            creep.moveTo(Game.flags.PRINES, {reusePath: globals.reusePathTick});
        }
        else{
            var soomeEnergy = Game.getObjectById(creep.memory.target);
            if(creep.pos.isNearTo(soomeEnergy)){
                creep.harvest(soomeEnergy);
            }
            else{
                if(creep.moveTo(soomeEnergy, {reusePath: globals.reusePathTick}) == -2){
                    if(spawn.support[0].memory.target == "55c34a6b5be41a0a6e80c687"){
                        creep.memory.target = "55c34a6b5be41a0a6e80c689";
                    }
                    else{
                        creep.memory.target = "55c34a6b5be41a0a6e80c687";
                    }
                }
                else{
                    creep.moveTo(soomeEnergy, {reusePath: globals.reusePathTick});
                }
            }
        }
    }
    else if(creep.memory.role == 'mechanicSupport'){
        if(creep.room.name != 'W19N6'){
            creep.moveTo(Game.flags.PRINES, {reusePath: globals.reusePathTick});
        }
        else{
            if(creep.carry.energy == 0){
                if(creep.room.storage){
                    if(creep.pos.isNearTo(creep.room.storage)){
                        creep.room.storage.transferEnergy(creep);
                    }
                    else{
                        creep.moveTo(creep.room.storage, {reusePath: globals.reusePathTick});
                    }
                }
                else{
                    var closestEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
                    if(creep.pos.isNearTo(closestEnergy)){
                        creep.pickup(closestEnergy);
                    }
                    else{
                        creep.moveTo(closestEnergy, {reusePath: globals.reusePathTick})
                    }
                }
            }
            else{
                var needRepairRoad = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                	filter: function(object) {
                		if(object.structureType == 'road'){
                			return object.hits < object.hitsMax;
                		}
                	}
            	});
            	if(needRepairRoad){
            	    if(creep.pos.isNearTo(needRepairRoad)){
            	        creep.repair(needRepairRoad);
            	    }
            	    else{
            	        creep.moveTo(needRepairRoad, {reusePath: globals.reusePathTick});
            	    }
            	}
            }
        }
    }
    else if(creep.memory.role == 'moreEnergy11'){

        if(creep.carry.energy == 0){
            if(creep.room.name != 'W19N5'){
                creep.moveTo(Game.flags.ddd, {reusePath: globals.reusePathTick});
            }
            else{
                var moreEnergy11 = creep.room.find(FIND_DROPPED_ENERGY);
                if(moreEnergy11[0]){
                    if(creep.pos.isNearTo(moreEnergy11[0])){
                	    creep.pickup(moreEnergy11[0]);
                	}
                	else{
                	    creep.moveTo(moreEnergy11[0], {reusePath: globals.reusePathTick});
                	}
                }
                else if(!creep.pos.isNearTo(Game.flags.ddd)){
                    creep.moveTo(Game.flags.ddd, {reusePath: globals.reusePathTick});
                }
            }
        }
        else{
            if(creep.pos.isNearTo(Game.spawns.thirdSpawn1.room.storage)){
                creep.transferEnergy(Game.spawns.thirdSpawn1.room.storage);
            }
            else{
                creep.moveTo(Game.spawns.thirdSpawn1.room.storage, {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'supportTransport'){
        if(creep.room.name != 'W19N6'){
            creep.moveTo(Game.flags.PRINES, {reusePath: globals.reusePathTick});
        }
        else{
            if(creep.carry.energy == 0){
                var someEnergy = creep.room.find(FIND_DROPPED_ENERGY);
                someEnergy.sort(function(a, b) {
                if(a.energy > b.energy) {return -1;}
                if(a.energy < b.energy) {return 1;}
                return 0;
                });
                if(someEnergy.length && someEnergy[0].energy > 500){
                    if(!(someEnergy[0].pos.isEqualTo( Game.flags.ssd.pos )) && !(someEnergy[0].pos.isEqualTo( Game.flags.PRINES.pos ))){
                        if(creep.pos.isNearTo(someEnergy[0])){
                            creep.pickup(someEnergy[0]);
                        }
                        else{
                            creep.moveTo(someEnergy[0], {reusePath: globals.reusePathTick});
                        }
                    }
                    else{
                        if(creep.pos.isNearTo(someEnergy[1])){
                            creep.pickup(someEnergy[1]);
                        }
                        else{
                            creep.moveTo(someEnergy[1], {reusePath: globals.reusePathTick});
                        }
                    }
                }
                else{
                    if(creep.pos.isNearTo(creep.room.storage)){
                        creep.room.storage.transferEnergy(creep);
                    }
                    else{
                        creep.moveTo(creep.room.storage, {reusePath: globals.reusePathTick});
                    }
                }
            }
            else{
                var thirdSpawn1 = Game.spawns.thirdSpawn1;
                var emptyExtensions = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
	        		filter: function(object){
	        			if(object.structureType == 'extension'){
	        				return object.energy < object.energyCapacity;
	        		    }
	        		}
	            });
                if(thirdSpawn1.energy < 300){
                    if(creep.pos.isNearTo(thirdSpawn1)){
                        creep.transferEnergy(thirdSpawn1);
                    }
                    else{
                        creep.moveTo(thirdSpawn1, {reusePath: globals.reusePathTick});
                    }
                }
                else if(emptyExtensions){
                    if(creep.pos.isNearTo(emptyExtensions)){
                        creep.transferEnergy(emptyExtensions);
                    }
                    else{
                        creep.moveTo(emptyExtensions, {reusePath: globals.reusePathTick});
                    }
                }
                else{
                    //var someBuild = creep.room.find(FIND_CONSTRUCTION_SITES);
                    //if(someBuild.length){
                    //    var prines = Game.getObjectById('560a4a3ca89199f22dcffce5');
                    //}
                    //else{var prines = Game.flags.PRINES;}
                    if(creep.room.storage){
                        if(creep.pos.isNearTo(creep.room.storage)){
                            creep.transferEnergy(creep.room.storage);
                        }
                        else{
                            creep.moveTo(creep.room.storage, {reusePath: globals.reusePathTick});
                        }
                    }
                    else{
                        var prines = Game.flags.PRINES;
                        if(creep.pos.isEqualTo( prines.pos )){
                            creep.dropEnergy(creep.carry.energy);
                        }
                        else{
                            creep.moveTo(prines, {reusePath: globals.reusePathTick});
                        }
                    }
                }
            }
        }
    }
    else if(creep.memory.role == 'mechanic22'){
        mechanic1.repairRoad(creep);
    }
    else if(creep.memory.role == 'moreEnergyHarvester'){
        if(creep.room.name != 'W19N9'){
            if(creep.room.name == 'W18N8' || creep.room.name == 'W19N8'){
                creep.moveTo(Game.flags.xx, {reusePath: globals.reusePathTick});
            }
            else{
                creep.moveTo(Game.flags.dd, {reusePath: globals.reusePathTick});
            }
        }
        else{
            var moreEnergyHarvest = Game.getObjectById(creep.memory.target);
            if(!creep.pos.isNearTo(moreEnergyHarvest)){
                creep.moveTo(moreEnergyHarvest, {reusePath: globals.reusePathTick});
            }
            else{
                creep.harvest(moreEnergyHarvest);
            }
        }
    }
    else if(creep.memory.role == 'moreEnergyTransport'){
        if(creep.carry.energy == 0){
            if(creep.room.name != 'W19N9'){
                if(creep.room.name == 'W18N8' || creep.room.name == 'W19N8'){
                    creep.moveTo(Game.flags.xx, {reusePath: globals.reusePathTick});
                }
                else{
                    creep.moveTo(Game.flags.dd, {reusePath: globals.reusePathTick});
                }
            }
            else{
                var moreEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
                if(creep.pos.isNearTo(moreEnergy)){
                    creep.pickup(moreEnergy);
                }
                else{
                    creep.moveTo(moreEnergy, {reusePath: globals.reusePathTick});
                }
            }
        }
        else{
            var storage = Game.spawns.Spawn1.room.storage;
            if(!creep.pos.isNearTo(storage)){
                creep.moveTo(storage, {reusePath: globals.reusePathTick});
            }
            else{
                creep.transferEnergy(storage);
            }
        }
    }
    //SECOND ROOM
    else if(creep.memory.role == 'transport1'){
        transport.transportTo(creep);
    }
    else if(creep.memory.role == 'harvester1'){
        var room = globals.getRoomCreep(creep);
        if(creep.carry.energy == 100){
            harvester.transferToLink(creep);
        }
        else{
           harvester.harvests(creep, room);
        }
    }
    else if(creep.memory.role == 'builder1'){
        if(creep.carry.energy == 0){
            creeps.takeEnergy(creep);
        }
        else{
            builder.builds(creep);
        }
    }
    else if(creep.memory.role == 'mechanic11'){
        mechanic1.repairRoad(creep);
    }
    else if(creep.memory.role == 'upgrader1'){
        if(creep.carry.energy == 0){
            var papa = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
            if(papa){
                if(creep.pos.isNearTo(papa)){
                    creep.pickup(papa);
                }
                else{
                    creep.moveTo(papa, {reusePath: globals.reusePathTick});
                }
            }
        }
        else{
            if(creep.pos.isNearTo(creep.room.controller)){
                creep.upgradeController(creep.room.controller);
            }
            else{
                creep.moveTo(creep.room.controller, {reusePath: globals.reusePathTick});
            }
        }
    }
}

//FIRST ROOM
for(var i = 0; i < creepsInRoom.length; i++) {
    var creep = creepsInRoom[i];
    if(creep.memory.role == 'scout'){
        var energy = globals.energy[0];
        if(creep.carry.energy == 0){
            creep.moveTo(energy, {reusePath: globals.reusePathTick});
            creep.pickup(energy);
        }
        else{
            if(creep.pos.isNearTo(creep.room.storage)){
                creep.transferEnergy(creep.room.storage);
            }
            else{
                creep.moveTo(creep.room.storage, {reusePath: globals.reusePathTick});
            }
        }
    }
    if(creep.memory.role == 'transfer'){
        if((creep.pos.x != Game.flags.transfer.pos.x) || (creep.pos.y != Game.flags.transfer.pos.y)){
            creep.moveTo(Game.flags.transfer, {reusePath: globals.reusePathTick});
        }
        else{
            if(creep.room.name == 'W18N8'){
                var AllLinks = [];
                AllLinks[0] = Game.getObjectById('561a6f6daeb65a2065ed536d');
                AllLinks[1] = Game.getObjectById('561a8a0aaeb65a2065ed7270');
                AllLinks[2] = Game.getObjectById('562004fdeefb65310bb14efe');
            }
            var linkForTransfer = Game.getObjectById(creep.memory.link);
            if(AllLinks[1].energy == 500 || AllLinks[2].energy == 500){
                if(creep.carry.energy == 0){
                    if(linkForTransfer.energy != 0){
                        linkForTransfer.transferEnergy(creep);
                    }
                }
                else{
                    creep.transferEnergy(creep.room.storage);
                }
            }
            else if(AllLinks[0] != 500){
                if(creep.carry.energy == 0){
                    creep.room.storage.transferEnergy(creep);
                }
                else{
                    creep.transferEnergy(AllLinks[0]);
                }
            }
        }
    }
    if(creep.memory.role == 'upgrader'){
        upgrades.upgrade(creep);
    }
    if(creep.memory.role == 'harvester'){
        var room = globals.getRoomCreep(creep);
        if(creep.carry.energy == 100){
            harvester.transferToLink(creep);
        }
        else{
           harvester.harvests(creep, room);
        }
    }
    if(creep.memory.role == 'builder'){
        var clean = creeps.suicideCreep(creep);
        if(clean == 0){
            if(creep.carry.energy == 0){
                creeps.takeEnergy(creep);
            }
            else{
                builder.builds(creep);
            }
        }
        else{
            creeps.suicideCreep(creep);
        }
    }
    if(creep.memory.role == 'mechanic'){
        var clean = creeps.suicideCreep(creep);
        if(clean == 0){
            mechanic.repairRamparts(creep);
        }
        else{
            creeps.suicideCreep(creep);
        }
    }
    if(creep.memory.role == 'mechanic1'){
        //if(Game.time % 300 === 0){
            var clean = creeps.suicideCreep(creep);
            if(clean == 0){
                mechanic1.repairRoad(creep);
            }
            else{
                creeps.suicideCreep(creep);
            }
        //}
    }
    if(creep.memory.role == 'transport'){
        var clean = creeps.suicideCreep(creep);
        if(clean == 0){
            transport.transportTo(creep);
        }
        else{
            creeps.suicideCreep(creep);
        }
    }
    if(creep.memory.role == 'guard'){
        var target = Game.getObjectById('56103d3690f38b9a5dab1bd5');
        creep.attack(target);
    }
    if(!creep.memory.role){//console.log(324);
        creeps.determineRole(creep);
    }
}
//THRID ROOM
links.transfersLink(room1);
links.transfersLink(Game.spawns.thirdSpawn1.room);
if(Game.spawns.thirdSpawn1){
    var room2 = Game.spawns.thirdSpawn1.room;
    var calcEnergy1 = spawn.calcEnergy(room2);
    var calcTarget1 = spawn.calcTarget(room2);
    
    spawn.spawnCreeps(room2, Game.spawns.thirdSpawn1, calcEnergy1, calcTarget1);
    var creepsInThird = globals.getCreepsInRoom(room2);
}


defense.defense(checkEnemy, spawn.allDefense);

if(Game.time % 300 === 0){
    creeps.cleanMemory();
}

status.status();



let avg = 0;
Memory.cpuHistory.unshift(Game.getUsedCpu());
Memory.cpuHistory.length = Math.min(Memory.cpuHistory.length, 5000);
Memory.cpuHistory.forEach( (x)=> avg += x);
avg /= Memory.cpuHistory.length;

console.log('averageCpu - '+avg);

//console.log(Memory.ways[0]);

//var d = Game.flags.Flag1.pos.findPathTo(Game.flags.ss.pos);
//console.log(d.length);

//Game.spawns.thirdSpawn1.createCreep([MOVE], null, {role : 'opener'});
//Game.spawns.thirdSpawn1.createCreep([MOVE], null, {role : 'opener1'});
//Game.spawns.thirdSpawn1.createCreep([MOVE], null, {role : 'opener2'});

for(var l in Game.creeps){
    var creep = Game.creeps[l];
    if(creep.memory.role == 'openerHarvester'){
        if(creep.room.name != 'W19N5'){
            creep.moveTo(Game.flags.ddd, {reusePath: globals.reusePathTick});
        }
        else if(creep.room.name == 'W19N5' && !creep.memory.target){
            var source = creep.room.find(FIND_SOURCES);
            creep.memory.target = source[0].id;
        }
        else{
            if(creep.pos.isNearTo(Game.getObjectById(creep.memory.target))){
                creep.harvest(Game.getObjectById(creep.memory.target));
            }
            else{
                creep.moveTo(Game.getObjectById(creep.memory.target), {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'openerHarvester1'){
        if(creep.room.name != 'W18N5'){
            creep.moveTo(Game.flags.ppp, {reusePath: globals.reusePathTick});
        }
        else{
            if(creep.pos.isNearTo(Game.getObjectById(creep.memory.target))){
                creep.harvest(Game.getObjectById(creep.memory.target));
            }
            else{
                creep.moveTo(Game.getObjectById(creep.memory.target), {reusePath: globals.reusePathTick});
            }
        }
    }
    else if(creep.memory.role == 'harvester2'){
        var forHarvest = Game.getObjectById(creep.memory.target);
        if(creep.carry.energy < 100){
            if(creep.pos.isNearTo(forHarvest)){
                creep.harvest(forHarvest);
            }
            else{
                creep.moveTo(forHarvest, {reusePath: globals.reusePathTick});
            }
        }
        else{
            var link = Game.getObjectById(creep.memory.link);
            if(creep.pos.getRangeTo(link) <= 1){
                if(creep.pos.getRangeTo(link) <= 1){
                    creep.transferEnergy(link);
                }
                else{
                    creep.moveTo(link, {reusePath: globals.reusePathTick});
                }
            }
            else{
                creep.dropEnergy(creep.carry.energy);
            }
        }
    }
    else if(creep.memory.role == 'helperAemix'){
        if(creep.room.name == 'W19N6' && creep.carry.energy == 0){
            creep.moveTo(Game.getObjectById('56254bdeac63329362bf206e'), {reusePath: globals.reusePathTick});
            creep.pickup(Game.getObjectById('56254bdeac63329362bf206e'));
        }
        else{
            if(creep.room.name != 'W19N7'){
                creep.moveTo(Game.flags.help, {reusePath: globals.reusePathTick});
            }
            else{
                var dd = Game.getObjectById(creep.memory.target);
                if(creep.carry.energy == 0){
                    creep.suicide();
                }
                else if(creep.pos.isNearTo(dd)){
                    creep.upgradeController(dd);
                }
                else{
                    creep.moveTo(dd, {reusePath: globals.reusePathTick});
                }
            }
        }
    }
}
