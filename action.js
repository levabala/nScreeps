var globals = require('globals');

function checkEnemy(room){
	var enemys = room.find(FIND_HOSTILE_CREEPS);
	return enemys;
}

//alarm for E4N9
var alarm = 0;
function alarms(){
	alarm+=1;
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
	if(creep.pos.isNearTo(needHeal)){
		console.log(creep.heal(needHeal));
		creep.heal(needHeal);
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
function party(room, checkEnemy){
	var action = Game.flags.action;
	var wait = Game.flags.Flag1;
	var creeps = room.find(FIND_MY_CREEPS, {
		filter: function(object) {
	   		return object.memory.role == 'guard' || object.memory.role == 'healer' || object.memory.role == 'archer';
		}
	});
	if(creeps.length > 0){
    	if(checkEnemy.length > 0){
    		var enemys = creeps[0].pos.findInRange(FIND_HOSTILE_CREEPS, 3);
    		if(enemys.length > 0){
    			for(var i in creeps){
    				var creep = creeps[i];
    				if(creep.memory.role == 'guard'){
    					attack(creep, enemys);
    				}
    				if(creep.memory.role == 'archer'){
    					rangedAttack(creep, enemys);
    				}
    				if(creep.memory.role == 'healer'){
    					healCreep(creep);
    				}
    			}
    		}
    		else{
    			for(var party in creeps){
    				if(!creeps[party].pos.isNearTo(checkEnemy[0])){
    					creeps[party].moveTo(checkEnemy[0]);
    				}
    			}
    		}
    	}
    	else{
    		for(var party in creeps){
    			if(!creeps[party].pos.isNearTo(wait)){
    				creeps[party].moveTo(wait);
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
	checkEnemy: checkEnemy,
	alarms: alarms,
	alarm: alarm
}
