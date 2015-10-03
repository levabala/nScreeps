var globals = require('globals');
var action = require('action');

//for E4N9
var harvesterCount = 0;
var builderCount = 0;
var guardCount = 0;
var upgraderCount = 0;
var mechanicCount = 0;
var mechanic1Count = 0;
var transportCount = 0;
var archerCount = 0;
var healerCount = 0;
var turretCount = 0;

var caravanCount = 0;

var harvesters = [];
var turrets = [];

var harvesterCount1 = 0;
var builderCount1 = 0;
var guardCount1 = 0;
var upgraderCount1 = 0;
var mechanicCount1 = 0;
var mechanic1Count1 = 0;
var transportCount1 = 0;
var archerCount1 = 0;
var healerCount1 = 0;
var turretCount1 = 0;

var harvesters1 = [];
var turrets1 = [];

function countCreeps(spawn, room){
	var creeps = globals.getCreepsInRoom(room);
	var name = room.name;
	if(name == 'E4N9'){	
	    for(var i in Game.creeps){
            if(Game.creeps[i].memory.role == 'caravan'){
                caravanCount+=1;
            }
        }
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
		    else if(creep.memory.role == 'turret'){
		    	turretCount+=1;
		    	turrets.push(creep);
		    }
		}
	}
	else if(name == 'E1N7'){
		for(var name in creeps){
			var creep = creeps[name];
			if(creep.memory.role == 'builder'){
	        	builderCount1+=1;      
	    	}
		    else if(creep.memory.role == 'harvester'){
		        harvesterCount1+=1;
		        harvesters1.push(creep);
		    }
		    else if(creep.memory.role == 'guard'){
		        guardCount1+=1;
		    }
		    else if(creep.memory.role == 'upgrader'){
		        upgraderCount1+=1;
		    }
		    else if(creep.memory.role == 'mechanic'){
		        mechanicCount1+=1;
		    }
		    else if(creep.memory.role == 'mechanic1'){
		        mechanic1Count1+=1;
		    }
		    else if(creep.memory.role == 'transport'){
		        transportCount1+=1;
		    }
		    else if(creep.memory.role == 'archer'){
		    	archerCount1+=1;
		    }
		    else if(creep.memory.role == 'healer'){
		    	healerCount1+=1;
		    }
		    else if(creep.memory.role == 'turret'){
		    	turretCount1+=1;
		    	turrets1.push(creep);
		    }
		}
	}
}


var spawn1 = Game.spawns.Spawn1;
var room1 = Game.spawns.Spawn1.room;
var room1Name = Game.spawns.Spawn1.room.name;
/*
var spawn3 = Game.spawns.Spawn3;
var room2 = Game.spawns.Spawn3.room;
countCreeps(spawn3, room2);
var room2Name = Game.spawns.Spawn3.room.name;
*/
countCreeps(spawn1, room1);

var harvesterNeed = 2 - harvesterCount;
var builderNeed = 2 - builderCount;
var guardNeed = 1 - guardCount;
var upgraderNeed = 1 - upgraderCount;
var mechanicNeed = 2 - mechanicCount;
var mechanic1Need = 2 - mechanic1Count;
var transportNeed = 2 - transportCount;
var turretNeed = 0 - turretCount;

var caravanNeed = 2 - caravanCount;

var harvesterNeed1 = 2 - harvesterCount1;
var builderNeed1 = 1 - builderCount1;
var guardNeed1 = 1 - guardCount1;
var upgraderNeed1 = 1 - upgraderCount1;
var mechanicNeed1 = 3 - mechanicCount1;
var mechanic1Need1 = 0 - mechanic1Count1;
var transportNeed1 = 2 - transportCount1;
var turretNeed1 = 0 - turretCount1;

var archerNeed1 = 0;
var healerNeed1 = 0;


var archerNeed = 0;
var healerNeed = 0;

var checkEnemys = action.checkEnemy(room1);

//var checkEnemys1 = action.checkEnemy(room2);
var needAllCreepsInRoom1 = 10;
/*
if(checkEnemys1.length > 0){
    needAllCreepsInRoom1 = 13;
	guardNeed1 = 2 - guardCount;
	archerNeed1 = 1 - archerCount;
	healerNeed1 = 1 - healerCount;
}
*/
var needAllCreepsInRoom = 17;

if(checkEnemys.length > 0){
    needAllCreepsInRoom = 14;
	guardNeed = 4 - guardCount;
	archerNeed = 1 - archerCount;
	healerNeed = 1 - healerCount;
	turretNeed = 5 - turretCount;
}

var allCount = harvesterCount + builderCount + guardCount + upgraderCount + mechanicCount + mechanic1Count + transportCount + archerCount + healerCount;
var allCount1 = harvesterCount1 + builderCount1 + guardCount1 + upgraderCount1 + mechanicCount1 + mechanic1Count1 + transportCount1 + archerCount1 + healerCount1;

var alarm = action.alarm;
if(alarm == 1){
	for(var i in checkEnemys){
		if(checkEnemys[i].getActiveBodyparts(ATTACK) > 0 || checkEnemys[i].getActiveBodyparts(HEAL) > 0 || checkEnemys[i].getActiveBodyparts(RANGED_ATTACK) > 0){
			archerNeed+=2;
			healerNeed+=1;
			guardNeed+=1;
			turretNeed = 0 - turretCount;
		}
	}
}

var alarm1 = action.alarm1;
if(alarm1 == 1){
	for(var i in checkEnemys1){
		if(checkEnemys1[i].getActiveBodyparts(ATTACK) > 0 || checkEnemys1[i].getActiveBodyparts(HEAL) > 0 || checkEnemys1[i].getActiveBodyparts(RANGED_ATTACK) > 0){
			archerNeed1+=2;
			healerNeed1+=1;
			guardNeed1+=1;
		}
	}
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
	for (var i in spawns) {
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

function calcTarget(room){
    if(room.name == 'E4N9'){
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
    else if(room.name == 'E1N7'){
        if(harvesterNeed1 == 1){
    		if(harvesters1[0].memory.calc == 0){
    			return 1;
    		}
    		else{
    		    return 0;
    		}
    	}
    	if(harvesterNeed1 == 2){
    		return 0;
    	}
    }
}

function calcTurretId(){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    //for second room add f....
    for(var i in turrets){
        if(turrets[i].memory.id == 0){
            a+=1;
        }
        else if(turrets[i].memory.id == 1){
            b+=1;
        }
        else if(turrets[i].memory.id == 2){
            c+=1;
        }
        else if(turrets[i].memory.id == 3){
            d+=1;
        }
        else if(turrets[i].memory.id == 4){
            e+=1;
        }
    }
    if(a == 0){
        return 0;
    }
    else if(b == 0){
        return 1;
    }
    else if(c == 0){
        return 2;
    }
    else if(d == 0){
        return 3;
    }
    else if(e == 0){
        return 4;
    }
}

function calcTurretTarget(creep){
	if(creep.memory.id == 0){
		target = Game.flags.turret1;
		return target;
	}
	if(creep.memory.id == 1){
		target = Game.flags.turret2;
		return target;
	}
	if(creep.memory.id == 2){
		target = Game.flags.turret3;
		return target;
	}
	if(creep.memory.id == 3){
		target = Game.flags.turret4;
		return target;
	}
	if(creep.memory.id == 4){
		target = Game.flags.turret5;
		return target;
	}
	//for second room add more if
}

function spawnCreeps(room, spawn, calcEnergy, target){
    if(room.name == 'E4N9'){
    	if(transportNeed > 0){
    		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
    	}
    	else if(harvesterNeed > 0){
    		var energy = room.find(FIND_SOURCES);
    		spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester", target : energy[target].id, calc : target} );
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
    		Game.spawns.Spawn2.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
    	}
    	/*
    	else if(caravanNeed > 0){
    	    Game.spawns.Spawn2.createCreep( [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], null , {role : "caravan"} );
    	}
    	*/
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
    else if(room.name == 'E1N7'){
        if(harvesterNeed1 > 0){
    		var energy = room.find(FIND_SOURCES);
    		spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester", target : energy[target].id, calc : target} );
    	}
        else if(transportNeed1 > 0){
    		spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
    	}
    	else if(builderNeed1 > 0){
    		spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder"} );
    	}
    	else if(mechanicNeed1 > 0){
    		spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic"} );
    	}
    	else if(mechanic1Need1 > 0){
    		spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic1"} );
    	}
    	else if(upgraderNeed1 > 0){
    		spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
    	}
    	else if(guardNeed1 > 0){
    		spawn.createCreep( bodies["guardBody"][calcEnergy], null , {role : "guard"} );
    	}
    	else if(archerNeed1 > 0){
    		spawn.createCreep( bodies["archerBody"][calcEnergy], null , {role : "archer"} );
    	}
    	else if(healerNeed1 > 0){
    		spawn.createCreep( bodies["healerBody"][calcEnergy], null , {role : "healer"} );
    	}
    }
}

function spawnTurret(spawn, calcEnergy, calcTurretId){
	if(turretNeed > 0){
        Game.spawns.Spawn2.createCreep( bodies["turretBody"][calcEnergy], null , {role : "turret", id : calcTurretId});
    }
}

var bodies = {
	turretBody : {
		300: [MOVE,RANGED_ATTACK],
		550: [MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK],
		700: [MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK],
		1000: [MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK]
	},
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
	turretNeed: turretNeed,
	turrets: turrets,
	turretCount: turretCount,
	calcTurretId: calcTurretId,
	calcTurretTarget: calcTurretTarget,
	spawnTurret: spawnTurret,
	allCount1: allCount1,
	harvesterCount1: harvesterCount1,
	builderCount1: builderCount1,
	guardCount1: guardCount1,
	upgraderCount1: upgraderCount1,
	mechanicCount1: mechanicCount1,
	mechanic1Count1: mechanic1Count1,
	transportCount1: transportCount1,
	archerCount1: archerCount1,
	healerCount1: healerCount1,
	turretCount1: turretCount1,
	harvesters1: harvesters1,
	turrets1: turrets1,
	harvesterNeed1: harvesterNeed1,
	builderNeed1: builderNeed1,
	guardNeed1: guardNeed1,
	upgraderNeed1: upgraderNeed1,
	mechanicNeed1: mechanicNeed1,
	mechanic1Need1: mechanic1Need1,
	transportNeed1: transportNeed1,
	turretNeed1: turretNeed1,
	archerNeed1: archerNeed1,
	healerNeed1: healerNeed1,
	//checkEnemys1: checkEnemys1,
	needAllCreepsInRoom1: needAllCreepsInRoom1,
	caravanNeed: caravanNeed,
	caravanCount: caravanCount

}
