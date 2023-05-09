// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function play() {
  const rps = document.getElementById('rps');
  const rpsls = document.getElementById('rpsls');
  const opponent = document.getElementById('opponent');

  if (!opponent.checked && rps.checked){
  	rps_without_opponent().then(shot => {
            document.getElementById("no-opponent").value = shot.player;
        })
  } else if (!opponent.checked && rpsls.checked){
  	rpsls_without_opponent().then(shot => {
            document.getElementById("no-opponent").value = shot.player;
        })
  } else if (opponent.checked && rps.checked){
  	window.location.href = 'rps.html';
  } else if (opponent.checked && rpsls.checked){
  	window.location.href = 'rpsls.html';
  }
}

async function rps_without_opponent(){
	try {
		const url = "/app/rps";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function rpsls_without_opponent(){
	try {
		const url = "/app/rpsls";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function rps(shot) {
	try {
		document.getElementById("player-shot").value = shot;
		const {result, opponent} = await rps_with_opponent(shot);
		document.getElementById("result").value = result;
		document.getElementById("opponent-shot").value = opponent;
	} catch (error){
		console.error(error);
	}
}

async function rpsls(shot) {
	try {
		document.getElementById("rpsls-player-shot").value = shot;
		const {result, opponent} = await rpsls_with_opponent(shot);
		document.getElementById("rpsls-result").value = result;
		document.getElementById("rpsls-opponent-shot").value = opponent;
	} catch (error){
		console.error(error);
	}
	
}

async function rps_with_opponent(shot) {
    try {
        const url = "/app/rps/play/" + shot;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function rpsls_with_opponent(shot) {
    try {
        const url = "/app/rpsls/play/" + shot;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}



function home(){
    window.location.href = "index.html";
}

function check_rules(){
    window.location.href = "rules.html";
}
