var globals = require('globals');
var creeps = require('creeps');
var action = require('action');

var needAllCreepsInRoom = 9;
var harvesterCount = 0;
var builderCount = 0;
var guardCount = 0;
var upgraderCount = 0;
var mechanicCount = 0;
var mechanic1Count = 0;
var transportCount = 0;
var archerCount = 0;
var healerCount = 0;

var harvesters = [];
var importantCreeps = 0;

function countCreeps(spawn, room){
	var creeps = globals.getCreepsInRoom(room);
	for(var name in creeps){
		var creep = creeps[name];
		if(creep.memory.role == 'builder'){
        	builderCount+=1;      
    	}
	    else if(creep.memory.role == 'harvester'){
	        harvesterCount+=1;
	        harvesters.push(creep);
	    }
	    else if(creep.memory.role == 'guard'){
	        guardCount+=1;
	    }
	    else if(creep.memory.role == 'upgrader'){
	        upgraderCount+=1;
	    }
	    else if(creep.memory.role == 'mechanic'){
	        mechanicCount+=1;
	    }
	    else if(creep.memory.role == 'mechanic1'){
	        mechanic1Count+=1;
	    }
	    else if(creep.memory.role == 'transport'){
	        transportCount+=1;
	        if(creep.ticksToLive < 300){
	        	importantCreeps+=1;
	        }
	    }
	    else if(creep.memory.role == 'archer'){
	    	archerCount+=1;
	    }
	    else if(creep.memory.role == 'healer'){
	    	healerCount+=1;
	    }
	}
}


var spawn1 = Game.spawns.Spawn1;
countCreeps(spawn1);

var harvesterNeed = 3 - harvesterCount;
var builderNeed = 2 - builderCount;
var guardNeed = 1 - guardCount;
var upgraderNeed = 1 - upgraderCount;
var mechanicNeed = 1 - mechanicCount;
var mechanic1Need = 1 - mechanic1Count;
var transportNeed = 1 - transportCount;
var archerNeed = 0;
var healerNeed = 0;
var alarm = action.alarm;
if(alarm == 1){
	archerNeed+=2;
	healerNeed+=1;
}

//	I have 3 types: 300, 550, 700, 1000.

function calcEnergy(room){
	if(room.energyCapacityAvailable >= 1000){
		return 1000;
	}
	else if(room.energyCapacityAvailable >= 700){
		return 700;
	}
	else if(room.energyCapacityAvailable >= 550){
		return 550;
	}
	else if(room.energyCapacityAvailable >= 300){
		return 300;
	}
}

function deleteCreeps(){
	for(var creep in Memory.creeps){
    	if(!Game.creeps[creep]){
            if(Memory.creeps[creep].safeToDelete){
                delete Memory.creeps[creep];
            } 
            else {
                Memory.creeps[creep].safeToDelete = true;
            }
        }
    }    
}

function calcTarget(){
	if(harvesterNeed == 1){
		if(harvesters[0].memory.target == 1){
			return 0;
		}
		return 1;
	}
	if(harvesterNeed == 2){
		return 0;
	}
}

function spawnCreeps(room, spawn, calcEnergy, target, importantCreeps){
	if(importantCreeps > 0){
		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
	}
	else if(transportNeed > 0){
		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
	}
	else if(harvesterNeed > 0){
		var energy = room.find(FIND_SOURCES);
		spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester", target : energy[target]} );
	}
	else if(transportNeed > 0){
		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport1"} );
	}
	else if(builderNeed > 0){
		spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder"} );
	}
	else if(mechanicNeed > 0){
		spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic"} );
	}
	else if(mechanic1Need > 0){
		spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic1"} );
	}
	else if(upgraderNeed > 0){
		spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
	}
	else if(guardNeed > 0){
		spawn.createCreep( bodies["guardBody"][calcEnergy], null , {role : "guard"} );
	}
	else if(archerNeed > 0){
		spawn.createCreep( bodies["archerBody"][calcEnergy], null , {role : "archer"} );
	}
	else if(healerNeed > 0){
		spawn.createCreep( bodies["healerBody"][calcEnergy], null , {role : "healer"} );
	}
}

var bodies = {
    havresterBody : {
        300: [WORK, WORK, MOVE, MOVE],
        550: [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK],
        700: [WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, WORK],
        1000: [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, CARRY, CARRY, MOVE]
    },
    builderBody : {
        300: [WORK, CARRY, MOVE, CARRY, MOVE],
        550: [MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, WORK, CARRY, WORK],
        700: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY],
        1000: [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]
    },
    upgraderBody : {
		300: [WORK, CARRY, MOVE, CARRY, MOVE],
		550: [MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, WORK, CARRY, WORK],
		700: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY],
		1000: [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]
    },
    guardBody : {
		300: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,ATTACK,ATTACK],
		550: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK],
		700: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK],
		1000: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK]
    },
    mechanicBody : {
		300: [MOVE,MOVE,WORK,CARRY,CARRY],
		550: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY],
		700: [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY],
		1000: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
    },
    transportBody : {
        300: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY],
        550: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE],
        700: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE],
        1000: [MOVE, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY],
    },
    archerBody : {
    	300: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,RANGED_ATTACK],
    	550: [MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK],
    	700: [MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK],
    	1000: [MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK]
    },
    healerBody : {
    	300: [MOVE,HEAL],
    	550: [MOVE,HEAL,HEAL],
    	700: [TOUGH,MOVE,MOVE,MOVE,HEAL,HEAL],
    	1000: [TOUGH,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL]
    }
}


module.exports = {
	countCreeps: countCreeps,
	bodies: bodies,
	calcEnergy: calcEnergy,
	spawnCreeps: spawnCreeps,
	deleteCreeps: deleteCreeps,
	needAllCreepsInRoom: needAllCreepsInRoom,
	harvesterCount: harvesterCount,
	builderCount: builderCount,
	guardCount: guardCount,
	scoutCount: scoutCount,
	upgraderCount: upgraderCount,
	mechanicCount: mechanicCount,
	mechanic1Count: mechanic1Count,
	transportCount: transportCount,
	calcEnergy: calcEnergy,
	harvesterNeed: harvesterNeed,
	builderNeed: builderNeed,
	guardNeed: guardNeed,
	scoutNeed: scoutNeed,
	upgraderNeed: upgraderNeed,
	mechanicNeed: mechanicNeed,
	mechanic1Need: mechanic1Need,
	transportNeed: transportNeed,
	calcTarget: calcTarget,
	importantCreeps: importantCreeps
}






