var globals = require('globals');
var spawn = require('spawn');

function determineRole(creep){
  	if(creep.getActiveBodyparts(ATTACK) > 0){
		creep.memory.role = 'guard';
	}
	else if(creep.getActiveBodyparts(RANGED_ATTACK) > 0){
		if(spawn.archerNeed > 0){
			creep.memory.role = 'archer';
		}
		else{
			var checkedId = spawn.checkIdTurret(turretId);
			creep.memory.role = 'turret';
			creep.memory.id = checkedId;
		}
	}
	else if(creep.getActiveBodyparts(WORK) > 0){
		if(spawn.mechanicNeed > 0){
			creep.memory.role = 'mechanic';
		}
		else if(spawn.mechanic1Need > 0){
			creep.memory.role = 'mechanic1';
		}
		else if(spawn.builderNeed > 0){
			creep.memory.role = 'builder';
		}
		else if(spawn.upgraderNeed > 0){
			creep.memory.role = 'upgrader';
		}
	}
	else if(creep.getActiveBodyparts(CARRY) > 0){
		if(spawn.transportNeed > 0){
			creep.memory.role = 'transport';
		}
	}
}

function takeEnergy(creep){
	var room = globals.getRoomCreep(creep);
	var roomName = globals.getNameRoom(creep);
	if(roomName == 'E4N9'){
	    var link = Game.getObjectById('56018d4034274bb8090c53b4');
	}
	else if(roomName == 'E1N7'){
	    
	}
  	var rangeToStorage = creep.pos.getRangeTo(creep.room.storage);
  	var rangeToLink = creep.pos.getRangeTo(link);
    if(link){
      	if(link && (rangeToStorage > rangeToLink)){
    		if(creep.pos.isNearTo(link)){
    			link.transferEnergy(creep);
    		}
    		else{
    			creep.moveTo(link);
    		}
      	}
      	else if(creep.room.storage){
    		    if(creep.pos.isNearTo(creep.room.storage)){
    			    creep.room.storage.transferEnergy(creep);
    		       }
        		else{
        		  creep.moveTo(creep.room.storage);
        		}
    	}
    	else{
    		if(roomName == 'E4N9'){
    			var allCount = spawn.allCount;
    		}
    		else if(roomName == 'E1N7'){
    		    var allCount = spawn.allCount1;
    		}
    		  	if(spawn.needAllCreepsInRoom <= allCount.length){
    				var spawn = globals.getSpawn(room);
    			 	if(creep.pos.isNearTo(spawn[0])){
    					spawn[0].transferEnergy(creep);
    				}
    				else{
    				  	creep.moveTo(spawn[0]);
    			 	}
    		  }
    	 }
  }
  	else if(creep.room.storage){
		if(creep.pos.isNearTo(creep.room.storage)){
			creep.room.storage.transferEnergy(creep);
		}
		else{
		  creep.moveTo(creep.room.storage);
		}
	}
	else{
		if(roomName == 'E4N9'){
			var allCount = spawn.allCount;
			var needAllCreepsInRoom = spawn.needAllCreepsInRoom;
		}
		if(roomName == 'E1N7'){
		    var allCount = room.find(FIND_MY_CREEPS);
		    var needAllCreepsInRoom = 8;
		}
		  	if(needAllCreepsInRoom <= allCount.length){
				var spawn = globals.getSpawn(room);
			 	if(creep.pos.isNearTo(spawn[0])){
					spawn[0].transferEnergy(creep);
				}
				else{
				  	creep.moveTo(spawn[0]);
			 	}
		 }
	 }
}

function suicideCreep(creep){
  if(creep.ticksToLive < globals.suicideCreepTick){
      var room = globals.getRoomCreep(creep);
    	if(room.name == 'E4N9'){
    	 var spawn = globals.getSpawn(room);
    	 var storage = room.storage;
    	 if(creep.pos.isNearTo(storage)){
    		creep.transferEnergy(storage);
    		creep.suicide();
    	 }
    	 else{
    		creep.moveTo(storage);
    	 }
    	 cleanMemory();
    	 return 1;
    	}
    	else if(room.name == 'E1N7'){
    	        	 var spawn = globals.getSpawn(room);
    	 if(creep.pos.isNearTo(spawn)){
    		creep.transferEnergy(spawn);
    		creep.suicide();
    	 }
    	 else{
    		creep.moveTo(spawn);
    	 }
    	}
  }
  return 0;
}

function cleanMemory(){
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


module.exports = {
  takeEnergy: takeEnergy,
  suicideCreep: suicideCreep,
  determineRole: determineRole
}
