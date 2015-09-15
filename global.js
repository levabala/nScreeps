var suicideCreepTick = 200;

function getCreepsInRoom(room){
	var creeps = room.find(FIND_MY_CREEPS);
	return creeps;
}

    
function getSpawn(room){
	return Game.spawns.Spawn1;
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
	return Game.spawns.Spawn1;
}

var roomOptions = {
	'E4N9': {
		maxHits: 260000
	}
}

module.exports = {
	roomOptions: roomOptions,
	getCreepsInRoom: getCreepsInRoom,
	suicideCreepTick: suicideCreepTick,
	getSpawn: getSpawn,
	getRoomSpawn: getRoomSpawn
}

