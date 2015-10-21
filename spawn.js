var globals = require('globals');
var defense = require('defense');

var harvesterCount = 0;
var builderCount = 0;
var upgraderCount = 0;
var mechanicCount = 0;
var mechanic1Count = 0;
var transportCount = 0;

var defenseCount = 0;
var defenses = [];

var moreEnergyHarvester = 0;
var moreEnergyTransport = 0;

var openerHarvester = 0;

var moreEnergy11Harvester = 0;

var defenseCount2 = 0;
var defenses2 = [];

var starterHarversterCount = 0;

var caravanCount = 0;

var secondHarvesters = [];
var secondTransports = [];
var harvesters = [];

var allDefense = [];

var transferCount = 0;
var scoutCount = 0;

var stockTransport = [];

var secondTransportCount = 0;
var secondHarvesterCount = 0;
var moreEnergyll = 0;
var transportStock = 0;

var supportTransport = 0;
var supportCount = 0;
var supportCount1 = 0;
var helperAemix = 0;
var support = [];
var mechanicSupport = 0;
//second room
var harvesterCount1 = 0;
var scoutCount1 = 0;
var starterHarversterCount1 = 0;
var transferCount1 = 0;
var builderCount1 = 0;
var upgraderCount1 = 0;
var mechanicCount1 = 0;
var mechanic1Count1 = 0;
var transportCount1 = 0;
var secondTransportCount1 = 0;
var secondHarvesterCount1 = 0;

var secondHarvesters1 = [];
var secondTransports1 = [];
var harvesters1 = [];

//third room
var harvesterCount2 = 0;
var scoutCount2 = 0;
var starterHarversterCount2 = 0;
var transferCount2 = 0;
var builderCount2 = 0;
var upgraderCount2 = 0;
var mechanicCount2 = 0;
var mechanic1Count2 = 0;
var transportCount2 = 0;
var secondTransportCount2 = 0;
var secondHarvesterCount2 = 0;

var openerHarvester1 = 0;
var visionsEnergy = 0;
var secondHarvesters2 = [];
var secondTransports2 = [];
var harvesters2 = [];
var supportNeed1Id = 0;

var more3Energy = 0;
var more3EnergyHarvest = 0;
var more3EnergyHarvestArr = [];

var creeps = globals.creepsInRoom;

function countCreeps(spawn, room){
    var name = room.name;
    if(name == 'W18N8'){
        for(var i in Game.creeps){
            if(Game.creeps[i].memory.role == 'secondHarvester'){
                secondHarvesterCount+=1;
                secondHarvesters.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'more3Energy'){
                more3Energy+=1;
            }
            else if(Game.creeps[i].memory.role == 'more3EnergyHarvest'){
                more3EnergyHarvest+=1;
                more3EnergyHarvestArr.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'visionsEnergy'){
                visionsEnergy+=1;
            }
            else if(Game.creeps[i].memory.role == 'caravan'){
                caravanCount+=1;
            }
            else if(Game.creeps[i].memory.role == 'helperAemix'){
                helperAemix+=1;
            }
            else if(Game.creeps[i].memory.role == 'secondTransport'){
                secondTransportCount+=1;
                secondTransports.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'moreEnergy11'){
                moreEnergyll+=1;
            }
            else if(Game.creeps[i].memory.role == 'support'){
                supportCount+=1;
            }
            else if(Game.creeps[i].memory.role == 'moreEnergy11Harvester'){
                moreEnergy11Harvester+=1;
            }
            else if(Game.creeps[i].memory.role == 'support1'){
                supportCount1+=1;
                support.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'mechanicSupport'){
                mechanicSupport+=1;
            }
            else if(Game.creeps[i].memory.role == 'supportTransport'){
                supportTransport+=1;
            }
            else if(Game.creeps[i].memory.role == 'moreEnergyTransport'){
                moreEnergyTransport+=1;
            }
            else if(Game.creeps[i].memory.role == 'moreEnergyHarvester'){
                moreEnergyHarvester+=1;
            }
            else if(Game.creeps[i].memory.role == 'openerHarvester'){
                openerHarvester+=1;
            }
            else if(Game.creeps[i].memory.role == "openerHarvester1"){
                openerHarvester1+=1;
            }
        }
        for(var name in creeps){
            var creep = creeps[name];
            if(creep.memory.role == 'scout'){
                scoutCount+=1;
            }
            else if(creep.memory.role == 'builder'){
                builderCount+=1;      
            }
            else if(creep.memory.role == 'transfer'){
                transferCount+=1;
            }
            else if(creep.memory.role == 'starterHarverster'){
                starterHarversterCount+=1;
            }
            else if(creep.memory.role == 'harvester'){
                harvesterCount+=1;
                harvesters.push(creep);
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
                stockTransport.push(creep);
            }
            else if(creep.memory.role == 'defense'){
                defenseCount+=1;
                defenses.push(creep);
                allDefense.push(creep);
            }
            else if(creep.memory.role == 'defense2'){
                defenseCount2+=1;
                defenses2.push(creep);
                allDefense.push(creep);
            }
        }
    }
    else if(name == 'W6N19'){
        for(var i in Game.creeps){
            if(Game.creeps[i].memory.role == 'secondHarvester1'){
                secondHarvesterCount1+=1;
                secondHarvesters1.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'secondTransport1'){
                secondTransportCount1+=1;
                secondTransports1.push(Game.creeps[i]);
            }
        }
        for(var name in creeps){
            var creep = creeps[name];
            if(creep.memory.role == 'scout1'){
                scoutCount1+=1;
            }
            else if(creep.memory.role == 'builder1'){
                builderCount1+=1;      
            }
            else if(creep.memory.role == 'transfer1'){
                transferCount1+=1;
            }
            else if(creep.memory.role == 'starterHarverster1'){
                starterHarversterCount1+=1;
            }
            else if(creep.memory.role == 'harvester1'){
                harvesterCount1+=1;
                harvesters1.push(creep);
            }
            else if(creep.memory.role == 'upgrader1'){
                upgraderCount1+=1;
            }
            else if(creep.memory.role == 'mechanic1'){
                mechanicCount1+=1;
            }
            else if(creep.memory.role == 'mechanic11'){
                mechanic1Count1+=1;
            }
            else if(creep.memory.role == 'transport1'){
                transportCount1+=1;
                stockTransport1.push(creep);
            }
        }
    }
    else if(name == 'W19N6'){
        for(var i in Game.creeps){
            if(Game.creeps[i].memory.role == 'secondHarvester2'){
                secondHarvesterCount2+=1;
                secondHarvesters2.push(Game.creeps[i]);
            }
            else if(Game.creeps[i].memory.role == 'secondTransport2'){
                secondTransportCount2+=1;
                secondTransports2.push(Game.creeps[i]);
            }
        }
        for(var name in Game.creeps){
            var creep = Game.creeps[name];
            if(creep.memory.role == 'scout2'){
                scoutCount2+=1;
            }
            else if(creep.memory.role == 'builder2'){
                builderCount2+=1;      
            }
            else if(creep.memory.role == 'transfer2'){
                transferCount2+=1;
            }
            else if(creep.memory.role == 'starterHarverster2'){
                starterHarversterCount2+=1;
            }
            else if(creep.memory.role == 'harvester2'){
                harvesterCount2+=1;
                harvesters2.push(creep);
            }
            else if(creep.memory.role == 'upgrader2'){
                upgraderCount2+=1;
            }
            else if(creep.memory.role == 'mechanic2'){
                mechanicCount2+=1;
            }
            else if(creep.memory.role == 'mechanic22'){
                mechanic1Count2+=1;
            }
            else if(creep.memory.role == 'transport2'){
                transportCount2+=1;
                stockTransport2.push(creep);
            }
        }
    }
}


var spawn1 = Game.spawns.Spawn1;
var room1 = Game.spawns.Spawn1.room;
var room1Name = Game.spawns.Spawn1.room.name;

/* SECOND ROOM
var secondSpawn1 = Game.spawns.secondSpawn1;
var secondRoom = Game.spawns.secondSpawn1.room;
var secondRoomName = Game.spawns.secondSpawn1.room.name;
countCreeps(secondSpawn1, secondRoom);

var harvesterNeed1 = 2 - harvesterCount1;
var builderNeed1 = 1 - builderCount1;
var upgraderNeed1 = 1 - upgraderCount1;
var mechanicNeed1 = 0 - mechanicCount1;
var mechanic1Need1 = 0 - mechanic1Count1;
var transportNeed1 = 2 - transportCount1;

var scoutNeed1 = 0 - scoutCount1;

var transferNeed1 = 1 - transferCount1;

var secondTransportNeed1 = 2 - secondTransportCount1;
var secondHarvesterNeed1 = 2 - secondHarvesterCount1;

var caravanNeed1 = 2 - caravanCount1;
*/

if(Game.spawns.thirdSpawn1){
var thirdSpawn1 = Game.spawns.thirdSpawn1;
var thirdRoom = Game.spawns.thirdSpawn1.room;
var thirdRoomName = Game.spawns.thirdSpawn1.room.name;
//THIRD ROOM
countCreeps(thirdSpawn1, thirdRoom);
}
countCreeps(spawn1, room1);

var more3EnergyHarvestNeed = 2 - more3EnergyHarvest;
var more3EnergyNeed = 4 - more3Energy;
var harvesterNeed2 = 2 - harvesterCount2;
var builderNeed2 = 0 - builderCount2;
var upgraderNeed2 = 0 - upgraderCount2;
var mechanicNeed2 = 0 - mechanicCount2;
var mechanic1Need2 = 1 - mechanic1Count2;
var transportNeed2 = 0 - transportCount2;

var scoutNeed2 = 0 - scoutCount2;
var visionsEnergyNeed = 3 - visionsEnergy;
var transferNeed2 = 1 - transferCount2;
var helperAemixNeed = 0 - helperAemix;
var secondTransportNeed2 = 0 - secondTransportCount2;
var secondHarvesterNeed2 = 0 - secondHarvesterCount2;
//FIRST ROOM

var moreEnergy11Need = 2 - moreEnergyll;
var supportTransportNeed = 2 - supportTransport;
var mechanicSupportNeed = 0 - mechanicSupport;
var supportNeed = 3 - supportCount;
var supportNeed1 = 0 - supportCount1;
var openerHarvesterNeed = 1 - openerHarvester;
var moreEnergy11HarvesterNeed = 1 - moreEnergy11Harvester;
var moreEnergyTransportNeed = 3 - moreEnergyTransport;
var moreEnergyHarvesterNeed = 1 - moreEnergyHarvester;
var openerHarvesterNeed1 = 1 - openerHarvester1;

var harvesterNeed = 2 - harvesterCount;
var builderNeed = 0 - builderCount;
var upgraderNeed = 4 - upgraderCount;
var mechanicNeed = 3 - mechanicCount;
var mechanic1Need = 1 - mechanic1Count;
var transportNeed = 2 - transportCount;

var scoutNeed = 0 - scoutCount;

var defenseNeed = 7 - defenseCount;
var defense2Need = 4 - defenseCount2;

var transferNeed = 1 - transferCount;

var secondTransportNeed = 2 - secondTransportCount;
var secondHarvesterNeed = 2 - secondHarvesterCount;

var caravanNeed = 2 - caravanCount;

var needAllCreepsInRoom = 9;

var allCount = harvesterCount + builderCount + upgraderCount + mechanicCount + mechanic1Count + transportCount;
function stock(){
    for(var i in Game.creeps){
        var creep = Game.creeps[i];
        if(creep.ticksToLive < 200){
            switch(creep.memory.role){
                case 'moreEnergyTransport':
                    moreEnergyTransportNeed+=1;
                break;
                case 'moreEnergyHarvester':
                    moreEnergyHarvesterNeed+=1;
                break;
                case 'supportTransport':
                    if(creep.ticksToLive < 80){
                        supportTransportNeed+=1;
                    }
                break;
                case 'support':
                    if(creep.ticksToLive < 30){
                        supportNeed+=1;
                    }
                break;
                case 'openerHarvester':
                    if(creep.ticksToLive < 50){
                        openerHarvesterNeed+=1;
                    }
                break;
            }
        }
    }
}

//  I have 3 types: 300, 550, 700, 1000.

function calcEnergy(room){
    switch(room.name){
        case 'W19N6':
            var creeps = globals.creepsInRoom2.length;
        break;
            case 'W18N8':
            var creeps = globals.creepsInRoom.length;
        break;
    }
    if(room.energyCapacityAvailable >= 1000){
        if(creeps < 2){
            return 300;
        }
        else{
            return 1000;
        }
    }
    else if(room.energyCapacityAvailable >= 700){
        if(creeps < 2){
            return 300;
        }
        else{
            return 700;
        }
    }
    else if(room.energyCapacityAvailable >= 550){
        if(creeps < 2){
            return 300;
        }
        else{
            return 550;
        }
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
    if(room.name == 'W18N8'){
        if(harvesterNeed == 1){
            if(harvesters[0].memory.calc == 0){
                return 1;
            }
            else{
                return 0;
            }
        }
    else if(harvesterNeed == 2){
            return 0;
        }
    }
    else if(room.name == 'W6N19'){
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
    else if(room.name == 'W19N6'){
        if(harvesterNeed2 == 1){
            if(harvesters2[0].memory.calc == 0){
                return 1;
            }
            else{
                return 0;
            }
        }
        if(harvesterNeed2 == 2){
            return 0;
        }
        else{
            return 0;
        }
    }
}

function calcTargetDefenseAttack(){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var g = 0;
    var h = 0;
    for(var i in defenses){
        if(defenses[i].memory.id == 1){
            a+=1;
        }
        else if(defenses[i].memory.id == 2){
            b+=1;
        }
        else if(defenses[i].memory.id == 3){
            c+=1;
        }
        else if(defenses[i].memory.id == 4){
            d+=1;
        }
        else if(defenses[i].memory.id == 5){
            e+=1;
        }
        else if(defenses[i].memory.id == 6){
            g+=1;
        }
        else if(defenses[i].memory.id == 7){
            h+=1;
        }
    }
    if(a == 0){
        return 1;
    }
    else if(b == 0){
        return 2;
    }
    else if(c == 0){
        return 3;
    }
    else if(d == 0){
        return 4;
    }
    else if(e == 0){
        return 5;
    }
    else if(g == 0){
        return 6;
    }
    else if(h == 0){
        return 7;
    }
}

function calcTargetDefenseTurret(){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    for(var i in defenses2){
        if(defenses2[i].memory.id == 1){
            a+=1;
        }
        else if(defenses2[i].memory.id == 2){
            b+=1;
        }
        else if(defenses2[i].memory.id == 3){
            c+=1;
        }
        else if(defenses2[i].memory.id == 4){
            d+=1;
        }
    }
    if(a == 0){
        return 11;
    }
    else if(b == 0){
        return 12;
    }
    else if(c == 0){
        return 13;
    }
    else if(d == 0){
        return 14;
    }
}

function spawnCreeps(room, spawn, calcEnergy, target){
    if(room.name == 'W18N8'){
        if(transportNeed > 0){
            Game.spawns.Spawn1.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
        }
        else if(transportStock > 0){
            Game.spawns.Spawn1.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport"} );
        }
        else if(transferNeed > 0){
            spawn.createCreep( [MOVE,CARRY,CARRY], null, {role : "transfer", link : '561a6f6daeb65a2065ed536d'});
        }
        else if(harvesterNeed > 0){
            var energy = room.find(FIND_SOURCES);
            Game.spawns.Spawn1.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester", target : energy[target].id, calc : target} );
        }
        else if(scoutNeed > 0){
            spawn.createCreep( [MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], null, {role : "scout"});
        }
        else if(builderNeed > 0){
            spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder"} );
        }
        else if(mechanicNeed > 0){
            spawn.createCreep( bodies["mechanicBody"][calcEnergy], null , {role : "mechanic"} );
        }
        else if(mechanic1Need > 0){
            spawn.createCreep( bodies["mechanic1Body"][calcEnergy], null , {role : "mechanic1"} );
        }
        else if(upgraderNeed > 0){
            Game.spawns.Spawn1.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader"} );
        }
        else if(secondHarvesterNeed > 0){
            
            if(secondHarvesters.length == 0){
                spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "secondHarvester", target : '55c34a6b5be41a0a6e80c170', ids : "0"});
            }
            else{
                if(secondHarvesters[0]){
                    if(secondHarvesters[0].memory.ids == "0"){
                        spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "secondHarvester", target : '55c34a6b5be41a0a6e80c171', ids : "1"});
                    }
                    else{
                        spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "secondHarvester", target : '55c34a6b5be41a0a6e80c170', ids : "0"});
                    }
                }
            }
        }
        else if(secondTransportNeed > 0){
            if(secondTransports.length == 0){
                spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "secondTransport", ids : "0"} );
            }
            else if(secondTransports[0].memory.ids == "0"){
                spawn.createCreep( [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], null , {role : "secondTransport", ids : "1"} );
            }
            else{
                spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "secondTransport", ids : "0"} );
            }
        }
        else if(moreEnergyHarvesterNeed > 0){
            spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "moreEnergyHarvester", target : '55c34a6c5be41a0a6e80c898'});
        }
        else if(moreEnergyTransportNeed > 0){
            spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "moreEnergyTransport"} );
        }
        else if(supportNeed1 > 0){
            var soomeEnergy = Game.spawns.thirdSpawn1.room.find(FIND_SOURCES);
            if(support.length == 0){
                Game.spawns.Spawn1.createCreep(bodies["secondHavresterBody"][calcEnergy], null, {role : "support1", ids : "0", target : soomeEnergy[0].id});
            }
            else if(support[0].memory.ids == "0"){
                Game.spawns.Spawn1.createCreep(bodies["secondHavresterBody"][calcEnergy], null, {role : "support1", ids : "1", target : soomeEnergy[1].id});
            }
            else{
                if(supportNeed1Id == 0){
                    Game.spawns.Spawn1.createCreep(bodies["secondHavresterBody"][calcEnergy], null, {role : "support1", ids : "0", target : soomeEnergy[0].id});
                }
                else{
                    Game.spawns.Spawn1.createCreep(bodies["secondHavresterBody"][calcEnergy], null, {role : "support1", ids : "1", target : soomeEnergy[0].id});
                }
            }
        }
        else if(supportTransportNeed > 0){
            Game.spawns.Spawn1.createCreep(bodies["transportBody"][calcEnergy], null , {role : "supportTransport"});
        }
        else if(mechanicSupportNeed > 0){
            Game.spawns.Spawn1.createCreep([MOVE,MOVE,MOVE,WORK,CARRY,CARRY], null, {role : "mechanicSupport"});
        }
        else if(globals.alarm == 1){
            if(defenseNeed > 0){
                var targetDefense = calcTargetDefenseAttack();
                spawn.createCreep([MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK], null, {role : "defense", id : targetDefense});
            }
            else if(defense2Need > 0){
                var targetDefense2 = calcTargetDefenseTurret();
                spawn.createCreep([MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK], null, {role : "defense2", id : targetDefense2});
            }
        }
        else if(caravanNeed > 0){
            Game.spawns.Spawn1.createCreep( [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], null , {role : "caravan"} );
        }
    }
    else if(room.name == 'W6N19'){
        if(transportNeed1 > 0){
            spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport1"} );
        }
        else if(harvesterNeed1 > 0){
            var energy = room.find(FIND_SOURCES);
            spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester1", target : energy[target].id, calc : target} );
        }
        else if(transferNeed1 > 0){
            spawn.createCreep( [MOVE,CARRY,CARRY], null, {role : "transfer1", link : ''});
        }
        else if(scoutNeed1 > 0){
            spawn.createCreep( [MOVE, MOVE, MOVE, CARRY, CARRY,CARRY], null, {role : "scout1"});
        }
        else if(builderNeed1 > 0){
            spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder1"} );
        }
        else if(mechanic1Need1 > 0){
            spawn.createCreep( bodies["mechanic1Body"][calcEnergy], null , {role : "mechanic11"} );
        }
        else if(upgraderNeed1 > 0){
            spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader1"} );
        }
        else if(secondHarvesterNeed1 > 0){            
            spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "secondHarvester1", target : '55c34a6b5be41a0a6e80c464', ids : "0"});
        }
        else if(secondTransportNeed1 > 0){
            spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "secondTransport1", ids : "0"} );
        }
    }
    else if(room.name == 'W19N6'){
        if(Game.spawns.thirdSpawn1){
            if(supportTransportNeed > 0){
                spawn.createCreep(bodies["transportBody"][calcEnergy], null , {role : "supportTransport"});
            }
            else if(transportNeed2 > 0){
                spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "transport2"} );
            }
            else if(harvesterNeed2 > 0){
                var energy = room.find(FIND_SOURCES);
                //ДЛЯ ВТОРОГО ПОРТА ДОБАВИТЬ АЙДИ
                spawn.createCreep( bodies["havresterBody"][calcEnergy], null , {role : "harvester2", target : energy[target].id, calc : target, link : '5627ada9159300b5098c69ec'} );
            }
            else if(transferNeed2 > 0){
                spawn.createCreep( [MOVE,CARRY,CARRY], null, {role : "transfer2", link : '562791429cf4ccac1fd0311a'});
            }
            else if(supportNeed > 0){
                spawn.createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], null, {role : "support"});
                //[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
            }
            else if(more3EnergyHarvestNeed > 0){
                if(more3EnergyHarvestArr.length == 0){
                    spawn.createCreep(bodies["secondHavresterBody"][calcEnergy], null , {role : "more3EnergyHarvest", target : '55c34a6b5be41a0a6e80c5d1'});
                }
                else if(more3EnergyHarvestArr[0].memory.target == '55c34a6b5be41a0a6e80c5d1'){
                    spawn.createCreep(bodies["secondHavresterBody"][calcEnergy], null , {role : "more3EnergyHarvest", target : '55c34a6b5be41a0a6e80c5d2'});
                }
            }
            else if(scoutNeed2 > 0){
                spawn.createCreep( [MOVE, MOVE, MOVE, CARRY, CARRY,CARRY], null, {role : "scout2"});
            }
            else if(builderNeed2 > 0){
                spawn.createCreep( bodies["builderBody"][calcEnergy], null , {role : "builder2"} );
            }
            else if(mechanic1Need2 > 0){
                spawn.createCreep( bodies["mechanic1Body"][calcEnergy], null , {role : "mechanic22"} );
            }
            else if(upgraderNeed2 > 0){
                spawn.createCreep( bodies["upgraderBody"][calcEnergy], null , {role : "upgrader2"} );
            }
            else if(openerHarvesterNeed > 0){            
                spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "openerHarvester"});
            }
            else if(openerHarvesterNeed1 > 0){
                spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "openerHarvester1", target : "55c34a6b5be41a0a6e80c2d6"} );
            }
            else if(helperAemixNeed > 0){
                spawn.createCreep( [MOVE,MOVE,CARRY,WORK], null , {role : "helperAemix", target : "55c34a6b5be41a0a6e80bed5"} );
            }
            else if(moreEnergy11Need > 0){
                spawn.createCreep( bodies["transportBody"][calcEnergy], null , {role : "moreEnergy11"} );
            }
            else if(moreEnergy11HarvesterNeed > 0){
                spawn.createCreep( bodies["secondHavresterBody"][calcEnergy], null , {role : "moreEnergy11Harvester", target : "55c34a6b5be41a0a6e80c464"});
            }
            else if(visionsEnergyNeed > 0){
                spawn.createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], null , {role : "visionsEnergy"});
            }
        }
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
        300: [WORK, WORK,WORK, MOVE, MOVE],
        550: [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK],
        700: [WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, WORK],
        1000: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY]
    },
    secondHavresterBody : {
        300: [WORK, WORK,WORK, MOVE, MOVE],
        550: [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK],
        700: [WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, WORK],
        1000: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK]
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
        1000: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY]
    },
    guardBody : {
        300: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,ATTACK,ATTACK],
        550: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK],
        700: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK],
        1000: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,HEAL]
    },
    mechanicBody : {
        300: [MOVE,MOVE,WORK,CARRY,CARRY],
        550: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY],
        700: [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY],
        1000: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
    },
    mechanic1Body : {
        300: [MOVE,MOVE,WORK,CARRY,CARRY],
        550: [MOVE,MOVE,MOVE,MOVE,WORK,CARRY,CARRY,CARRY],
        700: [MOVE,MOVE,MOVE,MOVE,WORK,CARRY,CARRY,CARRY],
        1000: [MOVE,MOVE,MOVE,MOVE,WORK,CARRY,CARRY,CARRY]
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
    upgraderCount: upgraderCount,
    mechanicCount: mechanicCount,
    mechanic1Count: mechanic1Count,
    transportCount: transportCount,
    harvesterNeed: harvesterNeed,
    builderNeed: builderNeed,
    upgraderNeed: upgraderNeed,
    mechanicNeed: mechanicNeed,
    mechanic1Need: mechanic1Need,
    transportNeed: transportNeed,
    calcTarget: calcTarget,
    allCount: allCount,
    harvesters: harvesters,
    caravanNeed: caravanNeed,
    caravanCount: caravanCount,
    secondTransports: secondTransports,
    secondTransportCount: secondTransportCount,
    secondHarvesterCount: secondHarvesterCount,
    secondHarvesterNeed: secondHarvesterNeed,
    secondTransportNeed: secondTransportNeed,
    allDefense: allDefense,
    stockTransport: stockTransport,
    stock: stock,
    support: support
}
