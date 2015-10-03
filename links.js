var globals = require('globals');

function transfersLink(room){
    if(room.name == 'E4N9'){
        var AllLinks = [];
        AllLinks[0] = Game.getObjectById('55e9870c4cba46c70962a0c9');
        AllLinks[1] = Game.getObjectById('55f062d55e4d3c180b04e8ef');
        AllLinks[2] = Game.getObjectById('55e9a822756a7a044fae2f73');
        AllLinks[3] = Game.getObjectById('56018d4034274bb8090c53b4');
    }
    /*
    //AllLinks[0] - near storage
    //AllLinks[1], AllLinks[2] - for harvester's
    //AllLinks[3] - for builder's
    */
if(AllLinks[1]){
        if(AllLinks[0].energy == 0){
            if(AllLinks[1].energy == AllLinks[1].energyCapacity){
                AllLinks[1].transferEnergy(AllLinks[0]);
            }
        }
    }
    if(AllLinks[2]){
        if(AllLinks[0].energy == 0){
            if(AllLinks[2].energy == AllLinks[2].energyCapacity){
                AllLinks[2].transferEnergy(AllLinks[0]);
            }
        }
    }
    if(AllLinks[3]){
        if(AllLinks[3].energy == 0){
            if(AllLinks[0].energy = AllLinks[0].energyCapacity){
                AllLinks[0].transferEnergy(AllLinks[3]);
            }
        }
    }
}


module.exports = {
    transfersLink: transfersLink
}
