var global = require('global');
var creeps = require('creeps');
var spawn = require('spawn');
var harvester = require('harvester');
var action = require('action');
var builder = require('builder');
var mechanic = require('mechanic');
var mechanic1 = require('mechanic1');
var transport = require('transport');
var upgrade = require('upgrade');

Memory.rooms.E4N9.needAllCreepsInRoom = 9;
Memory.rooms.E4N9.harvesterCount = 0;
Memory.rooms.E4N9.builderCount = 0;
Memory.rooms.E4N9.guardCount = 0;
Memory.rooms.E4N9.scoutCount = 0;
Memory.rooms.E4N9.upgraderCount = 0;
Memory.rooms.E4N9.mechanicCount = 0;
Memory.rooms.E4N9.mechanic1Count = 0;
Memory.rooms.E4N9.transportCount = 0;
var target;
spawn.CountCreeps(Game.spawns.Spawn1);

Memory.rooms.E4N9.harvesterNeed = 2 - Memory.rooms.E4N9.harvesterCount;
Memory.rooms.E4N9.builderNeed = 1 - Memory.rooms.E4N9.builderCount ;
Memory.rooms.E4N9.guardNeed = 1 - Memory.rooms.E4N9.guardCount;
Memory.rooms.E4N9.scoutNeed = 1 - Memory.rooms.E4N9.scoutCount;
Memory.rooms.E4N9.upgraderNeed = 1 - Memory.rooms.E4N9.upgraderCount;
Memory.rooms.E4N9.mechanicNeed = 1 - Memory.rooms.E4N9.mechanicCount;
Memory.rooms.E4N9.mechanic1Need = 1 - Memory.rooms.E4N9.mechanic1Count;
Memory.rooms.E4N9.transportNeed = 1 - Memory.rooms.E4N9.transportCount;

var creepsInRoom = getCreepsInRoom(E4N9);
if(creepsInRoom != Memory.rooms.E4N9.needAllCreepsInRoom){
	spawn.spawnCreeps(E4N9, Spawn1);
}

for (var i = 0; i < creepsInRoom.length; i++) {
	var creep = creepsInRoom[i];
	if(creep.memory.role == 'harvester'){
		if(creep.carry.energy != creep.carryCapacity){
			harvester.harvest(creep, E4N9);
		}
		else{
			harvester.transferToLink(creep);
		}
	}
	if(creep.memory.role == 'builder'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			if(creep.carry.energy == 0){
				creeps.takeEnergy(creep);
			}
			else{
				builder.build(creep);
			}
		}
	}
	if(creep.memory.role == 'scout'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			if(creep.carry.energy == 0){
				scout.takesEnergy(creep);
			}
			else{
				scout.transferToStore(creep);
			}
		}
	}
	if(creep.memory.role == 'mechanic'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			mechanic.repairRamparts(creep);
		}
	}
	if(creep.memory.role == 'mechanic1'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			mechanic1.repairRoad(creep);
		}
	}
	if(creep.memory.role == 'build'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			builder.build(creep);
		}
	}
	if(creep.memory.role == 'transport'){
		var clean = creeps.suicideCreep(creep);
		if(clean == 0){
			transport.transportTo(creep);
		}
	}
}

