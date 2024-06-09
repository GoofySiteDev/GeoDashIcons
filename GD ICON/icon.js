alphabet = "abcdefghijklmnopqrstuvwxyz"
specil = "abcdef"
woef = ["dd9", "999", "006", "ffe", "55e", "004", "dd4", "443", "cc5",
"443", "dd4", "666", "bb4", "aad", "bb0", "440", "99d", "33b", "33f",
"44a", "669", "888"]
bowl = ["554", "113", "009", "bb8", "ffa", "552", "774"]
shap = ["ddf", "aa3", "ddd", "bbc", "fff", "ee0"]
wav = ["227", "00b", "88f", "ff8"]
spyder = ["ff0", "886", "665", "dd2"]
bot = ["556", "995","88b","bbb"]
fufu = ["aa0", "ee0", "cc7", "998"]



cubeData = ["You're either new to the game or VERY good at the game, probably the first one.",
"You're new to the game and have NO play time on it, or you suck.",
"You're a Partition fan or think this is the coolest icon in the game.",
"You're new to the game but thought the cube icon 2 looked strange.",
"You're really proud of beating your first level and think you're a pro.",
"You have really good music taste and decent cube style taste.",
"You think that the beat drops in Polargeist were well timed, or you hate symmetry.",
"You're dehydrated!",
"You use this icon to trigger other players, or you actually think among us jokes are funny.",
"You really need to watch Frozen.",
"You play super mario a ton, or you think that it's funny that the cube's legs are never used.",
"Your favorite holiday is halloween or you have a pet snake.",
"You love free stuff and don't like actually playing levels.",
"You have really bad icon taste.",
"You're not skilled enough to beat Cycles proper, but you are super excited to have a new icon and spent a ton of time grinding for your cube."
,"You are a big sci-fi fan.",
"You're not skilled enough to beat Xstep proper, but you are super excited to have a new icon and spent a ton of time grinding for your cube.",
"You love distracting icons and have really good focus.",
"You beat The Lightning Road or The Nightmare.",
"You beat The Lightning Road and The Nightmare.",
"You have skills, or you're a cheater and you beat Mixed Demon, The Lightning Road, and The Nightmare.",
"You have Mad Skills but you play casually."]

ballData = []

shipData = []

waveData = []




function iconFix(){
    var selector = document.getElementById("iconselect")
    var imager = document.getElementById("icondisplay")
    var bubble = selector.selectedIndex + 1
    bubble = bubble.toString()
    while(bubble.length < 3){
        bubble = "0" + bubble
    }
    char1 = woef[selector.selectedIndex].charAt(0)
    char2 = woef[selector.selectedIndex].charAt(1)
    char3 = woef[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Cube" + bubble+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Cube" + bubble+".png"

}
function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
function ballFix(){
    var selector = document.getElementById("ballselect")
    var imager = document.getElementById("balldisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = bowl[selector.selectedIndex].charAt(0)
    char2 = bowl[selector.selectedIndex].charAt(1)
    char3 = bowl[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Ball" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Ball" + rubrub+".png"

}

function shipFix(){
    var selector = document.getElementById("shipselect")
    var imager = document.getElementById("shipdisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = shap[selector.selectedIndex].charAt(0)
    char2 = shap[selector.selectedIndex].charAt(1)
    char3 = shap[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Ship" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Ship" + rubrub+".png"

}

function ufoFix(){
    var selector = document.getElementById("ufoselect")
    var imager = document.getElementById("ufodisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = fufu[selector.selectedIndex].charAt(0)
    char2 = fufu[selector.selectedIndex].charAt(1)
    char3 = fufu[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/UFO" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/UFO" + rubrub+".png"

}

function spiderFix(){
    var selector = document.getElementById("spiderselect")
    var imager = document.getElementById("spiderdisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = spyder[selector.selectedIndex].charAt(0)
    char2 = spyder[selector.selectedIndex].charAt(1)
    char3 = spyder[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Spider" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Spider" + rubrub+".png"

}

function waveFix(){
    var selector = document.getElementById("waveselect")
    var imager = document.getElementById("wavedisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = wav[selector.selectedIndex].charAt(0)
    char2 = wav[selector.selectedIndex].charAt(1)
    char3 = wav[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Wave" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Wave" + rubrub+".png"

}

function robotFix(){
    var selector = document.getElementById("robotselect")
    var imager = document.getElementById("robotdisplay")
    var rubrub = selector.selectedIndex + 1
    rubrub = rubrub.toString()
    while(rubrub.length < 2){
        rubrub = "0" + rubrub
    }
    char1 = bot[selector.selectedIndex].charAt(0)
    char2 = bot[selector.selectedIndex].charAt(1)
    char3 = bot[selector.selectedIndex].charAt(2)
    console.log("https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Robot" + rubrub+".png")
    imager.src = "https://static.wikia.nocookie.net/geometry-dash/images/" + char1 + "/" + char2 + char3 + "/Robot" + rubrub+".png"

}

function analyze(){
    document.getElementById("cubetext").innerText= cubeData[document.getElementById("iconselect").selectedIndex]
}








