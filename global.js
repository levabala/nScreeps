var creeps = require('creeps');

var suicideCreepTick = 200;

function getCreepsInRoom(room){
	var creeps = room.find(FIND_MY_CREEPS);
	return creeps;
}

function getSpawn(room)
	var spawn = Game.spawns.Spawn1;
	return spawn;
}

function getRoomCreep(creep){
	var room = creep.room;
	return room;
}

function getNameRoomCreep(creep){
	var room = creep.pos.roomName;
	return room;
}

function getRoomSpawn(spawn){
	var room = Game.spawns.spawn.pos.roomName;
	return room;
}

var roomOptions {
	'E4N9': {
		maxHits: 260000
	}
}

module.exports = {
	roomOptions: roomOptions,
	getCreepsInRoom: getCreepsInRoom,
	room: room,
	suicideCreepTick: suicideCreepTick,
	getSpawn: getSpawn,
	getRoomSpawn: getRoomSpawn
}

