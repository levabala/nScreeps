var creeps = require('creeps');

var allCreeps = room.find(FIND_MY_CREEPS);
var suicideCreepTick = 200;

function getSpawn(creep){
	var closestSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
	return closestSpawn;
}

function room(creep){
	var room = creep.pos.roomName;
	return Game.rooms.room;		
}

var roomOptions {
	'E4N9': {
		maxHits: 260000
	}
}

module.exports = {
	roomOptions: roomOptions,
	allCreeps: allCreeps,
	room: room,
	suicideCreepTick: suicideCreepTick,
	getSpawn: getSpawn
}
