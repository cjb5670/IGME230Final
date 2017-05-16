

    
    // the rate at which you want circles to spawn, in seconds
    var circSpawnRate = 1;
    // how many circles you want to spawn before game over
    var cycles = 10;
    

    var score = 0;
    var missed = 0;
    var radius = 0;
    var final;
    var firstRun = false;
    var target;
    var id;
    
    function init() {
        target = document.getElementById("circle");
        target.style.width = radius + 'px';
        target.style.height = radius + 'px';
            // Function calls
        $("#circle").click(CircClicked);
        $("#container").click(CircMissed);
        firstRun = true;
	}
    

   function begin(){
       circSpawnRate = document.getElementById("timerSet").value;
       radius = document.getElementById("radiusSet").value;
       cycles = document.getElementById("cycleSet").value;
       final = cycles;
       document.querySelector('#settings').innerHTML = ""; //TODO MAKE DEFAULT TIMER MISSES AND HITS DISPLAY
       id = setInterval(frame, (circSpawnRate * 1000)); // set interval in 1/1000 of a second
   }

    // Function definitions
    function CircClicked(){
        increaseScore();
         target.style.top = -100000 + 'px';
         target.style.left = -100000 + 'px';
    }

    function CircMissed(){
        increaseMissed()
    }
    
    function frame(){
        if (cycles <= 0) {
            clearInterval(id);
            alert("Game Over. You hit " + score + " out of " + final + " targets, and missed " + missed + " times.");
			window.location.reload(); 
        }
        else {
            if (!firstRun)
            {
                init();
            }
            cycles --;
            updateTimer();
            //document.write("Timed out ")
            target.style.top = Math.random()*80 +'%';
            target.style.left = Math.random()*80 + '%';
        }
    }

    function SpawnNewCirc(){
            var myDiv = document.createElement("Div");
            myDiv.setAttribute("id", "circle");
            document.body.appendChild(myDiv); 
    }

    function updateTimer(){
        document.querySelector('#timer').innerHTML = "Time:    " + parseInt(circSpawnRate * cycles);
    }

    function increaseScore(){
        missed--;
        score ++;
        document.querySelector('#score').innerHTML = "Hits:    " + score;
    }

    function increaseMissed(){
        missed++;
        document.querySelector('#missed').innerHTML = "Misses:   " +missed;
    }
    
    