var globals = require('globals');

function checkEnemy(room){
	room.find(FIND_HOSTILE_CREEPS, {
		filter: function(object){
			if(object.getActiveBodyparts(ATTACK) > 0 || object.getActiveBodyparts(RANGED_ATTACK) > 0){
				return object;
			}
		}
	});
}

function findPosition(creep){
	if(creep.memory.id == '1'){
		return Game.flags.f1;
	}
	else if(creep.memory.id == '2'){
		return Game.flags.f2;
	}
	else if(creep.memory.id == '3'){
		return Game.flags.f3;
	}
	else if(creep.memory.id == '4'){
		return Game.flags.f4;
	}
	else if(creep.memory.id == '5'){
		return Game.flags.f5;
	}
	else if(creep.memory.id == '6'){
		return Game.flags.f6;
	}
	else if(creep.memory.id == '7'){
		return Game.flags.f7;
	}
	else if(creep.memory.id == '11'){
		return Game.flags.f11;
	}
	else if(creep.memory.id == '12'){
		return Game.flags.f12;
	}
	else if(creep.memory.id == '13'){
		return Game.flags.f13;
	}
	else if(creep.memory.id == '14'){
		return Game.flags.f14;
	}
}

function getRole(creep){
	if(creep.getActiveBodyparts(ATTACK) > 0){
		return 'warrior';
	}
	else{
		return 'archer';
	}
}

function defense(enemy, creeps){
	for(var i in creeps){
		if(creeps[i].memory.role == 'defense'){
			var f = findPosition(creeps[i]);
			if(creep.pos != f.pos){
				creep.moveTo(f, {reusePath: globals.reusePathTick});
			}
			else{
				var role = getRole(creeps[i]);
				if(role == 'warrior'){
					var forAttack;
					for(var x in enemy){
						if(creep.pos.isNearTo(enemy[x])){
							forAttack = enemy[x];
							break;
						}
					}
					creeps[i].attack(forAttack);
				}
				else if(role == 'archer'){
					var forRangeAttack;
					for(var y in enemy){
						if(creep.pos.getRangeTo(enemy[y]) <= 3){
							forAttack = enemy[y];
							break;
						}
					}
				}
			}
		}
	}
}

module.exports = {
	checkEnemy: checkEnemy,
	defense: defense
}
