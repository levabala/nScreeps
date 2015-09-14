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

spawn.CountCreeps(Game.spawns.Spawn1);

Memory.rooms.E4N9.harvesterNeed = 2 - Memory.rooms.E4N9.harvesterCount;
Memory.rooms.E4N9.builderNeed = 1 - Memory.rooms.E4N9.builderCount ;
Memory.rooms.E4N9.guardNeed = 1 - Memory.rooms.E4N9.guardCount;
Memory.rooms.E4N9.scoutNeed = 1 - Memory.rooms.E4N9.scoutCount;
Memory.rooms.E4N9.upgraderNeed = 1 - Memory.rooms.E4N9.upgraderCount;
Memory.rooms.E4N9.mechanicNeed = 1 - Memory.rooms.E4N9.mechanicCount;
Memory.rooms.E4N9.mechanic1Need = 1 - Memory.rooms.E4N9.mechanic1Count;
Memory.rooms.E4N9.transportNeed = 1 - Memory.rooms.E4N9.transportCount;

var creepsInRoom = getCreepsInRoom(E4N9)
if(creepsInRoom != Memory.rooms.E4N9.needAllCreepsInRoom){
	spawn.spawnCreeps(E4N9, Spawn1);
}
