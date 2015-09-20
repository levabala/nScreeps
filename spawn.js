var globals = require('globals');
var action = require('action');

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
var room1 = Game.spawns.Spawn1.room;

countCreeps(spawn1, room1);

var harvesterNeed = 2 - harvesterCount;
var builderNeed = 1 - builderCount;
var guardNeed = 1 - guardCount;
var upgraderNeed = 1 - upgraderCount;
var mechanicNeed = 2 - mechanicCount;
var mechanic1Need = 2 - mechanic1Count;
var transportNeed = 2 - transportCount;

var archerNeed = 0;
var healerNeed = 0;

var checkEnemys = action.checkEnemy(room1);

var needAllCreepsInRoom = 12;

if(checkEnemys.length > 0){
    needAllCreepsInRoom = 14;
	guardNeed = 2 - guardCount;
	archerNeed = 1 - archerCount;
	healerNeed = 1 - healerCount;
}

var allCount = harvesterCount + builderCount + guardCount + upgraderCount + mechanicCount + mechanic1Count + transportCount + archerCount + healerCount;

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

function getFreeSpawn(room){
	var spawns = globals.getSpawn(room);
	for (var i = 0; i < spawns.length; i++) {
		if(spawns[i].spawning == undefined){
			return spawns[i];
		}
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
		if(harvesters[0].memory.calc == 0){
			return 1;
		}
		else{
		    return 0;
		}
	}
	if(harvesterNeed == 2){
		return 0;
	}
}

function checkSpawn(room, freeSpawn){
	var spawns = globals.getSpawn(room);
	for(var i in spawns){
		if(spawns[i] != freeSpawn){
		    if(spawns[i].spawning != undefined){
			    var name1 = spawns[i].spawning.name;
			    return Game.creeps[name1].memory.role;
		    }
		}
		else{
		    return 0;
		}
	}
}

function spawnCreeps(room, spawn, calcEnergy, target, checkSpawns){
    if(spawn != undefined){
    	if(checkSpawns != 'transport' || checkSpawns == 0){
	    	if(transportNeed > 0){
	    		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
	    	}
	    }
    	if(checkSpawns != 'harvester' || checkSpawns == 0){
    		if(harvesterNeed > 0){
    			var energy = room.find(FIND_SOURCES);
    			spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester", target : energy[target].id, calc : target} );
    		}
    	}
    	if(checkSpawns != 'builder' || checkSpawns == 0){
	    	if(builderNeed > 0){
	    		spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder"} );
	    	}
	    }
	    if(checkSpawns != 'mechanic' || checkSpawns == 0){
	    	if(mechanicNeed > 0){
	    		spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic"} );
	    	}
	    }
	    if(checkSpawns != 'mechanic1' || checkSpawns == 0){
    		if(mechanic1Need > 0){
    			spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic1"} );
    		}
    	}
    	if(checkSpawns != 'upgrader' || checkSpawns == 0){
	    	if(upgraderNeed > 0){
	    		spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
	    	}
	    }
	    if(checkSpawns != 'guard' || checkSpawns == 0){
    		if(guardNeed > 0){
    			spawn.createCreep( bodies["guardBody"][calcEnergy], null , {role : "guard"} );
    		}
    	}
    	if(checkSpawns != 'archer' || checkSpawns == 0){
	    	if(archerNeed > 0){
	    		spawn.createCreep( bodies["archerBody"][calcEnergy], null , {role : "archer"} );
	    	}
	    }
	    if(checkSpawns != 'healer' || checkSpawns == 0){
	    	if(healerNeed > 0){
	    		spawn.createCreep( bodies["healerBody"][calcEnergy], null , {role : "healer"} );
	    	}
	    }
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
	upgraderCount: upgraderCount,
	mechanicCount: mechanicCount,
	mechanic1Count: mechanic1Count,
	transportCount: transportCount,
	calcEnergy: calcEnergy,
	harvesterNeed: harvesterNeed,
	builderNeed: builderNeed,
	guardNeed: guardNeed,
	healerNeed: healerNeed,
	archerNeed: archerNeed,
	upgraderNeed: upgraderNeed,
	mechanicNeed: mechanicNeed,
	mechanic1Need: mechanic1Need,
	transportNeed: transportNeed,
	calcTarget: calcTarget,
	allCount: allCount,
	harvesters: harvesters,
	getFreeSpawn: getFreeSpawn,
	checkSpawn: checkSpawn
}
