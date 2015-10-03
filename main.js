var globals = require('globals');

var creeps = require('creeps');
var links = require('links');
var spawn = require('spawn');
var harvester = require('harvester');
var action = require('action');
var builder = require('builder');
var mechanic = require('mechanic');
var mechanic1 = require('mechanic1');
var transport = require('transport');
var upgrades = require('upgrade');

var turret = require('turret');

var status = require('status');

/*
for(var i in Game.creeps){
    var creep1 = Game.creeps[i];
    var storage1 = Game.spawns.Spawn1.room.storage;
    var roomm = creep1.room;
    if(creep1.memory.role == 'caravan'){

        if(creep1.carry.energy == 0){
            if(roomm.name == 'E1N7'){
                creep1.moveTo(Game.flags.t);
            }
            else{
                creep1.moveTo(storage1);
                storage1.transferEnergy(creep1);
            }
        }
        else{
            if(roomm.name != 'E1N7'){
                if(roomm.name == 'E4N9'){
                    creep1.moveTo(Game.flags.s);
                }
                else if(roomm.name == 'E3N8'){
                    if(creep1.pos.getRangeTo(Game.flags.y) < 10){
                        creep1.moveTo(Game.flags.x);
                    }
                    else{
                        creep1.moveTo(Game.flags.y);
                    }
                }
                else{
                    creep1.moveTo(Game.spawns.Spawn3);
                }
            }
            else{
                var emptyExtensions2 = creep1.pos.findClosestByRange(FIND_MY_STRUCTURES, {
			        filter: function(object){
        				if(object.structureType == 'extension'){
        					return object.energy < object.energyCapacity;
        				}
			        }
		        });
		        if(Game.spawns.Spawn3.energy < 300){
		            creep1.moveTo(Game.spawns.Spawn3);
		            creep1.transferEnergy(Game.spawns.Spawn3);
		        }
		        else if(emptyExtensions2){
		            creep1.moveTo(emptyExtensions2);
		            creep1.transferEnergy(emptyExtensions2);
		        }
            }
        }
    }
}
*/

var room1 = Game.spawns.Spawn1.room;
var spawn1 = Game.spawns.Spawn1;


//var spawn3 = Game.spawns.Spawn3;
//var room2 = Game.spawns.Spawn3.room;

//check enemys
var checkEnemy = action.checkEnemy(room1);
/*
var checkEnemy1 = action.checkEnemy(room2);
if(checkEnemy1.length > 0){
    //alarm!:D
    action.alarms(room2.name);
    Game.notify('There were enemies in the second room!!!');
}
*/

if(checkEnemy.length > 0){
    //alarm!:D
    action.alarms(room1.name);
    Game.notify('There were enemies in the E4N9!!!');
}

var creepsInRoom = globals.getCreepsInRoom(room1);
//if(creepsInRoom.length < spawn.needAllCreepsInRoom){
    var calcEnergy = spawn.calcEnergy(room1);
    var calcTarget = spawn.calcTarget(room1);
    //var freeSpawn = spawn.getFreeSpawn(room1);
    //var checkSpawn = spawn.checkSpawn(room1, freeSpawn);
    spawn.spawnCreeps(room1, spawn1, calcEnergy, calcTarget);
//}
/*
var creepsInRoom1 = globals.getCreepsInRoom(room2);
var calcEnergy1 = spawn.calcEnergy(room2);
var calcTarget1 = spawn.calcTarget(room2);
spawn.spawnCreeps(room2, spawn3, calcEnergy1, calcTarget1);
*/
for(var i = 0; i < creepsInRoom.length; i++) {
    var creep = creepsInRoom[i];
    if(creep.memory.role == 'turret'){
        turret.turret(creep);
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
        var clean = creeps.suicideCreep(creep);
        if(clean == 0){
            mechanic1.repairRoad(creep);
        }
        else{
            creeps.suicideCreep(creep);
        }
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
    if(!creep.memory.role){
        creeps.determineRole(creep);
    }
}
/*
for(var i = 0; i < creepsInRoom1.length; i++) {
    var creep = creepsInRoom1[i];
    if(creep.memory.role == 'turret'){
        turret.turret(creep);
    }
    if(creep.memory.role == 'upgrader'){
        upgrades.upgrade(creep);
    }
    if(creep.memory.role == 'harvester'){
        var room5 = globals.getRoomCreep(creep);
        if(creep.carry.energy == 100){
            harvester.transferToLink(creep);
        }
        else{
           harvester.harvests(creep, room5);
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
        var clean = creeps.suicideCreep(creep);
        if(clean == 0){
            mechanic1.repairRoad(creep);
        }
        else{
            creeps.suicideCreep(creep);
        }
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
    if(!creep.memory.role){
        creeps.determineRole(creep);
    }
}

*/
links.transfersLink(room1);
//links.transfersLink(room2);
//action.defenseParty(room2, checkEnemy1);
/*
if(spawn.turretCount1 < 5){
    var turretId1 = spawn.calcTurretId(room2.name);
    spawn.spawnTurret(spawn3, calcEnergy1, turretId1);
}
*/

action.defenseParty(room1, checkEnemy);

status.status();

if(spawn.turretCount < 5){
    var turretId = spawn.calcTurretId(room1.name);
    spawn.spawnTurret(spawn1, calcEnergy, turretId);
}

/*
//Game.spawns.Spawn2.createCreep([MOVE, MOVE], 'fisub');
var fisub = Game.creeps.fisub;
var fisub1 = Game.creeps.fisub1;
var scout = Game.flags.scout;
var scout1 = Game.flags.scout1;
if(fisub){
    fisub.moveTo(scout);
}
if(fisub1){
    var roomnames = globals.getNameRoom(fisub1);
    if(roomnames == 'E2N6'){
        var room23 = globals.getRoomCreep(fisub1);
        var wall = room23.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType == 'rampart'){
                return object;
            }
        }
        });
        if(fisub1.pos.isNearTo(wall[5])){
            fisub1.attack(wall[5]);
        }
        else{
            fisub1.moveTo(wall[5]);
        }
        }
}
*/
