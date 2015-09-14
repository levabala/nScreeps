var global = require('global');

//logic of warrior's
function attack(creep){
	var enemys = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
	creep.say('FISAB-IMBA');
	if(creep.pos.isNearTo(enemys)){
		creep.attack(enemys);
	}
	else{
		creep.moveTo(enemys);
	}
}

function dodge(creep){
	var closestCreep = creep.pos.findClosestByPath(FIND_MY_CREEPS);
	creep.moveTo(closestCreep);
}

//logic for healer's
function healCreep(creep){
	var needHeal = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
   		filter: function(object) {
       		return object.hits < object.hitsMax;
   		}
	});
	if(creep.pos.isNearTo(healCreep)){
		creep.heal(healCreep);
	}
	else{
		creep.moveTo(healCreep);
	}
}

//logic for archer's
function rangedAttack(creep){
	var enemys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
	creep.rangedAttack(enemys);
}

//party of 3 creep types: guard, healer, archer.
function party(creep){
	//need make normal action
	var action = Game.flags.action;
	var enemys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 5);
	var creepsForParty = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
   		filter: function(object) {
       		return object.memory.role == 'guard' || object.memory.role == 'healer' || object.memory.role == 'archer';
   		}
	});
	if(enemys.length > 0){
		for(var i in creepsForParty){
			var creep = creepsForParty[i];
			if(creep[i].memory.role == 'guard'){
				attack(creep[i]);
			}
			if(creep[i].memory.role == 'archer'){
				rangedAttack(creep[i]);
			}
			if(creep[i].memory.role == 'healer'){
				healCreep(creep[i]);
			}
		}
	}
	else{
		for(var party in creepsForParty){
			creepsForParty[party].moveTo(action);
		}
	}
}

module.exports = {
	attack: attack,
	dodge: dodge,
	healCreep: healCreep,
	rangedAttack: rangedAttack,
	party: party
}
