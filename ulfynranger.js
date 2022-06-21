//enemies that track players
//target nearest player, unless one has a shield, then target nearest shield


//beating current highest stage
//Projectiles for players & enemies (bows arc, wand straight)
//enemy types (flying random movent every x time), player like walker
//terrain side collision?
//textures?
//lines between unlocked stages?
//more levels, enemies, weapons, content
let saveString=""
let splitSaveString=[]
let itemToBuy=-1
let spPrice=100
let shopOpen=0
let healRngNum=Math.floor(Math.random() * 40)
let signY=0
let area = []
let loadedAreaID=0
let subArea = 1
let p1Held=0
let p3Held=0
let p2Held=0
let p4Held=0
var pointerX = -1;
var pointerY = -1;
var blockToMouseX
var blockToMouseY
var nearTarget=0
var playerNumber;
let items=[]
let droppedItem = []
let div = document.createElement("div");
div.setAttribute("id", "container")
document.body.insertBefore(div, document.body.childNodes[0])
let divcontainer = document.getElementById("container")
let emptySlot = -1
let money = 0
let lastmoney = -1
let playerNumberStatsShown
let playerNumberStatsChanged=-1
let itemNumberStatsChanged=-1
let level = 0
let totalEXP=0
let lastEXP = -1
let expToLevelUp=50
let lastLevelExp=0
let gameover = 500
let lastRevCostShown=-1
let land=[]

function startGame() {
    playerNumber = new component(30, 30, "#ff0000", 130, 370);
    playerNumber.gravity = 0.5;
    playerNumber.type="player"
    playerNumber.colour="#ff0000"
    playerNumber.id="0"
    playerNumber.maxhp=100
    playerNumber.hp=100
    playerNumber.atkCD=0
    playerNumber.size=30
    playerNumber.skillPoints=0
    playerNumber.hpPoints=0
    playerNumber.dmgPoints=0
    playerNumber.rangePoints=0
    playerNumber.cdPoints=0
    playerNumber.item=items[0]
    playerNumber2 = new component(30, 30, "#0000ff", 90, 370);
    playerNumber2.gravity = 0.5;
    playerNumber2.type="player"
    playerNumber2.colour="#0000ff"
    playerNumber2.id="1"
    playerNumber2.hp=100
    playerNumber2.maxhp=100
    playerNumber2.atkCD=0
    playerNumber2.size=30
    playerNumber2.skillPoints=0
    playerNumber2.hpPoints=0
    playerNumber2.dmgPoints=0
    playerNumber2.rangePoints=0
    playerNumber2.cdPoints=0
    playerNumber2.item=items[0]
    playerNumber3 = new component(30, 30, "#00ff00", 50, 370);
    playerNumber3.gravity = 0.5;
    playerNumber3.type="player"
    playerNumber3.colour="#00ff00"
    playerNumber3.id="2"
    playerNumber3.hp=100
    playerNumber3.maxhp=100
    playerNumber3.atkCD=0
    playerNumber3.size=30
    playerNumber3.skillPoints=0
    playerNumber3.hpPoints=0
    playerNumber3.dmgPoints=0
    playerNumber3.rangePoints=0
    playerNumber3.cdPoints=0
    playerNumber3.item=items[0]
    playerNumber4 = new component(30, 30, "#ffff00", 10, 370);
    playerNumber4.gravity = 0.5;
    playerNumber4.type="player"
    playerNumber4.colour="#ffff00"
    playerNumber4.id="3"
    playerNumber4.hp=100
    playerNumber4.maxhp=100
    playerNumber4.atkCD=0
    playerNumber4.size=30
    playerNumber4.skillPoints=0
    playerNumber4.hpPoints=0
    playerNumber4.dmgPoints=0
    playerNumber4.rangePoints=0
    playerNumber4.cdPoints=0
    playerNumber4.item=items[0]
    playerNumberStatsShown=playerNumber
    renderStage(loadedAreaID)
    myGameArea.start();
}



items[0]={name:"None",damageMin:1,damageMax:1,range:11,atkRate:100,lifeSteal:0,defence:0,type:"None", colour:'#b4b4b4', worth:0, multi:0, rangeMult:0.1}

items[1]={name:"Slightly Sharp Stick",damageMin:2,damageMax:4,range:25,atkRate:50,lifeSteal:0,defence:0,type:"Sword", colour:'#a83232', worth:10, multi:0, rangeMult:0.1}
items[2]={name:"Cardboard Shield",damageMin:1,damageMax:1,range:15,atkRate:100,lifeSteal:0,defence:1,type:"Shield", colour:'#75a832', worth:10, multi:0, rangeMult:0.1}
items[3]={name:"Cheap Toy Bow",damageMin:1,damageMax:3,range:160,atkRate:66,lifeSteal:0,defence:0,type:"Bow", colour:'#634f1c', worth:10, multi:0, rangeMult:3}
items[4]={name:"Small Plastic Wand",damageMin:0,damageMax:1,range:300,atkRate:200,lifeSteal:0,defence:0,type:"Staff", colour:'#660033', worth:10, multi:0, rangeMult:3}
items[5]={name:"CR_IntoAveBasic",damageMin:1,damageMax:2,range:45,atkRate:200,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}
items[6]={name:"CR_IntroAveBoss",damageMin:12,damageMax:22,range:300,atkRate:200,lifeSteal:0,defence:0,type:"CR_Special1", colour:'#191919', worth:-1, multi:1, rangeMult:3}
items[7]={name:"CR_IntroAveRanged",damageMin:1,damageMax:2,range:130,atkRate:200,lifeSteal:0,defence:0,type:"CR_Ranged", colour:'#191919', worth:-1, multi:0, rangeMult:3}
items[8]={name:"CR_IntroAveStrong",damageMin:5,damageMax:10,range:45,atkRate:200,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}
items[9]={name:"CR_IntroAveWeak",damageMin:0,damageMax:1,range:45,atkRate:400,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}

items[10]={name:"CR_GrassyFieldFlyingMelee",damageMin:19,damageMax:25,range:45,atkRate:200,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}
items[11]={name:"CR_GrassyFieldFlyingRanged",damageMin:3,damageMax:4,range:120,atkRate:300,lifeSteal:0,defence:0,type:"CR_Ranged", colour:'#191919', worth:-1, multi:0, rangeMult:3}
items[12]={name:"CR_GrassyFieldWeakMelee",damageMin:4,damageMax:6,range:45,atkRate:300,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}
items[13]={name:"CR_GrassyFieldBoss",damageMin:6,damageMax:6,range:60,atkRate:50,lifeSteal:0,defence:0,type:"CR_Melee", colour:'#191919', worth:-1, multi:0, rangeMult:0.1}

items[14]={name:"Sharpened Flint",damageMin:6,damageMax:10,range:25,atkRate:50,lifeSteal:0,defence:0,type:"Sword", colour:'#872424', worth:33, multi:0, rangeMult:0.1}
items[15]={name:"Decent Wood Shield",damageMin:2,damageMax:3,range:15,atkRate:100,lifeSteal:0,defence:5,type:"Shield", colour:'#5a8224', worth:33, multi:0, rangeMult:0.1}
items[16]={name:"Handmade Bow",damageMin:4,damageMax:7,range:160,atkRate:66,lifeSteal:0,defence:0,type:"Bow", colour:'#42330d', worth:10, multi:33, rangeMult:3}
items[17]={name:"Maybe Magical Stick",damageMin:0,damageMax:3,range:250,atkRate:200,lifeSteal:0,defence:0,type:"Staff", colour:'#4a0226', worth:33, multi:0, rangeMult:3}

function addItem(player, itemID){
    switch(player){
        case 0:
            player=playerNumber4
            break;
        case 1:
            player=playerNumber3
            break;
        case 2:
            player=playerNumber2
            break;
        case 3:
            player=playerNumber
            break;
        default:
            break;
    }
    player.item=items[itemID]
}

let buttonsToMake=15
let inv = []
let pIcons = []

makeButtons(buttonsToMake);

function makeButtons(count){
    for(p=0;p<count;p++){
        if(p<4){
            pIcons[p]=document.createElement("div");
            pIcons[p].classList.add("pIcon")
            pIcons[p].setAttribute("id", `icon${p}`)
            divcontainer.insertBefore(pIcons[p], divcontainer.firstChild)
        }
        inv[p] = document.createElement("button");
        inv[p].classList.add('button')
        inv[p].setAttribute("onmousedown", `clickButton(${p})`)
        inv[p].setAttribute("id", `${p}`)
        divcontainer.appendChild(inv[p]);
    }
}

moneyBox=document.createElement("div");
moneyBox.setAttribute("id", `moneybox`)
divcontainer.insertBefore(moneyBox, divcontainer.firstChild)
sellItemBox=document.createElement("div");
sellItemBox.setAttribute("id", `sellItemBox`)
divcontainer.insertBefore(sellItemBox, divcontainer.firstChild)
playerStatsBox=document.createElement("div");
playerStatsBox.setAttribute("id", `playerStatsBox`)
divcontainer.appendChild(playerStatsBox, divcontainer.firstChild)
playerStatsPic=document.createElement("div");
playerStatsPic.setAttribute("id", `playerStatsPic`)
divcontainer.appendChild(playerStatsPic, divcontainer.firstChild)
itemStatsBox=document.createElement("div");
itemStatsBox.setAttribute("id", `itemStatsBox`)
divcontainer.appendChild(itemStatsBox, divcontainer.firstChild)
itemStatsPic=document.createElement("div");
itemStatsPic.setAttribute("id", `itemStatsPic`)
divcontainer.appendChild(itemStatsPic, divcontainer.firstChild)

expBarUnder=document.createElement("div");
expBarUnder.setAttribute("id", `expBarUnder`)
divcontainer.appendChild(expBarUnder, divcontainer.firstChild)
expBarOver=document.createElement("div");
expBarOver.setAttribute("id", `expBarOver`)
divcontainer.appendChild(expBarOver, divcontainer.firstChild)
reviveButton=document.createElement("div");
reviveButton.setAttribute("id", `reviveButton`)
divcontainer.appendChild(reviveButton, divcontainer.firstChild)

dmgSPButton=document.createElement("div");
dmgSPButton.setAttribute("id", `dmgSPButton`)
divcontainer.appendChild(dmgSPButton, divcontainer.firstChild)
hpSPButton=document.createElement("div");
hpSPButton.setAttribute("id", `hpSPButton`)
divcontainer.appendChild(hpSPButton, divcontainer.firstChild)
rangeSPButton=document.createElement("div");
rangeSPButton.setAttribute("id", `rangeSPButton`)
divcontainer.appendChild(rangeSPButton, divcontainer.firstChild)
delaySPButton=document.createElement("div");
delaySPButton.setAttribute("id", `delaySPButton`)
divcontainer.appendChild(delaySPButton, divcontainer.firstChild)

saveCodeDisplay=document.createElement("div");
saveCodeDisplay.setAttribute("id", `saveCodeDisplay`)
divcontainer.appendChild(saveCodeDisplay, divcontainer.firstChild)
document.getElementById("saveCodeDisplay").innerHTML = `${saveString}`

saveCodeNameDisplay=document.createElement("div");
saveCodeNameDisplay.setAttribute("id", `saveCodeNameDisplay`)
divcontainer.appendChild(saveCodeNameDisplay, divcontainer.firstChild)
document.getElementById("saveCodeNameDisplay").innerHTML = `Save Code`

function goToMap(){
    if(gameover===500){
    loadedAreaID=2
    shopOpen=-1
    itemToBuy=-1
    subArea=1
    renderStage()
    }
}


document.getElementById("dmgSPButton").addEventListener("mouseup", addSP);
document.getElementById("hpSPButton").addEventListener("mouseup", addSP);
document.getElementById("rangeSPButton").addEventListener("mouseup", addSP);
document.getElementById("delaySPButton").addEventListener("mouseup", addSP);
function addSP(){
    if(playerNumberStatsShown.skillPoints>0){
    switch(this.id){
        case "dmgSPButton":
            playerNumberStatsShown.skillPoints-=1
            playerNumberStatsShown.dmgPoints+=1
            lastmoney=-1
            lastEXP=-1
            break;
        case "hpSPButton":
            playerNumberStatsShown.skillPoints-=1
            playerNumberStatsShown.hpPoints+=1
            lastmoney=-1
            lastEXP=-1
            break;
        case "rangeSPButton":
            playerNumberStatsShown.skillPoints-=1
            playerNumberStatsShown.rangePoints+=1
            lastmoney=-1
            lastEXP=-1
            break;
        case "delaySPButton":
            
            playerNumberStatsShown.skillPoints-=1
            playerNumberStatsShown.cdPoints+=1
            lastmoney=-1
            lastEXP=-1
            break;
                                
    }
}
}

for(n=0;n<buttonsToMake;n++){
    inv[n]={
        invSlot:n,
        storedItem:0,
    }
}

for(n=0;n<buttonsToMake;n++){
document.getElementById(n).addEventListener("mouseover", makeButtonLight);
function makeButtonLight(){
    if(this.style.background==="rgb(180, 180, 180)" || this.style.background===""){
    this.style.background='#d2d2d2'
    }
    if(lastslot===14){
        
        if(items[inv[this.id].storedItem].worth===0){
            sellItemBox.innerHTML = `Sell<br />Item`
        }else{
        sellItemBox.innerHTML = `Sell<br />£${items[inv[this.id].storedItem].worth}`
        }
    }
}
document.getElementById(n).addEventListener("mouseout", makeButtonDark);
function makeButtonDark(){
    if(this.style.background==="rgb(210, 210, 210)"||this.style.background===""){
    this.style.background='#b4b4b4'
    }
}
}

reviveButton.innerHTML="Player Alive"
document.getElementById("reviveButton").style.background="#517a59"
document.getElementById("reviveButton").addEventListener("mouseup", revivePlayer);
document.getElementById("reviveButton").addEventListener("mouseover", revivePlayerActiveColour);
function revivePlayer(){
    if(playerNumber.hp===0&&playerNumber2.hp===0&&playerNumber3.hp===0&&playerNumber4.hp===0){}else{
    if(playerNumberStatsShown.hp===0){
    if(money>=Math.floor((money/2)+5+(level*2))){
    playerNumberStatsShown.hp=(playerNumberStatsShown.maxhp+playerNumberStatsShown.hpPoints*20)/2
    money=money-Math.floor((money/2)+5+(level*2))
    document.getElementById("reviveButton").style.background="#517a59"
    reviveButton.innerHTML="Player Alive"
    }
    }
}
}
function revivePlayerActiveColour(){
        if(playerNumberStatsShown.hp===0){
            if(money>=Math.floor((money/2)+5+(level*2))){
                this.style.background="#517a59"
            }else{
                this.style.background="#9c4c4c" 
            }
    }
}

//inventory stuff area
let lastslot= -1
let tmpObj

for(e=0;e<inv.length;e++){
    document.getElementById(e).style.background=items[inv[e].storedItem].colour
}



function clickButton(num){
lastmoney=-1
    if(num<4){
        switch(num){
            case 0:
                playerNumberStatsShown=playerNumber4
                break;
            case 1:
                playerNumberStatsShown=playerNumber3
                break;
            case 2:
                playerNumberStatsShown=playerNumber2
                break;
            case 3:
                playerNumberStatsShown=playerNumber
                break;
            default:
                break;
        }
        if(playerNumberStatsShown.hp>0){
            reviveButton.innerHTML="Player Alive"
            document.getElementById("reviveButton").style.background="#517a59"
        }
    }
    
    if(lastslot>-1){
    tmpObj=inv[num].storedItem
    if(lastslot!==inv.length-1 && num!== inv.length-1){//switching inv slots around
        inv[num].storedItem=inv[lastslot].storedItem
        
    }else{
        inv[14].storedItem=0
        money=money+items[inv[num].storedItem].worth
        money=money+items[inv[lastslot].storedItem].worth
        inv[num].storedItem=0
    }
    inv[lastslot].storedItem=tmpObj
    tmpObj=null
    if(lastslot<4){
        addItem(lastslot, inv[lastslot].storedItem)
    }
    lastslot=-1
    for(x=0;x<inv.length;x++){
        document.getElementById(x).style.background='#b4b4b4'
        document.getElementById(x).style.borderColor='#8a8a8a'
        document.getElementById(inv.length-1).style.background='#5c5c5c'
    } 
    }else{
    lastslot = num
    document.getElementById(lastslot).style.borderColor='#7a7bb7'
    }
    if(num<4){
        lastmoney=-1
        addItem(num, inv[num].storedItem)
    }
    
    for(e=0;e<inv.length;e++){
        document.getElementById(e).style.background=items[inv[e].storedItem].colour
    }
    document.getElementById(inv.length-1).style.background='#5c5c5c'
    lastEXP=-1
    lastRevCostShown=-1
}

function loadSaveFromCode(){//saveload
    lastmoney=-1
    
    document.getElementById("saveCodeDisplay").innerHTML = `${saveString}`
    splitSaveString=saveString.split(";")
    for(ac=0;ac<splitSaveString.length;ac++){
        splitSaveString[ac]=parseInt(splitSaveString[ac])
    }
    inv[0].storedItem=splitSaveString[0]
    inv[1].storedItem=splitSaveString[1]
    inv[2].storedItem=splitSaveString[2]
    inv[3].storedItem=splitSaveString[3]
    inv[4].storedItem=splitSaveString[4]
    inv[5].storedItem=splitSaveString[5]
    inv[6].storedItem=splitSaveString[6]
    inv[7].storedItem=splitSaveString[7]
    inv[8].storedItem=splitSaveString[8]
    inv[9].storedItem=splitSaveString[9]
    inv[10].storedItem=splitSaveString[10]
    inv[11].storedItem=splitSaveString[11]
    inv[12].storedItem=splitSaveString[12]
    inv[13].storedItem=splitSaveString[13]
    playerNumber.hp=splitSaveString[14]
    playerNumber.hpPoints=splitSaveString[15]
    playerNumber.dmgPoints=splitSaveString[16]
    playerNumber.rangePoints=splitSaveString[17]
    playerNumber.cdPoints=splitSaveString[18]
    playerNumber.skillPoints=splitSaveString[19]
    playerNumber2.hp=splitSaveString[20]
    playerNumber2.hpPoints=splitSaveString[21]
    playerNumber2.dmgPoints=splitSaveString[22]
    playerNumber2.rangePoints=splitSaveString[23]
    playerNumber2.cdPoints=splitSaveString[24]
    playerNumber2.skillPoints=splitSaveString[25]
    playerNumber3.hp=splitSaveString[26]
    playerNumber3.hpPoints=splitSaveString[27]
    playerNumber3.dmgPoints=splitSaveString[28]
    playerNumber3.rangePoints=splitSaveString[29]
    playerNumber3.cdPoints=splitSaveString[30]
    playerNumber3.skillPoints=splitSaveString[31]
    playerNumber4.hp=splitSaveString[32]
    playerNumber4.hpPoints=splitSaveString[33]
    playerNumber4.dmgPoints=splitSaveString[34]
    playerNumber4.rangePoints=splitSaveString[35]
    playerNumber4.cdPoints=splitSaveString[36]
    playerNumber4.skillPoints=splitSaveString[37]
    money=splitSaveString[38]
    area[3].cleared=splitSaveString[39]
    if(splitSaveString[39]===1){
    area[4].unlocked=1
    }
    area[4].cleared=splitSaveString[40]
    if(splitSaveString[40]===1){
    area[5].unlocked=1
    }
    spPrice=splitSaveString[41]
    totalEXP=splitSaveString[42]
    level=splitSaveString[43]
    expToLevelUp=splitSaveString[44]
    area[5].cleared=splitSaveString[45]
    if(splitSaveString[45]===1){
    area[6].unlocked=1
    area[7].unlocked=1
    }
    area[6].cleared=splitSaveString[46]
    if(splitSaveString[46]===1){
        area[8].unlocked=1
    }
    area[7].cleared=splitSaveString[47]
    if(splitSaveString[47]===1){
    area[9].unlocked=1
    }
    area[8].cleared=splitSaveString[48]
    area[9].cleared=splitSaveString[49]
    clickButton(0)
    clickButton(0)
    clickButton(1)
    clickButton(1)
    clickButton(2)
    clickButton(2)
    clickButton(3)
    clickButton(3)
    loadedAreaID=1
    renderStage()
}

//update for each new level when make level making levels
area[0]={name:"Menu",subAreaCount:1,unlocked:0,cleared:-1} //Stage list
area[1]={name:"Town",subAreaCount:1,unlocked:1,x:100,y:300,cleared:2,stageToUnlock1:3,stageToUnlock2:1}
area[2]={name:"Map",subAreaCount:1,unlocked:0,cleared:-1}
area[3]={name:"Intro Avenue",subAreaCount:9,unlocked:1,x:150,y:300,cleared:0,stageToUnlock1:4,stageToUnlock2:1}
area[4]={name:"Grassy Fields",subAreaCount:7,unlocked:0,x:180,y:250,cleared:0,stageToUnlock1:5,stageToUnlock2:1}
area[5]={name:"Shaded Woods",subAreaCount:4,unlocked:0,x:230,y:270,cleared:0,stageToUnlock1:6,stageToUnlock2:7, special:"LowDark"}
area[6]={name:"Hidden Cave",subAreaCount:6,unlocked:0,x:240,y:320,cleared:0,stageToUnlock1:8,stageToUnlock2:1, special:"MidDark"}
area[7]={name:"Rainy Woods",subAreaCount:5,unlocked:0,x:280,y:275,cleared:0,stageToUnlock1:9,stageToUnlock2:1, special:"Rain"}
area[8]={name:"Deep Dark",subAreaCount:4,unlocked:0,x:235,y:370,cleared:0,stageToUnlock1:10,stageToUnlock2:1, special:"Dark"}
area[9]={name:"Forest's Exit",subAreaCount:2,unlocked:0,x:325,y:285,cleared:0,stageToUnlock1:11,stageToUnlock2:1}

function renderStage(){ //Stage loading
    land=[]
    enemy=[]
    i=0
    droppedItem=[]//update for each new level when make level making levels
    if(area[loadedAreaID].name==="Menu"){//Main menu
        newLand(-1,510,1000,5400)
        newLand(-1,495,200,5400)
        newLand(760,495,1000,5400)
        playerNumber4.x=260;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
        playerNumber3.x=400;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
        playerNumber2.x=560;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
        playerNumber.x=700;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
        signY=-1
    }
    if(area[loadedAreaID].name==="Town"){//Main menu
        newLand(-1,510,1000,5400)
        playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
        playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
        playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
        playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
        signY=478
    }
    if(area[loadedAreaID].name==="Map"){//Main menu
        p1Held=0
        p2Held=0
        p3Held=0
        p4Held=0
        playerNumber4.x=10;playerNumber4.y=1370;playerNumber4.speedX=0;playerNumber4.speedY=0
        playerNumber3.x=50;playerNumber3.y=1370;playerNumber3.speedX=0;playerNumber3.speedY=0
        playerNumber2.x=90;playerNumber2.y=1370;playerNumber2.speedX=0;playerNumber2.speedY=0
        playerNumber.x=130;playerNumber.y=1370;playerNumber.speedX=0;playerNumber.speedY=0
        signY=-1
    }
    if(area[loadedAreaID].name==="Intro Avenue"){
        if(subArea===1){
        newLand(-1,510,1000,5400)
        spawnEnemy(20,"#8e17b3",550,400,0.5,5,"SlowWalk",1,1,1,55,0.2,10,1,1,2,1,3,1,4,1)
        spawnEnemy(20,"#8e17b3",350,400,0.5,5,"SlowWalk",1,1,1,55,0.2,10,1,1,2,1,3,1,4,1)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===2){//Main menu
            newLand(-1,510,1000,5400)
            newLand(320,490,710,5400)
            spawnEnemy(20,"#8e17b3",350,400,0.5,8,"SlowWalk",1,5,1,55,0.2,10,1,1,2,1,3,1,4,1)
            spawnEnemy(20,"#8e17b3",600,400,0.5,8,"SlowWalk",1,5,1,55,0.2,10,1,1,2,1,3,1,4,1)
            spawnEnemy(20,"#8e17b3",870,400,0.5,8,"SlowWalk",1,5,1,55,0.2,10,1,1,2,1,3,1,4,1)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===3){//Main menu
            newLand(-1,510,1000,5400)
            newLand(520,495,1000,5400)
            newLand(650,470,1000,5400)
            newLand(880,450,1000,5400)
            spawnEnemy(20,"#8e17b3",470,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",490,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(15,"#1b1280",550,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=418
        }
        if(subArea===4){//Main menu
            newLand(-1,510,1000,5400)
            newLand(-1,490,243,5400)
            newLand(875,480,1000,5400)
            newLand(900,460,1000,5400)
            spawnEnemy(12,"#067806",337,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",353,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",362,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",391,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",440,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",457,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",470,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",485,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",500,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",550,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",637,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",653,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",662,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",691,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",740,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",757,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",770,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",785,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",800,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",850,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=428
        }
        if(subArea===5){//Main menu
            newLand(-1,510,1000,5400)
            newLand(-1,510,850,5400)
            newLand(-1,485,770,5400)
            newLand(-1,455,700,5400)
            newLand(-1,430,500,5400)
            
            
            
            spawnEnemy(12,"#067806",457,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(12,"#067806",497,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(15,"#1b1280",550,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",640,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(20,"#8e17b3",670,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)

            spawnEnemy(35,"#7a2b27",800,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(35,"#7a2b27",710,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===6){//Main menu
            newLand(-1,510,1000,5400)
            newLand(-1,490,600,5400)
            newLand(800,490,1000,5400)
            spawnEnemy(35,"#7a2b27",800,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(35,"#7a2b27",572,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(35,"#7a2b27",376,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=458
        }
        if(subArea===7){//Main menu
            newLand(-1,510,1000,5400)
            newLand(325,487,783,5400)
            spawnEnemy(15,"#1b1280",200,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",310,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",332,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",335,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",340,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",732,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===8){//Main menu
            newLand(-1,510,1000,5400)
            newLand(-1,487,603,5400)
            spawnEnemy(20,"#8e17b3",201,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",338,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",381,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",412,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",461,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",470,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",510,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(20,"#8e17b3",550,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(35,"#7a2b27",760,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(15,"#1b1280",810,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===9){//Main menu
            newLand(-1,510,1000,5400)
            spawnEnemy(12,"#067806",357,400,0.5,3,"SlowWalk",1,9,1,30,0.2,35,1,1,2,1,3,1,4,1)
            spawnEnemy(20,"#8e17b3",490,400,0.5,10,"SlowWalk",2,5,2,55,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(35,"#7a2b27",682,400,0.5,25,"SlowWalk",5,8,10,40,0.2,10,1,2,2,2,3,2,4,2)
            spawnEnemy(65,"#3c4b4d",800,400,0.5,200,"SlowWalk",33,6,100,100,1,100,1,10,2,10,3,10,4,10)
            spawnEnemy(15,"#1b1280",880,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            spawnEnemy(15,"#1b1280",910,400,0.5,5,"SlowWalk",3,7,10,25,0.2,10,1,5,2,5,3,5,4,5)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Grassy Fields"){//Main menu
        if(subArea===1){
            newLand(-1,510,1000,5400)
            spawnEnemy(20,"#b56824",732,204,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",679,312,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",555,184,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",377,275,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)//BasicFlyer

            spawnEnemy(25,"#574433",395,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",562,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",693,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)//random bouncing (flying w/ gravity)
            

            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===2){
            newLand(-1,510,1000,5400)
            newLand(-1,495,673,5400)
            newLand(797,485,1000,5400)
            spawnEnemy(20,"#b56824",712,184,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",639,112,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",575,284,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",347,235,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)//BasicFlyer
            spawnEnemy(20,"#b56824",639,332,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)
            spawnEnemy(20,"#b56824",585,164,0,5,"Flying",3,10,3,55,0.2,10,14,5,2,0,3,0,4,0)

            spawnEnemy(25,"#574433",445,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",472,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",563,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)//random bouncing (flying w/ gravity)
            
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=453
        }
        if(subArea===3){
            newLand(-1,510,1000,5400)
            newLand(-1,485,1000,5400)
            newLand(632,460,1000,5400)

            spawnEnemy(25,"#574433",435,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",442,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",563,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",475,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",482,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",521,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",507,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",588,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            spawnEnemy(25,"#574433",609,400,0.5,90,"Flying",5,12,3,55,0.2,10,15,5,2,0,3,0,4,0)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=428
        }
        if(subArea===4){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===5){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===6){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
        if(subArea===7){
            newLand(-1,510,1000,5400)
            spawnEnemy(8,"#80223d",619,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",629,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",639,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",649,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",659,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",669,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",679,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",689,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",699,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",719,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",729,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",739,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",749,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",759,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",769,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",779,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",789,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",799,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",709,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",509,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",519,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",529,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",539,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",549,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",559,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",569,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",579,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",589,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",599,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",499,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",489,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",479,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",469,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",459,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",449,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",439,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",429,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",419,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",409,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",399,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",389,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",379,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",369,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",359,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",349,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",339,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",329,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",319,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",309,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",899,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",889,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",879,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",869,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",859,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",849,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",839,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",829,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",819,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",809,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",279,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",289,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            spawnEnemy(8,"#80223d",299,400,0.15,1,"Flying",5,13,15,10,0.2,2,17,1,2,0,3,0,4,0)
            
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Shaded Woods"){
        if(subArea===1){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Hidden Cave"){
        if(subArea===1){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Rainy Woods"){
        if(subArea===1){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Deep Dark"){
        if(subArea===1){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
    if(area[loadedAreaID].name==="Forest's Exit"){
        if(subArea===1){
            newLand(-1,510,1000,5400)
            playerNumber4.x=10;playerNumber4.y=370;playerNumber4.speedX=0;playerNumber4.speedY=0
            playerNumber3.x=50;playerNumber3.y=370;playerNumber3.speedX=0;playerNumber3.speedY=0
            playerNumber2.x=90;playerNumber2.y=370;playerNumber2.speedX=0;playerNumber2.speedY=0
            playerNumber.x=130;playerNumber.y=370;playerNumber.speedX=0;playerNumber.speedY=0
            signY=478
        }
    }
}

//create more terrain
//createland create land
function newLand(x1,y1,x2,y2){
land[land.length]={
    x1:x1,
    y1:y1,
    x2:x2,
    y2:y2
}



}



var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 540;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function randomDmg(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function refreshPlayerStatsBox(){
    if(playerNumberStatsChanged!==playerNumberStatsShown.hp||totalEXP!==lastEXP||lastmoney!==money){
    switch(playerNumberStatsShown){
        case 0:
            playerNumberStatsShown=playerNumber4
            break;
        case 1:
            playerNumberStatsShown=playerNumber3
            break;
        case 2:
            playerNumberStatsShown=playerNumber2
            break;
        case 3:
            playerNumberStatsShown=playerNumber
            break;
        default:
            break;
    }

    if(playerNumberStatsShown.skillPoints>0){
        document.getElementById("dmgSPButton").style.borderColor="#5e130e"
        document.getElementById("dmgSPButton").style.background="#911616"
        document.getElementById("rangeSPButton").style.borderColor="#5e130e"
        document.getElementById("rangeSPButton").style.background="#911616"
        document.getElementById("delaySPButton").style.borderColor="#5e130e"
        document.getElementById("delaySPButton").style.background="#911616"
        document.getElementById("hpSPButton").style.borderColor="#5e130e"
        document.getElementById("hpSPButton").style.background="#911616"
    }else{
        document.getElementById("dmgSPButton").style.borderColor="#8a8a8a"
        document.getElementById("dmgSPButton").style.background="#a2a2a2"
        document.getElementById("rangeSPButton").style.borderColor="#8a8a8a"
        document.getElementById("rangeSPButton").style.background="#a2a2a2"
        document.getElementById("delaySPButton").style.borderColor="#8a8a8a"
        document.getElementById("delaySPButton").style.background="#a2a2a2"
        document.getElementById("hpSPButton").style.borderColor="#8a8a8a"
        document.getElementById("hpSPButton").style.background="#a2a2a2"
    }

    if(playerNumberStatsShown.hp>0){
    reviveButton.innerHTML="Player Alive"
            document.getElementById("reviveButton").style.background="#517a59"
        }

    playerStatsBox.innerHTML=`
    <br />
    Health: ${playerNumberStatsShown.hp}/${(playerNumberStatsShown.maxhp+playerNumberStatsShown.hpPoints*20)}<br/>
    Damage: ${Math.floor((playerNumberStatsShown.item.damageMin+(playerNumberStatsShown.dmgPoints*0.2))*((100+playerNumberStatsShown.dmgPoints)/100))} - ${Math.floor((playerNumberStatsShown.item.damageMax+(playerNumberStatsShown.dmgPoints*0.3))*((100+playerNumberStatsShown.dmgPoints)/100))}<br/>
    Range: ${playerNumberStatsShown.item.range+Math.round((playerNumberStatsShown.rangePoints*playerNumberStatsShown.item.rangeMult) * 10) / 10}<br/>
    Attack Delay: ${Math.floor(playerNumberStatsShown.item.atkRate/((100+playerNumberStatsShown.cdPoints*2.5)/100))}<br/>
    Defence: ${playerNumberStatsShown.item.defence}<br/>
    Lifesteal: ${playerNumberStatsShown.item.lifeSteal}<br/>
    <br/>
    <br/>
    Level: ${level} SP: ${playerNumberStatsShown.skillPoints}<br/>
    EXP: ${totalEXP}
    `
    playerStatsPic.style.background=playerNumberStatsShown.colour
    playerNumberStatsChanged=playerNumberStatsShown.hp
}
}

function refreshItemStatsBox(){
    if(lastslot!==-1&&items[inv[lastslot].storedItem].name!=="None"){
        if(itemNumberStatsChanged!==items[inv[lastslot].storedItem]){
    itemStatsBox.innerHTML=`
    <br/>
    Name: ${items[inv[lastslot].storedItem].name}<br/>
    Damage: ${items[inv[lastslot].storedItem].damageMin} - ${items[inv[lastslot].storedItem].damageMax}<br/>
    Range: ${items[inv[lastslot].storedItem].range}<br/>
    Attack Delay: ${items[inv[lastslot].storedItem].atkRate}<br/>
    Defence: ${items[inv[lastslot].storedItem].defence}<br/>
    Lifesteal: ${items[inv[lastslot].storedItem].lifeSteal}<br/>
    Value: £${items[inv[lastslot].storedItem].worth}
    `
    itemStatsPic.style.background=items[inv[lastslot].storedItem].colour
itemNumberStatsChanged=lastslot
        }
    }
}


function component(width, height, color, x, y) {//draw new boxes
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.update = function() {

        if(this.type==="item"||this.type==="health"||this.type==="coin"){//draw hp item coin
            if((Math.floor(this.data.cooldown/5))%2===1){
                
            }else{
                ctx = myGameArea.context;
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }else{
            ctx = myGameArea.context;
            
            if(this.hp<=0){//draw dead player
                ctx.fillStyle = "#666666"
                ctx.fillRect(this.x+1, this.y+2, this.width-2, this.height-2);
            }else{
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
            
        }
        
        if(this.type==="enemy"||this.type==="player" && this.hp>0){//draw hp bars
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(this.x, this.y-15, this.size, 2);
            ctx.fillStyle = "#007f00";
            if(this.type==="player"){
            ctx.fillRect(this.x-1, this.y-16, ((this.hp/(this.maxhp+this.hpPoints*20))*this.size)+2, 4);
            }else{
                ctx.fillRect(this.x-1, this.y-16, ((this.hp/this.maxhp)*this.size)+2, 4);
            }
        }
        
    }
    this.newPos = function() {//find new positions
        this.speedY += this.gravity;
        if(this.speedX>30){
            this.speedX=30
        }
        if(this.speedX<-30){
            this.speedX=-30
        }
        if(this.speedY>30){
            this.speedY=30
        }
        if(this.speedY<-30){
            this.speedY=-30
        }
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.type==="player" && this.hp>0){
            for(b=0;b<droppedItem.length;b++){
                if(Math.abs(droppedItem[b].x - this.x) < 50 &&
                (Math.abs(droppedItem[b].y - this.y) < 50)){

                    emptySlot=inv.findIndex(element => element.storedItem===0 && element.invSlot>3) //picking up items

                    if(droppedItem[b].type==="coin"&&droppedItem[b].data.cooldown===0){
                        money=money+droppedItem[b].data.value
                        droppedItem.splice(b, 1)
                    }else if(droppedItem[b].type==="health"&&droppedItem[b].data.cooldown===0){
                        if(this.hp!==this.maxhp+(this.hpPoints*20)){
                        this.hp=this.hp+Math.floor(droppedItem[b].data.value*(this.maxhp+(this.hpPoints*20)))
                        if(this.hp>(this.maxhp+this.hpPoints*20)){
                            this.hp=(this.maxhp+this.hpPoints*20)
                        }
                        lastEXP=-1
                        droppedItem.splice(b, 1)
                    }
                    }else if(droppedItem[b].type==="item"&&droppedItem[b].data.cooldown===0){
                        if(emptySlot!==-1&&emptySlot!==inv.length-1){
                            inv[emptySlot].storedItem=droppedItem[b].data.value
                            droppedItem.splice(b, 1)
                            for(e=0;e<inv.length;e++){
                                document.getElementById(e).style.background=items[inv[e].storedItem].colour
                            }


                        }
                    }
                }
            }
            document.getElementById(inv.length-1).style.background='#5c5c5c'
        }
        this.hitLeft();
        this.hitRight();
        this.hitNewLand();
    }

    this.hitLeft = function() {//bounce off left wall
        var rockleft = 0;
        if (this.x < rockleft) {
            this.x = rockleft;
            if(this.hp>0){
            this.speedX=this.speedX-this.speedX*1.5
            }else{
                this.speedX=this.speedX-this.speedX*1.03
            }
            }
    }
    this.hitRight = function() {//bounce off right wall
        var rockRight = 960-this.size;
        if (this.x > rockRight) {
            this.x = rockRight;
            if(this.hp>0){
            this.speedX=this.speedX-this.speedX*1.5
            }else{
                this.speedX=this.speedX-this.speedX*1.03
            }
            }
    }
    
    this.hitNewLand = function(){
        if(land.length>0){
            for(c=0;c<land.length;c++){
                if (this.y <land[c].y2 && this.y+this.size >land[c].y1 && this.x<land[c].x2 && this.x>land[c].x1-this.size) {
                    if(this.y+this.size/2 <(land[c].y2+land[c].y1)/2){
                        this.y =land[c].y1-this.size;
                    if(this.hp>0){
                        this.speedY=-Math.abs(this.speedY-this.speedY*0.3)
                        this.speedX=this.speedX-this.speedX*0.3

                        if(this.type==="player" && this.hp>0){//logic to do only while on floor
                            nearTarget = closestEnemy(enemy, this.x, this.y)
                            if(enemy.length!==0){
                                if (Math.abs(enemy[nearTarget].x+(enemy[nearTarget].size/2-(this.size/2)) - this.x) < this.item.range+(this.rangePoints*this.item.rangeMult)+(enemy[nearTarget].size/2)+(this.size/2)&&
                                   ((Math.abs(enemy[nearTarget].y+(enemy[nearTarget].size/2) - this.y) < this.item.range+(this.rangePoints*this.item.rangeMult)+(enemy[nearTarget].size/2)) || (enemy[nearTarget].gravity>0))) {
                                    
                                if(this.atkCD<=0){
                
                                    enemy[nearTarget].hp=enemy[nearTarget].hp-randomDmg(Math.floor((this.item.damageMin+(this.dmgPoints*0.2))*((100+this.dmgPoints)/100)), Math.floor((this.item.damageMax+(this.dmgPoints*0.3))*((100+this.dmgPoints)/100)))//damage enemy, will need to be changed for ranged
                
                                    this.atkCD=Math.floor(this.item.atkRate/((100+this.cdPoints*2.5)/100))
                                }else{
                                    this.atkCD=this.atkCD-1
                                }
                
                                if(enemy[nearTarget].hp<=0){//enemy drops to 0 hp
                                    
                                    if(Object.keys(enemy[nearTarget].drops).length>0){ //enemy dropping items
                
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.coinChance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.coinChance){
                                                droppedItem[droppedItem.length] = new component(15, 15, "gold", enemy[nearTarget].x, enemy[nearTarget].y);
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.coin,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="coin"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*6)-3+(enemy[nearTarget].size/200)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/100)
                                            }
                                        }
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.healChance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.healChance){
                                                droppedItem[droppedItem.length] = new component(15, 15, "#ff756b", enemy[nearTarget].x+(enemy[nearTarget].size/2), enemy[nearTarget].y+(enemy[nearTarget].size/2));
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.healPotion,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="health"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*3)-1.5+(enemy[nearTarget].size/400)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/200)
                                            }
                                        }
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.itemID1Chance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.itemID1Chance){
                                                droppedItem[droppedItem.length] = new component(15, 15, items[enemy[nearTarget].drops.itemID1].colour, enemy[nearTarget].x+(enemy[nearTarget].size/2), enemy[nearTarget].y+(enemy[nearTarget].size/2));
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.itemID1,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="item"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*6)-3+(enemy[nearTarget].size/200)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/100)
                                            }
                                        }
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.itemID2Chance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.itemID2Chance){
                                                droppedItem[droppedItem.length] = new component(15, 15, items[enemy[nearTarget].drops.itemID2].colour, enemy[nearTarget].x+(enemy[nearTarget].size/2), enemy[nearTarget].y+(enemy[nearTarget].size/2));
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.itemID2,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="item"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*6)-3+(enemy[nearTarget].size/200)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/100)
                                            }
                                        }
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.itemID3Chance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.itemID3Chance){
                                                droppedItem[droppedItem.length] = new component(15, 15, items[enemy[nearTarget].drops.itemID3].colour, enemy[nearTarget].x+(enemy[nearTarget].size/2), enemy[nearTarget].y+(enemy[nearTarget].size/2));
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.itemID3,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="item"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*6)-3+(enemy[nearTarget].size/200)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/100)
                                            }
                                        }
                                        lootRoll=Math.random()*100
                                        if(enemy[nearTarget].drops.itemID4Chance!==0){
                                            if(lootRoll<enemy[nearTarget].drops.itemID4Chance){
                                                droppedItem[droppedItem.length] = new component(15, 15, items[enemy[nearTarget].drops.itemID4].colour, enemy[nearTarget].x+(enemy[nearTarget].size/2), enemy[nearTarget].y+(enemy[nearTarget].size/2));
                                                droppedItem[droppedItem.length-1].data={
                                                    value:enemy[nearTarget].drops.itemID4,
                                                    cooldown:150
                                                }
                                                droppedItem[droppedItem.length-1].size=15
                                                droppedItem[droppedItem.length-1].type="item"
                                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                                droppedItem[droppedItem.length-1].speedX=(Math.random()*6)-3+(enemy[nearTarget].size/200)
                                                droppedItem[droppedItem.length-1].speedY=-Math.random()*9-(enemy[nearTarget].size/100)
                                            }
                                        }
                                    totalEXP=totalEXP+enemy[nearTarget].exp
                                    lastmoney=-1
                                    enemy.splice(nearTarget,1)
                                    i=enemy.length 
                                    }
                                }
                            }else{
                            if(enemy.length!==0){//if not in range move towards
                                if ((Math.abs(enemy[nearTarget].x+(enemy[nearTarget].size/2) - this.x) < this.item.range+(this.rangePoints*this.item.rangeMult)+350+(enemy[nearTarget].size/2)||
                                    (Math.abs(enemy[nearTarget].x - this.x)) < this.item.range+(this.rangePoints*this.item.rangeMult)+350)&&
                                    ((Math.abs(enemy[nearTarget].y+(enemy[nearTarget].size) - (this.y+this.size)) < this.item.range+(this.rangePoints*this.item.rangeMult)+350+(enemy[nearTarget].size))||
                                    (Math.abs(enemy[nearTarget].y - this.y)) < this.item.range+(this.rangePoints*this.item.rangeMult)+350)){
                                if(enemy[nearTarget].x+(enemy[nearTarget].size/2)<this.x){
                                    this.speedX=this.speedX-Math.random()
                                    this.speedY=this.speedY-Math.random()*2
                                }else{
                                    this.speedX=this.speedX+Math.random()
                                    this.speedY=this.speedY-Math.random()*2
                                }
                            }
                            }
                        }
                    }
                }




                    }else if(this.type==="player"){
                        this.speedY=0
                        this.speedX=this.speedX*0.5
                    }else{
                        this.speedY=-Math.abs(this.speedY-this.speedY*0.3)
                        this.speedX=this.speedX-this.speedX*0.3
                    }
            }else{
                this.y =land[c].y2;
                    if(this.hp>0){
                        this.speedY=Math.abs(this.speedY-this.speedY*0.3)
                        this.speedX=this.speedX-this.speedX*0.3
                    }else{
                        this.speedY=0
                    }
            }
            }
        }
        }
    }
}

function closestEnemy(enemy, playerposX, playerposY){//finding closesnt enemy to given coordinate
    var closest={
        x : 99999,
        Dist : 99999
    }
    var indexLoop = 0
    for (let k = 0; k < enemy.length ; k++) {

        if(Math.abs(enemy[k].x-playerposX)+Math.abs(enemy[k].y-playerposY)<closest.Dist){
            closest.Dist=Math.abs(enemy[k].x-playerposX)+Math.abs(enemy[k].y-playerposY)
            closest.x = enemy[k].x
            indexLoop=k
        } 
        if(Math.abs(playerposX-enemy[k].x)+Math.abs(enemy[k].y-playerposY)<closest.Dist){
            closest.Dist=Math.abs(playerposX-enemy[k].x)+Math.abs(enemy[k].y-playerposY)
            closest.x = enemy[k].x
            indexLoop=k
        }
    }
    return indexLoop;
}

var move = 0//updating all entities each frame
function updateGameArea() {
    myGameArea.clear();
    myGameArea.frameNo += 1;

    for(j=0;j<enemy.length;j++){
        if(enemy[j].movementType==="SlowWalk"){
            move = Math.floor(Math.random() * 1000);
            if(move>10&&move<20 ){
                enemy[j].x=enemy[j].x+1
            }
            if(move>20&&move<32){
                enemy[j].x=enemy[j].x-1
            }
        }
        if(enemy[j].movementType==="Flying"){
            if(enemy[j].y<0){
                enemy[j].speedY+=1
            }
            if(Math.floor(Math.random()*40)===10){
                enemy[j].speedX=enemy[j].speedX+(Math.floor(Math.random()*5)-2)
                enemy[j].speedY=enemy[j].speedY+(Math.floor(Math.random()*5)-2)
                if(enemy[j].speedX>5){
                    enemy[j].speedX=3
                }else if(enemy[j].speedX<-5){
                    enemy[j].speedX=-3
                }
                if(enemy[j].speedY>5){
                    enemy[j].speedY=2
                }else if(enemy[j].speedY<-5){
                    enemy[j].speedY=-2
                }
                
            }
        }
        enemy[j].update()
        enemy[j].newPos()
        
        redPDist=Math.abs(playerNumber.x-(enemy[j].x-(playerNumber.size/2)+(enemy[j].size/2)))
        bluPDist=Math.abs(playerNumber2.x-(enemy[j].x-(playerNumber2.size/2)+(enemy[j].size/2)))
        grnPDist=Math.abs(playerNumber3.x-(enemy[j].x-(playerNumber3.size/2)+(enemy[j].size/2)))
        ylwPDist=Math.abs(playerNumber4.x-(enemy[j].x-(playerNumber4.size/2)+(enemy[j].size/2)))

        redPDistY=Math.abs(playerNumber.y-(enemy[j].y-(playerNumber.size/2)+(enemy[j].size/2)))
        bluPDistY=Math.abs(playerNumber2.y-(enemy[j].y-(playerNumber2.size/2)+(enemy[j].size/2)))
        grnPDistY=Math.abs(playerNumber3.y-(enemy[j].y-(playerNumber3.size/2)+(enemy[j].size/2)))
        ylwPDistY=Math.abs(playerNumber4.y-(enemy[j].y-(playerNumber4.size/2)+(enemy[j].size/2)))

        if(enemy[j].atkCD<=0){
            if(enemy[j].weapon.multi===1){
                if(redPDistY<enemy[j].weapon.range&&redPDist<enemy[j].weapon.range&&playerNumber.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber.item.defence<1){
                    playerNumber.hp=playerNumber.hp-1
                    enemy[j].atkCD=enemy[j].weapon.atkRate
                    }else{
                    playerNumber.hp=playerNumber.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate
                }
                    if(playerNumber.hp<0){
                        playerNumber.hp=0
                    }
                }
                if(bluPDistY<enemy[j].weapon.range&&bluPDist<enemy[j].weapon.range&&playerNumber2.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber2.item.defence<1){
                        playerNumber2.hp=playerNumber2.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber2.hp=playerNumber2.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber2.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate        
                }
                    if(playerNumber2.hp<0){
                        playerNumber2.hp=0
                    }
                }
                if(grnPDistY<enemy[j].weapon.range&&grnPDist<enemy[j].weapon.range&&playerNumber3.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber3.item.defence<1){
                        playerNumber3.hp=playerNumber3.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber3.hp=playerNumber3.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber3.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate       
                }
                    if(playerNumber3.hp<0){
                        playerNumber3.hp=0
                    }
                }
                if(ylwPDistY<enemy[j].weapon.range&&ylwPDist<enemy[j].weapon.range&&playerNumber4.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber4.item.defence<1){
                        playerNumber4.hp=playerNumber4.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber4.hp=playerNumber4.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber4.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate       
                }
                    if(playerNumber4.hp<0){
                        playerNumber4.hp=0
                    }
                }
                
            }else{
                if(redPDistY<enemy[j].weapon.range&&redPDist<enemy[j].weapon.range&&(redPDist<bluPDist||playerNumber2.hp>0)&&(redPDist<grnPDist||playerNumber3.hp>0)&&(redPDist<ylwPDist||playerNumber4.hp>0)&&playerNumber.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber.item.defence<1){
                        playerNumber.hp=playerNumber.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber.hp=playerNumber.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate       
                }
                    if(playerNumber.hp<0){
                        playerNumber.hp=0
                    }
                }else if(bluPDistY<enemy[j].weapon.range&&bluPDist<enemy[j].weapon.range&&(bluPDist<grnPDist||playerNumber3.hp>0)&&(bluPDist<ylwPDist||playerNumber4.hp>0)&&playerNumber2.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber2.item.defence<1){
                        playerNumber2.hp=playerNumber2.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber2.hp=playerNumber2.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber2.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate      
                }
                    if(playerNumber2.hp<0){
                        playerNumber2.hp=0
                    }
                }else if(grnPDistY<enemy[j].weapon.range&&grnPDist<enemy[j].weapon.range&&(grnPDist<ylwPDist||playerNumber4.hp>0)&&playerNumber3.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber3.item.defence<1){
                        playerNumber3.hp=playerNumber3.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber3.hp=playerNumber3.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber3.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate      
                }
                    if(playerNumber3.hp<0){
                        playerNumber3.hp=0
                    }
                }else if(ylwPDistY<enemy[j].weapon.range&&ylwPDist<enemy[j].weapon.range&&playerNumber4.hp>0){
                    if(enemy[j].weapon.damageMin-playerNumber4.item.defence<1){
                        playerNumber4.hp=playerNumber4.hp-1
                        enemy[j].atkCD=enemy[j].weapon.atkRate
                        }else{
                    playerNumber4.hp=playerNumber4.hp-Math.max(0, randomDmg(enemy[j].weapon.damageMin, enemy[j].weapon.damageMax)-playerNumber4.item.defence)
                    enemy[j].atkCD=enemy[j].weapon.atkRate       
                }
                    if(playerNumber4.hp<0){
                        playerNumber4.hp=0
                    }
                }
            
            }

        }else{
            enemy[j].atkCD=enemy[j].atkCD-1
        }

    }

    playerNumber.newPos();
    playerNumber.update();
    playerNumber2.newPos();
    playerNumber2.update();
    playerNumber3.newPos();
    playerNumber3.update();
    playerNumber4.newPos();
    playerNumber4.update();
    inv[14].storedItem=0
    
    if(p1Held===1){ //Check if any player is held, if they are, start dragging them
        playerMoveToMouse(playerNumber)
    }
    if(p2Held===1){
        playerMoveToMouse(playerNumber2)
    }
    if(p3Held===1){
        playerMoveToMouse(playerNumber3)
    }
    if(p4Held===1){
        playerMoveToMouse(playerNumber4)
    }

    if(playerNumber.hp===0&&playerNumber2.hp===0&&playerNumber3.hp===0&&playerNumber4.hp===0&&gameover>-1){ //Check for TPK, game over
        gameover=gameover-1
        if(gameover<450){
            ctx.font = `bold ${((500-gameover)/5)+5}px serif`;
            ctx.fillStyle = "#850a04"
            ctx.fillText(":(", 468-(500-gameover/10)+468, 300)
        }
        if(gameover===0){
            gameover=500
            land=[]
            enemy=[]
            i=0
            droppedItem=[]
            loadedAreaID=1
            playerNumber.hp=1
            playerNumber2.hp=1
            playerNumber3.hp=1
            playerNumber4.hp=1
            renderStage()
            
        }
    }

    refreshItemStatsBox()

    if(playerNumberStatsShown.hp===0 && lastRevCostShown!==playerNumberStatsShown){ //Revive button updating when changing selected player & player is dead
        document.getElementById("reviveButton").innerHTML=`Revive: £${Math.floor((money/2)+5+(level*2))}`
            if(money>=Math.floor((money/2)+5+(level*2))){
                document.getElementById("reviveButton").style.background="#517a59"
            }else{
                document.getElementById("reviveButton").style.background="#9c4c4c" 
            }
        lastRevCostShown=playerNumberStatsShown
    }

    
    if(land.length>0){//draw new land
        for(w=0;w<land.length;w++){
            ctx = myGameArea.context;
            ctx.fillStyle = "#7b531b"
            ctx.fillRect(land[w].x1+1, land[w].y1+1, land[w].x2-land[w].x1-2, land[w].y2-land[w].y1-2);
            ctx = myGameArea.context;
            ctx.fillStyle = "#17740b"
            ctx.fillRect(land[w].x1, land[w].y1, land[w].x2-land[w].x1, 10);
        }
    }

    if(area[loadedAreaID].name==="Town"){
        ctx = myGameArea.context;
        ctx.globalCompositeOperation='destination-over';
        ctx.font = 'bold 25px serif';
        ctx.fillStyle = "#000000"
        ctx.fillText("Shop", 468, 440)
        ctx.fillStyle = "#573508"
        ctx.fillRect(402, 360, 190, 150);
        ctx.setTransform(1, 0, 0, 1, -151, 390);
        ctx.rotate(-45* Math.PI / 180)
        ctx.fillStyle = "#422911"
        ctx.fillRect(412, 370, 134, 134);
        ctx.rotate(45* Math.PI / 180)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalCompositeOperation="source-over";
    }

    if(area[loadedAreaID].name==="Town" && shopOpen===1){
        ctx = myGameArea.context;
        ctx.fillStyle = "#4a4a4a" //shop bg
        ctx.fillRect(100, 100, 760, 340);

        ctx.fillStyle = "#ff0000" //close button
        ctx.fillRect(830, 100, 30, 30);

        ctx.fillStyle = "#911616" //item sp
        ctx.fillRect(150, 150, 30, 30);
        if(area[3].cleared===1){
        ctx.fillStyle = `${items[1].colour}` //item 1
        ctx.fillRect(190, 150, 30, 30);
        ctx.fillStyle = `${items[2].colour}` //item 2
        ctx.fillRect(230, 150, 30, 30);
        ctx.fillStyle = `${items[3].colour}` //item 3
        ctx.fillRect(270, 150, 30, 30);
        ctx.fillStyle = `${items[4].colour}` //item 4
        ctx.fillRect(310, 150, 30, 30);
        }
        if(area[4].cleared===1){
        ctx.fillStyle = `${items[14].colour}` //item 5
        ctx.fillRect(350, 150, 30, 30);
        ctx.fillStyle = `${items[15].colour}` //item 6
        ctx.fillRect(390, 150, 30, 30);
        ctx.fillStyle = `${items[16].colour}` //item 7
        ctx.fillRect(430, 150, 30, 30);
        ctx.fillStyle = `${items[17].colour}` //item 8
        ctx.fillRect(470, 150, 30, 30);
        }


        if(level*10<=money){//respec
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect( 223, 395,115,38)
            ctx.fillStyle = "#25801b"
            ctx.fillRect( 228, 400,105,28)
            ctx.font = '13px serif';
            ctx.fillStyle = "#000000"
            ctx.fillText(`Respec SP: £${level*10}`, 234, 418)
        }else{
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect( 223, 395,115,38)
            ctx.fillStyle = "#7d2323"
            ctx.fillRect( 228, 400,105,28)
            ctx.font = '13px serif';
            ctx.fillStyle = "#000000"
            ctx.fillText(`Respec SP: £${level*10}`, 234, 418)
        }

        if(itemToBuy!==-1){
            switch( itemToBuy){
                case "SP":
                    if(spPrice<=money){
                        ctx.fillStyle = "#6b6b6b"
                        ctx.fillRect( 433, 395,105,38)
                        ctx.fillStyle = "#25801b"
                        ctx.fillRect( 438, 400,95,28)
                    }else{
                        ctx.fillStyle = "#6b6b6b"
                        ctx.fillRect( 433, 395,105,38)
                        ctx.fillStyle = "#7d2323"
                        ctx.fillRect( 438, 400,95,28)
                    }
                break
                default:
                    if(items[itemToBuy].worth*3<=money){
                        ctx.fillStyle = "#6b6b6b"
                        ctx.fillRect( 433, 395,105,38)
                        ctx.fillStyle = "#25801b"
                        ctx.fillRect( 438, 400,95,28)
                    }else{
                        ctx.fillStyle = "#6b6b6b"
                        ctx.fillRect( 433, 395,105,38)
                        ctx.fillStyle = "#7d2323"
                        ctx.fillRect( 438, 400,95,28)
                    }
                break
        }
    }

        ctx.font = 'bold 20px serif';
        ctx.fillStyle = "#000000"

        switch(itemToBuy){
            case "SP":
            ctx.fillText("+1 Skill Point", 431, 140)
            ctx.fillText(`${spPrice}`, 443, 420)
            break;
            default:
            ctx.fillText(`${items[itemToBuy].name}`, 438-(items[itemToBuy].name.length*2), 140)
            ctx.fillText(`${items[itemToBuy].worth*3}`, 443, 420)
            break;
        }
    }

    healRngNum=Math.floor(Math.random() * 40)
    if(area[loadedAreaID].name==="Town"){
    if(healRngNum===14){
        playerNumber.hp+=Math.floor((playerNumber.maxhp+(playerNumber.hpPoints*20))/80)
        if(playerNumber.hp>playerNumber.maxhp+(playerNumber.hpPoints*20)){
            playerNumber.hp=playerNumber.maxhp+(playerNumber.hpPoints*20)
        }
        playerNumber2.hp+=Math.floor((playerNumber2.maxhp+(playerNumber2.hpPoints*20))/80)
        if(playerNumber2.hp>playerNumber2.maxhp+(playerNumber2.hpPoints*20)){
            playerNumber2.hp=playerNumber2.maxhp+(playerNumber2.hpPoints*20)
        }
        playerNumber3.hp+=Math.floor((playerNumber3.maxhp+(playerNumber3.hpPoints*20))/80)
        if(playerNumber3.hp>playerNumber3.maxhp+(playerNumber3.hpPoints*20)){
            playerNumber3.hp=playerNumber3.maxhp+(playerNumber3.hpPoints*20)
        }
        playerNumber4.hp+=Math.floor((playerNumber4.maxhp+(playerNumber4.hpPoints*20))/80)
        if(playerNumber4.hp>playerNumber4.maxhp+(playerNumber4.hpPoints*20)){
            playerNumber4.hp=playerNumber4.maxhp+(playerNumber4.hpPoints*20)
        }
    }
}


    if(area[loadedAreaID].name==="Menu"){
        ctx = myGameArea.context;
        ctx.font = '80px serif';
        ctx.fillStyle = "#4832a8"
        ctx.fillText("Block Ranger", 280, 150)
        ctx.font = '50px serif';
        ctx.fillStyle = "#1d6f82"
        ctx.fillRect(372, 260, 240, 48);
        ctx.fillStyle = "#4832a8"
        ctx.fillText("New Game", 380, 300)
        ctx.fillStyle = "#1d6f82"
        ctx.fillRect(381, 330, 224, 48);
        ctx.fillStyle = "#4832a8"
        ctx.fillText("Load Save", 387, 370)
    }

    if(area[loadedAreaID].name==="Map"){
        for(r=0;r<area.length;r++){
            if(area[r].unlocked===1){
                ctx = myGameArea.context;
                switch(area[r].unlocked){
                    case 0:
                        break;
                    case 1:
                        ctx.globalCompositeOperation='destination-over';
                        ctx.lineWidth = 2;
                        ctx.setLineDash([4, 2]);
                        if(area[r].name==="Intro Avenue"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[1].x+10, area[1].y+10)
                            ctx.stroke();  
                        }
                        if(area[r].name==="Grassy Fields"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[3].x+10, area[3].y+10)
                            ctx.stroke();
                        }
                        if(area[r].name==="Shaded Woods"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[4].x+10, area[4].y+10)
                            ctx.stroke();
                        }
                        if(area[r].name==="Hidden Cave"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[5].x+10, area[5].y+10)
                            ctx.stroke();
                        }
                        if(area[r].name==="Rainy Woods"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[5].x+10, area[5].y+10)
                            ctx.stroke();
                        }
                        if(area[r].name==="Deep Dark"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[6].x+10, area[6].y+10)
                            ctx.stroke();
                        }
                        if(area[r].name==="Forest's Exit"){
                            ctx.beginPath()
                            ctx.moveTo(area[r].x+10, area[r].y+10)
                            ctx.lineTo(area[7].x+10, area[7].y+10)
                            ctx.stroke();
                        }
                        ctx.globalCompositeOperation="source-over";

                        if(area[r].cleared===0){//draw stages on map
                            ctx.fillStyle = "#e0dd1d"
                            ctx.fillRect(area[r].x, area[r].y, 20, 20);
                            if(pointerX>area[r].x-16&&pointerX<area[r].x+5&&pointerY>area[r].y-15&&pointerY<area[r].y+5){
                                ctx.fillStyle = "#800b15"
                                ctx.globalCompositeOperation='destination-over';
                                ctx.fillRect(area[r].x-7, area[r].y-7, 34, 34);
                                ctx.globalCompositeOperation="source-over";
                                ctx.font = '16px serif';
                                ctx.fillStyle = "#072b4a"
                                ctx.fillText(`${area[r].name}`, area[r].x-area[r].name.length*2, area[r].y-16)
                            }
                        }else if(area[r].cleared===1){
                            ctx.fillStyle = "#2bc4a1"
                            ctx.fillRect(area[r].x, area[r].y, 20, 20);
                            if(pointerX>area[r].x-16&&pointerX<area[r].x+5&&pointerY>area[r].y-15&&pointerY<area[r].y+5){
                                ctx.fillStyle = "#800b15"
                                ctx.globalCompositeOperation='destination-over';
                                ctx.fillRect(area[r].x-7, area[r].y-7, 34, 34);
                                ctx.globalCompositeOperation="source-over";
                                ctx.font = '16px serif';
                                ctx.fillStyle = "#072b4a"
                                ctx.fillText(`${area[r].name}`, area[r].x-area[r].name.length*2, area[r].y-16)
                            }
                        }else if(area[r].cleared===2){
                            ctx.fillStyle = "#FFFFFF"
                            ctx.fillRect(area[r].x, area[r].y, 20, 20);
                            if(pointerX>area[r].x-16&&pointerX<area[r].x+5&&pointerY>area[r].y-15&&pointerY<area[r].y+5){
                                ctx.fillStyle = "#800b15"
                                ctx.globalCompositeOperation='destination-over';
                                ctx.fillRect(area[r].x-7, area[r].y-7, 34, 34);
                                ctx.globalCompositeOperation="source-over";
                                ctx.font = '16px serif';
                                ctx.fillStyle = "#000000"
                                ctx.fillText(`${area[r].name}`, area[r].x-area[r].name.length*2, area[r].y-16)
                            }
                        }

                        
                        break;
                    default:
                        break;
                }
                
                
            }
        }
    }

    if(signY>0 && (enemy.length===0||area[loadedAreaID].subAreaCount!==subArea)){
        ctx = myGameArea.context;
        ctx.fillStyle = "#61330b"
        ctx.fillRect(895, signY+7, 53, -26);
        ctx.fillRect(917, signY+7, 10, 25);
        ctx.font = '16px serif';
        ctx.fillStyle = "#140b02"
        ctx.fillText("NEXT", 900, signY)
    }

    ctx = myGameArea.context;
    ctx.fillStyle = "#8a8a8a"
    ctx.fillRect(7, 50, 144,35);
    ctx.fillStyle = "#b4b4b4"
    ctx.fillRect(12, 55, 134, 25);
    ctx.font = '16px serif';
    ctx.fillStyle = "#000000"
    if(area[loadedAreaID].subAreaCount>1){
        ctx.fillText(`${area[loadedAreaID].name}:${subArea}`, 18,72)
    }else{
        ctx.fillText(`${area[loadedAreaID].name}`, 18,72)
    }



    if(lastslot!==-1){ //Updating the sell button
        if(items[inv[lastslot].storedItem].worth!==(undefined^0^null)){
    sellItemBox.innerHTML = `Sell<br />£${items[inv[lastslot].storedItem].worth}`;
        }
    }else if(sellItemBox.innerHTML !== `Sell<br>Item`){
        sellItemBox.innerHTML = `Sell<br />Item`;
    }

    for(r=0;r<droppedItem.length;r++){ //Dropped items bouncing, redrawing
        if(droppedItem[r].data.cooldown>0){
            droppedItem[r].data.cooldown=droppedItem[r].data.cooldown-1
        }
    droppedItem[r].newPos()
    droppedItem[r].update()
    }

    if(totalEXP!==lastEXP){ //If amount of xp changes, refresh xp bar, check for level up
        if(totalEXP>=expToLevelUp){
            level++
            lastLevelExp=expToLevelUp
            expToLevelUp=50+Math.floor(expToLevelUp*1.2)
            playerNumber.skillPoints+=2
            playerNumber2.skillPoints+=2
            playerNumber3.skillPoints+=2
            playerNumber4.skillPoints+=2
            if(playerNumberStatsShown.skillPoints>0){
                document.getElementById("dmgSPButton").style.borderColor="#5e130e"
                document.getElementById("dmgSPButton").style.background="#911616"
                document.getElementById("rangeSPButton").style.borderColor="#5e130e"
                document.getElementById("rangeSPButton").style.background="#911616"
                document.getElementById("delaySPButton").style.borderColor="#5e130e"
                document.getElementById("delaySPButton").style.background="#911616"
                document.getElementById("hpSPButton").style.borderColor="#5e130e"
                document.getElementById("hpSPButton").style.background="#911616"
            }
        }
        expBarOver.style.maxWidth = `${((totalEXP-lastLevelExp)/(expToLevelUp-lastLevelExp))*131}px`
        expBarOver.style.minWidth = `${((totalEXP-lastLevelExp)/(expToLevelUp-lastLevelExp))*131}px`
        lastEXP=totalEXP
    }
    refreshPlayerStatsBox()

    if(lastmoney!==money){ //if amount of money changes, refresh money & revive button
        moneyBox.innerHTML = `Money: £${money}`;
        lastmoney=money
        
        if(playerNumberStatsShown.hp===0){
            if(money>=Math.floor((money/2)+5+(level*2))){
                document.getElementById("reviveButton").innerHTML=`Revive: £${Math.floor((money/2)+5+(level*2))}`
                document.getElementById("reviveButton").style.background="#517a59"
                lastRevCostShown=-1
            }else{
                document.getElementById("reviveButton").innerHTML=`Revive: £${Math.floor((money/2)+5+(level*2))}`
                document.getElementById("reviveButton").style.background="#9c4c4c" 
            }
        }
    }

    //check if hit sign
    if( ((playerNumber.x>920&&playerNumber.y>signY-40&&playerNumber.y<signY+20&&signY>0&&playerNumber.hp>0)||
        (playerNumber2.x>920&&playerNumber2.y>signY-40&&playerNumber2.y<signY+20&&signY>0&&playerNumber2.hp>0)||
        (playerNumber3.x>920&&playerNumber3.y>signY-40&&playerNumber3.y<signY+20&&signY>0&&playerNumber3.hp>0)||
        (playerNumber4.x>920&&playerNumber4.y>signY-40&&playerNumber4.y<signY+20&&signY>0&&playerNumber4.hp>0))&&(enemy.length===0||subArea!==area[loadedAreaID].subAreaCount)){
        if(area[loadedAreaID].subAreaCount===subArea){
            clearStage() 
            updateSaveCode()
            loadedAreaID=2
            shopOpen=-1
            itemToBuy=-1
            subArea=1
            renderStage()
        }else{
            subArea=subArea+1
            updateSaveCode()
            renderStage()
        }
    }
}

function updateSaveCode(){
    saveString=`${inv[0].storedItem};${inv[1].storedItem};${inv[2].storedItem};${inv[3].storedItem};${inv[4].storedItem};${inv[5].storedItem};${inv[6].storedItem};${inv[7].storedItem};${inv[8].storedItem};${inv[9].storedItem};${inv[10].storedItem};${inv[11].storedItem};${inv[12].storedItem};${inv[13].storedItem};${playerNumber.hp};${playerNumber.hpPoints};${playerNumber.dmgPoints};${playerNumber.rangePoints};${playerNumber.cdPoints};${playerNumber.skillPoints};${playerNumber2.hp};${playerNumber2.hpPoints};${playerNumber2.dmgPoints};${playerNumber2.rangePoints};${playerNumber2.cdPoints};${playerNumber2.skillPoints};${playerNumber3.hp};${playerNumber3.hpPoints};${playerNumber3.dmgPoints};${playerNumber3.rangePoints};${playerNumber3.cdPoints};${playerNumber3.skillPoints};${playerNumber4.hp};${playerNumber4.hpPoints};${playerNumber4.dmgPoints};${playerNumber4.rangePoints};${playerNumber4.cdPoints};${playerNumber4.skillPoints};${money};${area[3].cleared};${area[4].cleared};${spPrice};${totalEXP};${level};${expToLevelUp};${area[5].cleared};${area[6].cleared};${area[7].cleared};${area[8].cleared};${area[9].cleared}`
    document.getElementById("saveCodeDisplay").innerHTML = `${saveString}`
}



function clearStage(){
    if(area[loadedAreaID].cleared!==2){
    area[loadedAreaID].cleared=1
    if(area[loadedAreaID].stageToUnlock1>=area.length||area[loadedAreaID].stageToUnlock2>=area.length){
        alert("More stages to come!")//todo
    }else{
    area[area[loadedAreaID].stageToUnlock1].unlocked=1
    area[area[loadedAreaID].stageToUnlock2].unlocked=1
    }
}
}

drag()
function drag(){ //Find which player clicked on / near, set to held
    document.onmousedown = function(event){
        pointerX = event.pageX-(window.innerWidth-960)/2;
        pointerY = event.pageY-(window.innerHeight-540-250)/2;
        blockToMouseX = Math.abs(playerNumber.x+(playerNumber.size/2)-pointerX)
        blockToMouseY = Math.abs(playerNumber.y+(playerNumber.size/2)-pointerY)
        block2ToMouseX = Math.abs(playerNumber2.x+(playerNumber2.size/2)-pointerX)
        block2ToMouseY = Math.abs(playerNumber2.y+(playerNumber2.size/2)-pointerY)
        block3ToMouseX = Math.abs(playerNumber3.x+(playerNumber3.size/2)-pointerX)
        block3ToMouseY = Math.abs(playerNumber3.y+(playerNumber3.size/2)-pointerY)
        block4ToMouseX = Math.abs(playerNumber4.x+(playerNumber4.size/2)-pointerX)
        block4ToMouseY = Math.abs(playerNumber4.y+(playerNumber4.size/2)-pointerY)
        if(block4ToMouseX<15 && block4ToMouseY<15){
            p4Held=1
        }else
        if(block3ToMouseX<15 && block3ToMouseY<15){
            p3Held=1
        }else
        if(block2ToMouseX<15 && block2ToMouseY<15){
            p2Held=1
        }else
        if(blockToMouseX<15 && blockToMouseY<15){
            p1Held=1
        }else
        if(block4ToMouseX<40 && block4ToMouseY<40){
            p4Held=1
        }else
        if(block3ToMouseX<40 && block3ToMouseY<40){
            p3Held=1
        }else
        if(block2ToMouseX<40 && block2ToMouseY<40){
            p2Held=1
        }else
        if(blockToMouseX<40 && blockToMouseY<40){
            p1Held=1
        }else 
        if(area[loadedAreaID].name==="Town"&&shopOpen!==1&&pointerX>402&&pointerX<402+190&&pointerY>360&&pointerY<360+150){
            shopOpen=1
        }



        if(area[loadedAreaID].name==="Menu"&&pointerX>372&&pointerX<372+240&&pointerY>260&&pointerY<260+48){

            mapButton=document.createElement("div");
            mapButton.setAttribute("id", `mapButton`)
            divcontainer.appendChild(mapButton, divcontainer.firstChild)
            document.getElementById("mapButton").addEventListener("mouseover", makeButtonLight);
            document.getElementById("mapButton").addEventListener("mouseout", makeButtonDark);
            document.getElementById("mapButton").addEventListener("mouseup", goToMap);
            document.getElementById("mapButton").innerHTML="Return to Map"

            loadedAreaID=1
            renderStage()
        }
        if(area[loadedAreaID].name==="Menu"&&pointerX>381&&pointerX<381+224&&pointerY>330&&pointerY<330+48){
            saveString = prompt("Paste your save code here:")
            if(saveString!==null){
            mapButton=document.createElement("div");
            mapButton.setAttribute("id", `mapButton`)
            divcontainer.appendChild(mapButton, divcontainer.firstChild)
            document.getElementById("mapButton").addEventListener("mouseover", makeButtonLight);
            document.getElementById("mapButton").addEventListener("mouseout", makeButtonDark);
            document.getElementById("mapButton").addEventListener("mouseup", goToMap);
            document.getElementById("mapButton").innerHTML="Return to Map"

            
            
            loadSaveFromCode()
            }
        }

        

        if(area[loadedAreaID].name==="Town"&&shopOpen===1){
            if(pointerX>223&&pointerX<223+115&&pointerY>395&&pointerY<395+38){
                money=money-level*10
                playerNumber.skillPoints=playerNumber.skillPoints+playerNumber.hpPoints+playerNumber.dmgPoints+playerNumber.rangePoints+playerNumber.cdPoints
                playerNumber.hpPoints=0
                playerNumber.dmgPoints=0
                playerNumber.rangePoints=0
                playerNumber.cdPoints=0

                playerNumber2.skillPoints=playerNumber2.skillPoints+playerNumber2.hpPoints+playerNumber2.dmgPoints+playerNumber2.rangePoints+playerNumber2.cdPoints
                playerNumber2.hpPoints=0
                playerNumber2.dmgPoints=0
                playerNumber2.rangePoints=0
                playerNumber2.cdPoints=0

                playerNumber3.skillPoints=playerNumber3.skillPoints+playerNumber3.hpPoints+playerNumber3.dmgPoints+playerNumber3.rangePoints+playerNumber3.cdPoints
                playerNumber3.hpPoints=0
                playerNumber3.dmgPoints=0
                playerNumber3.rangePoints=0
                playerNumber3.cdPoints=0

                playerNumber4.skillPoints=playerNumber4.skillPoints+playerNumber4.hpPoints+playerNumber4.dmgPoints+playerNumber4.rangePoints+playerNumber4.cdPoints
                playerNumber4.hpPoints=0
                playerNumber4.dmgPoints=0
                playerNumber4.rangePoints=0
                playerNumber4.cdPoints=0
                lastmoney=-1
            }
            if(pointerX>830&&pointerX<830+30&&pointerY>100&&pointerY<100+30){
                itemToBuy=-1
                shopOpen=-1
            }
            if(pointerX>150&&pointerX<150+30&&pointerY>150&&pointerY<150+30){
                itemToBuy="SP"
            }
            if(area[3].cleared===1){
            if(pointerX>190&&pointerX<190+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=1
            }
            if(pointerX>230&&pointerX<230+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=2
            }
            if(pointerX>270&&pointerX<270+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=3
            }
            if(pointerX>310&&pointerX<310+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=4
            }
        }
            if(area[4].cleared===1){
            if(pointerX>350&&pointerX<350+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=14
            }
            if(pointerX>390&&pointerX<390+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=15
            }
            if(pointerX>430&&pointerX<430+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=16
            }
            if(pointerX>470&&pointerX<470+30&&pointerY>150&&pointerY<150+30){
                itemToBuy=17
            }
        }
            if(itemToBuy!==-1&&pointerX>433&&pointerX<433+105&&pointerY>395&&pointerY<395+38){
                    switch( itemToBuy){
                        case "SP":
                            if(spPrice<=money){
                                money=money-spPrice
                                spPrice=spPrice*10
                                playerNumber.skillPoints++
                                playerNumber2.skillPoints++
                                playerNumber3.skillPoints++
                                playerNumber4.skillPoints++
                            }
                        break
                        default:
                            if(items[itemToBuy].worth*3<=money){
                                money=money-items[itemToBuy].worth*3
                                droppedItem[droppedItem.length] = new component(15, 15, items[itemToBuy].colour, 480, 270);
                                droppedItem[droppedItem.length-1].data={
                                    value:itemToBuy,
                                    cooldown:150
                                }
                                droppedItem[droppedItem.length-1].size=15
                                droppedItem[droppedItem.length-1].type="item"
                                droppedItem[droppedItem.length-1].gravity = 0.5;
                                droppedItem[droppedItem.length-1].speedX=Math.random()*8-4
                                droppedItem[droppedItem.length-1].speedY=-Math.random()*15
                            }
                        break
                        
            }
        }
    }



    checkClickOnLevelOnMap()
    }
}

function checkClickOnLevelOnMap(){
    for(aa=0;aa<area.length;aa++){
        if(area[aa].cleared>-1&&area[aa].unlocked>0){
    if(area[loadedAreaID].name==="Map"&&pointerX>area[aa].x&&pointerX<area[aa].x+20&&pointerY>area[aa].y&&pointerY<area[aa].y+20){
        loadedAreaID=aa
        renderStage()
    }
    }
    }
}

document.addEventListener("mouseup",releasePlayers)
function releasePlayers(){ //Stop holding any held players, on mouse up
    p1Held=0
    p2Held=0
    p3Held=0
    p4Held=0
}

document.addEventListener("mousemove",updateMouseCoords)
function updateMouseCoords(event){ //Mouse position tracking
    pointerX = event.pageX-(playerNumber.size/2)-(window.innerWidth-960)/2;
    pointerY = event.pageY-(playerNumber.size/2)-(window.innerHeight-540-250)/2;
}

function playerMoveToMouse(playerHeld, event){ //Move player currently held towards mouse
    playerHeld.atkCD=Math.floor(playerHeld.item.atkRate/((100+playerHeld.cdPoints*2.5)/100))
            if(playerNumberStatsShown.id!==0){
            playerNumberStatsShown=playerHeld
            }
            lastmoney=-1
            blockToMouseX = Math.abs(playerHeld.x-pointerX)
            blockToMouseY = Math.abs(playerHeld.y-pointerY)
            if(playerHeld.x<pointerX){
                playerHeld.speedX = blockToMouseX/8
            };
            if(playerHeld.x>pointerX){
                playerHeld.speedX = -blockToMouseX/8
            };
            if(playerHeld.y<pointerY){
                playerHeld.speedY = blockToMouseY/8
            };
            if(playerHeld.y>pointerY){
                playerHeld.speedY = -blockToMouseY/8
            };
}

let i = 0
let enemy=[]
function spawnEnemy(_size,_colour,_posX,_posY,_gravity,_hp,_movementType,_exp,_weapon,_coinValue,_coinChance,
    _healValue,_healChance,_drop1ID,_drop1Chance,_drop2ID,_drop2Chance,_drop3ID,_drop3Chance,_drop4ID,_drop4Chance){
    enemy[i] = new component(_size, _size, _colour, _posX, _posY);
    enemy[i].size=_size
    enemy[i].gravity = _gravity;
    enemy[i].hp=_hp
    enemy[i].maxhp=enemy[i].hp
    enemy[i].type="enemy"
    enemy[i].movementType=_movementType
    enemy[i].exp=_exp
    enemy[i].weapon=items[_weapon]
    enemy[i].atkCD=200
    enemy[i].speedX=0
    enemy[i].speedY=0
    enemy[i].drops={
        coin:_coinValue,
        coinChance:_coinChance,
        healPotion:_healValue,
        healChance:_healChance,
        itemID1:_drop1ID,
        itemID1Chance:_drop1Chance,
        itemID2:_drop2ID,
        itemID2Chance:_drop2Chance,
        itemID3:_drop3ID,
        itemID3Chance:_drop3Chance,
        itemID4:_drop4ID,
        itemID4Chance:_drop4Chance
    }
    i++
}

document.addEventListener('keydown', logKey);//enemy spawning

function logKey(e) {
  if(e.code==="KeyA"){
    enemy[i] = new component(20, 20, "purple", 480, 270);
    enemy[i].size=20
    enemy[i].gravity = 0.5;
    enemy[i].hp=10
    enemy[i].maxhp=enemy[i].hp
    enemy[i].type="enemy"
    enemy[i].movementType="SlowWalk"
    enemy[i].exp=1
    enemy[i].weapon=items[5]
    enemy[i].atkCD=0
    enemy[i].drops={
        coin:1,
        coinChance:100,
        healPotion:0.1,
        healChance:10,
        itemID1:1,
        itemID1Chance:100,
        itemID2:2,
        itemID2Chance:100,
        itemID3:3,
        itemID3Chance:100,
        itemID4:4,
        itemID4Chance:100
    }
    i++
  }
  if(e.code==="KeyJ"){
      money+=100
  }
  if(e.code==="KeyK"){
    totalEXP+=10
    lastmoney=-1
  }
  if(e.code==="KeyS"){
    enemy[i] = new component(200, 200, "purple", 680, 270);
    enemy[i].size=200
    enemy[i].gravity = 0.5;
    enemy[i].hp=100
    enemy[i].maxhp=enemy[i].hp
    enemy[i].type="enemy"
    enemy[i].movementType="SlowWalk"
    enemy[i].exp=15
    enemy[i].weapon=items[6]
    enemy[i].atkCD=0
    enemy[i].drops={
        coin:100,
        coinChance:20,
        healPotion:1,
        healChance:100,
        itemID1:1,
        itemID1Chance:10,
        itemID2:2,
        itemID2Chance:10,
        itemID3:3,
        itemID3Chance:10,
        itemID4:4,
        itemID4Chance:10
    }
    i++
  }
}

document.getElementById(inv.length-1).style.background='#5c5c5c' //Page background