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

var status = require('status');

var room1 = Game.spawns.Spawn1.room;
var spawn1 = Game.spawns.Spawn1;

//check enemys
var checkEnemy = action.checkEnemy(room1);

if(checkEnemy.length > 0){
	//alarm!:D
	action.alarms();
	Game.notify('There were enemies in the E4N9!!!');
}

var creepsInRoom = globals.getCreepsInRoom(room1);
if(creepsInRoom.length < spawn.needAllCreepsInRoom){
    var calcEnergy = spawn.calcEnergy(room1);
    var calcTarget = spawn.calcTarget();
    var importantCreeps = spawn.importantCreeps;
    var freeSpawn = spawn.getFreeSpawn(room1);
    var checkSpawns = spawn.checkSpawn(room1, freeSpawn);
	spawn.spawnCreeps(room1, freeSpawn, calcEnergy, calcTarget, checkSpawns);
}

for(var i = 0; i < creepsInRoom.length; i++) {
	var creep = creepsInRoom[i];
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
}

links.transfersLink(room1);

var checkEnemy = action.checkEnemy(room1);
action.party(room1, checkEnemy);

status.status();
