var spawn = require('spawn');
var action = require('action');

function status(){
	//about creeps
	console.log('------->TICK<-------');
	console.log('------->E4N9<-------');
	console.log('harvesterNeed - '+spawn.harvesterNeed+' harvesterCount - '+spawn.harvesterCount);
	console.log('builderNeed - '+spawn.builderNeed+' builderCount - '+spawn.builderCount);
	console.log('guardNeed - '+spawn.guardNeed+' guardCount - '+spawn.guardCount);
	console.log('upgraderNeed - '+spawn.upgraderNeed+' upgraderCount - '+spawn.upgraderCount);
	console.log('mechanicNeed - '+spawn.mechanicNeed+' mechanicCount - '+spawn.mechanicCount);
	console.log('mechanic1Need - '+spawn.mechanic1Need+' mechanic1Count - '+spawn.mechanic1Count);
	console.log('transportNeed - '+spawn.transportNeed+' transportCount - '+spawn.transportCount);
	//about enemys
	var alarm = action.alarm;
	if(alarm == 1){
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
		console.log('DETECTED ENEMY!!!');
	}
}

module.exports = {
	status: status
}
