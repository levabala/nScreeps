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


spawn.countCreeps(Game.spawns.Spawn1);

var harvesterNeed = 2 - spawn.harvesterCount;
var builderNeed = 1 - spawn.builderCount ;
var guardNeed = 1 - spawn.guardCount;
var scoutNeed = 1 - spawn.scoutCount;
var upgraderNeed = 1 - spawn.upgraderCount;
var mechanicNeed = 1 - spawn.mechanicCount;
var mechanic1Need = 1 - spawn.mechanic1Count;
var transportNeed = 1 - spawn.transportCount;

var room1 = Game.spawns.Spawn1.room;
var spawn1 = Game.spawns.Spawn1;

var creepsInRoom = globals.getCreepsInRoom(room1);
if(creepsInRoom != spawn.needAllCreepsInRoom){
	spawn.spawnCreeps(room1, spawn1);
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
