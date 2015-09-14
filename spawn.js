var global = require('global');
var creeps = require('creeps');

function countAvaibleEnergy(room){
	if(Game.rooms.room.energyCapacityAvailable == Game.rooms.room.energyAvailable){
		return Game.rooms.room.energyAvailable;
	}
	else{
		return false;
	}
}
