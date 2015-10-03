var spawn = require('spawn');
var action = require('action');
var globals = require('globals');

function status(){
	//about creeps
	console.log('------->TICK<-------');
	console.log('Reserve CPU - '+Game.cpuLimit);
	console.log('CaravanNeed - '+spawn.caravanNeed+' CaravanCount - '+spawn.caravanCount);
	console.log('------->E4N9<-------');
	console.log('harvesterNeed - '+spawn.harvesterNeed+' harvesterCount - '+spawn.harvesterCount);
	console.log('builderNeed - '+spawn.builderNeed+' builderCount - '+spawn.builderCount);
	console.log('guardNeed - '+spawn.guardNeed+' guardCount - '+spawn.guardCount);
	console.log('upgraderNeed - '+spawn.upgraderNeed+' upgraderCount - '+spawn.upgraderCount);
	console.log('mechanicNeed - '+spawn.mechanicNeed+' mechanicCount - '+spawn.mechanicCount);
	console.log('mechanic1Need - '+spawn.mechanic1Need+' mechanic1Count - '+spawn.mechanic1Count);
	console.log('transportNeed - '+spawn.transportNeed+' transportCount - '+spawn.transportCount);
	console.log('turretNeed - '+spawn.turretNeed+' turretCount - '+spawn.turretCount);
	var room1 = Game.spawns.Spawn1.room;
	var creepsInRoom = globals.getCreepsInRoom(room1);
	console.log('allCreeps - '+creepsInRoom.length);
	//about enemys
	var alarm = action.alarm;
	if(alarm == 1){
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
	}
	//var room2 = Game.spawns.Spawn3.room
	//var creepsInRoom1 = globals.getCreepsInRoom(room2);
	/*
	console.log('------->E1N7<-------');
	console.log('harvesterNeed - '+spawn.harvesterNeed1+' harvesterCount - '+spawn.harvesterCount1);
	console.log('builderNeed - '+spawn.builderNeed1+' builderCount - '+spawn.builderCount1);
	console.log('guardNeed - '+spawn.guardNeed1+' guardCount - '+spawn.guardCount1);
	console.log('upgraderNeed - '+spawn.upgraderNeed1+' upgraderCount - '+spawn.upgraderCount1);
	console.log('mechanicNeed - '+spawn.mechanicNeed1+' mechanicCount - '+spawn.mechanicCount1);
	console.log('mechanic1Need - '+spawn.mechanic1Need1+' mechanic1Count - '+spawn.mechanic1Count1);
	console.log('transportNeed - '+spawn.transportNeed1+' transportCount - '+spawn.transportCount1);
	console.log('turretNeed - '+spawn.turretNeed1+' turretCount - '+spawn.turretCount1);
	console.log('allCreeps - '+creepsInRoom1.length);
	*/
}

module.exports = {
	status: status
}
