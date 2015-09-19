var globals = require('globals');

function checkEnemy(room){
	var enemys = room.find(FIND_HOSTILE_CREEPS);
	return enemys;
}

//logic of warrior's
function attack(creep, enemys){
	creep.say('FISAB-IMBA');
	if(creep.pos.isNearTo(enemys[0])){
		creep.attack(enemys[0]);
	}
	else{
		creep.moveTo(enemys[0]);
	}
}

function storm(creep, wall){
	if(creep.pos.isNearTo(wall)){
		creep.attack(wall);
	}
	else{
		creep.moveTo(wall);
	}
}

function dodge(creep){
	var closestCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS);
	creep.moveTo(closestCreep);
}

//logic for healer's
function healCreep(creep){
	var needHeal = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
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
function rangedAttack(creep, enemys){
	var range = creep.pos.getRangeTo(enemys[0]);
	if(enemys.length > 1){
		if(range <= 3){
			creep.rangedMassAttack();
		}
		else{
			creep.moveTo(enemys[0]);
		}
	}
	else{
		if(range <= 3){
			creep.rangedAttack(enemys[0]);
		}
		else{
			creep.moveTo(enemys[0]);
		}
	}
}

//party of 3 creep types: guard, healer, archer.
function party(room){
	//need make normal action
	var checkEnemy = checkEnemy(room);
	var action = Game.flags.action;
	var creeps = room.find(FIND_MY_CREEPS, {
   		filter: function(object) {
       		return object.memory.role == 'guard' || object.memory.role == 'healer' || object.memory.role == 'archer';
   		}
	});
	if(checkEnemy.length > 0){
		var enemys = creeps[0].pos.findInRange(FIND_HOSTILE_CREEPS, 5);
		if(enemys.length > 0){
			for(var i in creeps){
				var creep = creeps[i];
				if(creep[i].memory.role == 'guard'){
					attack(creep, enemys);
				}
				if(creep[i].memory.role == 'archer'){
					rangedAttack(creep, enemys);
				}
				if(creep[i].memory.role == 'healer'){
					healCreep(creep);
				}
			}
		}
	}
	else{
		if(checkEnemy.length > 0){
			for(var party in creeps){
				if(!creep.pos.isNearTo(checkEnemy[0])){
					creeps[party].moveTo(checkEnemy[0]);
				}
			}
		}
	}
}

module.exports = {
	attack: attack,
	dodge: dodge,
	healCreep: healCreep,
	rangedAttack: rangedAttack,
	party: party,
	storm: storm,
	checkEnemy: checkEnemy
}
