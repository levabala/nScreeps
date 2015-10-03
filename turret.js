var globals = require('globals');
var action = require('action');
var spawn = require('spawn');

function turret(creep){
	var flag = spawn.calcTurretTarget(creep);
	if(creep.pos.isNearTo(flag)){
		//if(action.alarm == 1){
			var enemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
			if(enemy.length > 0){
				creep.rangedMassAttack();
			}
		//}
	}
	else{
		creep.moveTo(flag);
	}
}

module.exports = {
	turret: turret
}


