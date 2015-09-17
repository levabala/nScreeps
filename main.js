var globals = require('globals');
var creeps = require('creeps');
var spawn = require('spawn');
var harvester = require('harvester');
var action = require('action');
var builder = require('builder');
var mechanic = require('mechanic');
var mechanic1 = require('mechanic1');
var transport = require('transport');
var upgrade = require('upgrade');
var status = require('status');
var links = require('links');

var room1 = Game.spawns.Spawn1.room;
var spawn1 = Game.spawns.Spawn1;

var creepsInRoom = globals.getCreepsInRoom(room1);
if(creepsInRoom.length < spawn.needAllCreepsInRoom){
    var calcEnergy = spawn.calcEnergy(room1);
	spawn.spawnCreeps(room1, spawn1, calcEnergy);
}

for(var i = 0; i < creepsInRoom.length; i++) {
	var creep = creepsInRoom[i];
	if(creep.memory.role == 'upgrader'){
	    upgrade.upgrade(creep);
	}
	if(creep.memory.role == 'harvester'){
		var room = globals.getRoomCreep(creep);
		harvester.harvests(creep, room);
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
	if(creep.memory.role == 'transport'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			if(creep.carry.energy == 0){
				transport.takesEnergy(creep);
			}
			else{
				transport.transferToStore(creep);
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
}

status.status();
links.transfersLink(room1);

