function MakeBubble(){
    var bubble = ""
for(var i =1;i<91;i++){
   var ran = Math.floor(Math.random()*10) 
   bubble += `<div class="bubble">${ran}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble
}


var timer = 10
function runTimer(){
    var timers = setInterval(() => {
        if(timer > 0){
        timer--
        document.querySelector("#timer_60").textContent = timer
        if(timer <= 10){
            let = document.getElementById("timer_60")
            let.style.color = "red"
            let.style.fontSize = '35px'
         } 
        }
        else{
            clearInterval(timers)
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
            document.querySelector("#Hit_ran").innerHTML = `<h3>0</h3>`
            document.querySelector("#Score").innerHTML = `<h3>0</h3>`
        }
    }, 1000);

}
 if(timer<=10){
    let = document.getElementById("timer_60")
    let.style.color = "red"
 }


var ran 
function HitRandom(){
   ran = Math.floor(Math.random()*10)
   document.querySelector("#Hit_ran").innerHTML = ran
}

var score = 0

function updateScore(){
    score +=10
    document.querySelector("#Score").textContent = score
}

function Allfun(){
document.querySelector('#pbtm').addEventListener("click",function(det){
      
    var matchTheHit =  Number(det.target.textContent)
    if(ran === matchTheHit){
        let = document.getElementById("#pbtm")
        
        updateScore()
        MakeBubble()
        HitRandom()
    }
})
}


function StartFun(){
    document.querySelector('#startbtm').addEventListener("click",function(){
        timer = 10
        MakeBubble()
        runTimer()
        HitRandom()
        Allfun() 
               
    
        }
)
}
StartFun()

