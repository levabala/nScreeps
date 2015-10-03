var suicideCreepTick = 200;

function getCreepsInRoom(room){
	var creeps = room.find(FIND_MY_CREEPS);
	return creeps;
}

function getSpawn(room){
    var spawn = room.find(FIND_MY_SPAWNS);
	return spawn;
}

function getRoomSpawn(spawn){
	var room = spawn.room;
	return room;
}

function getRoomCreep(creep){
	var room = creep.room;
	return room;
}

function getNameRoom(creep){
	var roomName = creep.pos.roomName;
	return roomName;
}

var roomOptions = {
	E4N9: {
		maxHits: 750000
	},
	E1N7: {
	    maxHits: 25000
	}
}

module.exports = {
	roomOptions: roomOptions,
	getCreepsInRoom: getCreepsInRoom,
	suicideCreepTick: suicideCreepTick,
	getSpawn: getSpawn,
	getRoomCreep: getRoomCreep,
	getRoomSpawn: getRoomSpawn,
	getNameRoom: getNameRoom
}
