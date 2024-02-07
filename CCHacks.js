function buyAllObjectsFree(amount) {
	for(i = 0; i<Game.ObjectsN; i+=1) {
		Game.ObjectsById[i].getFree(amount)
	}
}

function buyAllObjects(amount) {
	for(i = 0; i<Game.ObjectsN; i+=1) {
		Game.ObjectsById[i].buy(amount)
	}
}

function setAllObjectsBasePrice(amount) {
	for(i = 0; i<Game.ObjectsN; i+=1) {
		Game.ObjectsById[i].basePrice = amount
	}
}

function sellAllObjects() {
	for(i = 0; i<Game.ObjectsN; i+=1) {
		Game.ObjectsById[i].sell(Game.ObjectsById[i].amount)
	}
}

function unlockAllUpgrades() {
	for(i = 0; i<Game.UpgradesN; i+=1) {
		Game.UpgradesById[i].unlock();
	}
}

function buyAllUpgradesFree() {
	for(i = 0; i<Game.UpgradesN; i+=1) {
		if(!(Game.UpgradesById[i].unlocked === 1)) continue;
		Game.UpgradesById[i].bought = 1;
	}
}

function buyAllUpgrades() {
	for(i = 0; i<Game.UpgradesN; i+=1) {
		if(!(Game.UpgradesById[i].unlocked === 1)) continue;
		Game.UpgradesById[i].buy()
	}
}

function winAllAchievements() {
	for(i = 0; i<Game.AchievementsN; i+=1) {
		Game.AchievementsById[i].won = 1;
	}
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function clickCookie(times, ms, debug) {
	for(i = 0; i<times; i+=1) {
		Game.ClickCookie(null, 1)
		if(debug === true) {
			console.log("Clicked the cookie for the " + (i+1) + " time")
		}
		await sleep(ms)
	}
}

var LoadCSS=function(url)
{
	let head = document.getElementsByTagName('HEAD')[0];
	let link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	head.appendChild(link);
}