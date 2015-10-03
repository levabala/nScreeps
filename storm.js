var globals = require('globals');
var action = require('action');
var spawn = require('spawn');

function storm(creep, role){
	var room = globals.getRoomCreep(creep);
	var wall = Game.getObjectById('');
	if(creep.moveTo(creep.room.controller) == 0){
		if(creep.pos.isNearTo(creep.room.controller)){
			creep.claimController(creep.room.controller);
		}
		else{
			creep.moveTo(creep.room.controller);
		}
	}
	else if(role == 'guard'){
		if(creep.pos.isNearTo(wall)){
			creep.attack(wall);
		}
		else{
			creep.moveTo(wall);
		}
	}
	else if(role == 'archer'){
		if(creep.pos.getRangeTo(wall) < 3){
			creep.rangedAttack(wall);
		}
		else{
			crep.moveTo(wall);
		}
	}
}

function getRole(creep){
	if(creep.getActiveBodyparts(ATTACK) > 0){
		return 'guard';
	}
	else if(creep.getActiveBodyparts(WORK) > 0){
		return 'builder';
	}
	else if(creep.getActiveBodyparts(RANGED_ATTACK) > 0){
		return 'archer';
	}
	else if(creep.getActiveBodyparts(HEAL) > 0){
		return 'healer';
	}
	else if(creep.getActiveBodyparts(CARRY) > 0){
	    return 'transport';
	}
}

function stormParty(creep){
	var room = globals.getRoomCreep(creep);
	var checkEnemy = room.find(FIND_HOSTILE_CREEPS);
	var target = Game.flags.target;
	var role = getRole(creep);
	var flag = Game.flags.storm;
	var wait = Game.flags.wait;
	var enemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
	var roomName = globals.getRoomCreep(creep);
	if(enemy){
		if(role == 'guard'){
			action.attack(creep, enemy);
		}
		if(role == 'archer'){
			action.rangedAttack(creep, enemy);
		}
		if(role == 'healer'){
			action.healCreep(creep);
		}
	}
	else if(roomName == 'E1N7'){
		if(role == 'guard' || role == 'archer'){
			storm(creep, role);
		}
		else if(role == 'builder'){
			var build = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
			if(build){
				if(creep.pos.isNearTo(build)){
					creep.build(build);
				}
				else{
					creep.moveTo(build);
				}
			}
		}
	}
	else{
		if(!creep.pos.isNearTo(flag)){
			creep.moveTo(flag);
		}
	}
}

module.exports = {
	stormParty: stormParty,
	getRole: getRole,
	storm: storm
}
