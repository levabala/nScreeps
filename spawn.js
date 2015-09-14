var global = require('global');
var creeps = require('creeps');

function countCreeps(spawn){
	var room = global.getRoomSpawn(spawn);
	var creeps = global.getCreepsInRoom;
	for(var name in creeps){
		var creep = creeps[name];
		if(creep.memory.role == 'builder'){
        	Memory.rooms.room.builderCount+=1;      
    	}
	    if(creep.memory.role == 'harvester'){
	        Memory.rooms.room.harvesterCount+=1;
	    }
	    if(creep.memory.role == 'guard'){
	        Memory.rooms.room.guardCount+=1;
	    }
	    if(creep.memory.role == 'scout'){
	        Memory.rooms.room.scoutCount+=1;
	    }
	    if(creep.memory.role == 'upgrader'){
	        Memory.rooms.room.upgraderCount+=1;
	    }
	    if(creep.memory.role == 'mechanic'){
	        Memory.rooms.room.mechanicCount+=1;
	    }
	    if(creep.memory.role == 'mechanic1'){
	        Memory.rooms.room.mechanic1Count+=1;
	    }
	    if(creep.memory.role == 'transport'){
	        Memory.rooms.room.transportCount+=1;
	    }
	}
}
//	I have 3 types: 300, 550, 700, 1000.

function calcEnergy{
	if(Game.rooms.room.energyCapacityAvailable <= 300){
		return 300;
	}
	else if(Game.rooms.room.energyCapacityAvailable <= 550){
		return 550;
	}
	else if(Game.rooms.room.energyCapacityAvailable <= 700){
		return 700;
	}
	else if(Game.rooms.room.energyCapacityAvailable <= 1000){
		return 1000;
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

function spawnCreeps(room, spawn){
	var calcEnergy = calcEnergy(room);
	if(Memory.rooms.room.transportNeed > 0){
		Game.spawns.spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
	}
	else if(Memory.rooms.room.harvesterNeed > 0){
		Game.spawns.spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester"} );
	}
	else if(Memory.rooms.room.scoutNeed > 0){
		Game.spawns.spawn.createCreep( bodies["scoutBody"][calcEnergy], null , {role : "scout"} );
	}
	else if(Memory.rooms.room.builderNeed > 0){
		Game.spawns.spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder"} );
	}
	else if(Memory.rooms.room.mechanicNeed > 0){
		Game.spawns.spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic"} );
	}
	else if(Memory.rooms.room.mechanic1Need > 0){
		Game.spawns.spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic1"} );
	}
	else if(Memory.rooms.room.upgraderNeed > 0){
		Game.spawns.spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
	}
	else if(Memory.rooms.room.guardNeed > 0){
		Game.spawns.spawn.createCreep( bodies["guardBody"][calcEnergy], null , {role : "guard"} );
	}
}

var bodies = {
    havresterBody : {
        300: [WORK, WORK, MOVE, MOVE],
        550: [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK],
        700: [WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, WORK],
        1000: [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, CARRY, CARRY, MOVE]
    },
    scoutBody : {
        300: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY],
        550: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE],
        700: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, CARRY, MOVE],
        1000: [MOVE, MOVE, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY],
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
	calcTarget: calcTarget
}
