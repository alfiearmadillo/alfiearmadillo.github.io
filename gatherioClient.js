javascript: (function() {
    'use strict';
    //prompt('IJKL: Noclip movement keys.\nP: Spawn Go-Kart. (Disabled)\nT: Teleport to target user.\nY: Set speed.');
    document.addEventListener("keypress", function(i) {
        if (i.which == 105) {
            game.teleport(game.getMyPlayer().map, game.getMyPlayer().x, game.getMyPlayer().y-1);
        }
        if (i.which == 106) {
            game.teleport(game.getMyPlayer().map, game.getMyPlayer().x-1, game.getMyPlayer().y);
        }
        if (i.which == 107) {
            game.teleport(game.getMyPlayer().map, game.getMyPlayer().x, game.getMyPlayer().y+1);
        }
        if (i.which == 108) {
            game.teleport(game.getMyPlayer().map, game.getMyPlayer().x+1, game.getMyPlayer().y);
        }
        if (i.which == 112) {
            prompt('How about lets not spawn Go-Karts for now');
            //game.setVehicleId('go-kart');
        }
        if (i.which == 116) {
            let peopleString = "";
            let tpTarget = "";
            let peopleArray = [];
            Object.values(game.players).forEach(val => peopleArray.push(val));
            for(let i=0;i<peopleArray.length;i++){
                peopleString+=''+peopleArray[i].name+'█';
            }
            tpTarget = prompt('Teleport to:\n', peopleString);
            const isTarget = (element) => element.name == tpTarget;
            let targetIndex = peopleArray.findIndex(isTarget);
            game.teleport(peopleArray[targetIndex].map, peopleArray[targetIndex].x, peopleArray[targetIndex].y);
            peopleArray=[];
            targetIndex = null;
        }
        // if (i.which == 121) {
        //     let speedInput = prompt('Enter target speed.\n(Max recommended: 3 (over 3 about when disconnects start)');
        //     game.setSpeedModifier(speedInput);
        // }
    });
})();
