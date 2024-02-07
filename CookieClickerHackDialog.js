			var versionNum = document.getElementById('versionNumber');

			var openHackDialogButton = document.createElement("button");
			openHackDialogButton.innerHTML = "Hacks"
            openHackDialogButton.className = "hackbutton1"
            openHackDialogButton.id = "openHackDialogButton";
			versionNum.appendChild(openHackDialogButton)

			var hackDialog = document.createElement('dialog')
			hackDialog.id = "hackDialog"
			hackDialog.innerHTML = getHackDialogHTML()
            hackDialog.className = "hackdialog"
			document.body.appendChild(hackDialog)

			var closeHackDialogButton = document.getElementById('closeHackDialogButton')

			var nestedInputs = ['buyFreeAmount','buyAllAmount','clickCookieTimes','clickCookieDelay', 'basePriceAmount']

            openHackDialogButton.addEventListener('click', () => {
                hackDialog.showModal();
            })

            closeHackDialogButton.addEventListener('click', () => {
                hackDialog.close();
            })

            nestedInputs.forEach((item, index) => {
                document.getElementById(item).addEventListener('click', (e) => {
                    e.stopPropagation();
                })
            })

            document.getElementById('buyFree').addEventListener('click', ()=> {
                var amount = document.getElementById('buyFreeAmount').value;
                if(!amount) amount = 0;
                buyAllObjectsFree(amount)
            })

            document.getElementById('buyAll').addEventListener('click', ()=> {
                var amount = document.getElementById('buyAllAmount').value;
                if(!amount) amount = 0;
                buyAllObjects(amount)
            })

            document.getElementById('setBasePrice').addEventListener('click', ()=> {
                var amount = document.getElementById('basePriceAmount').value;
                if(!amount) amount = 0;
                setAllObjectsBasePrice(amount)
            })

            document.getElementById('clickCookieButton').addEventListener('click', ()=> {
                var ms = document.getElementById("clickCookieDelay").value;
                if(!ms) ms = 50;
                var times = document.getElementById('clickCookieTimes').value;
                if(!times) times = 1;
                clickCookie(times, ms)
            })

            document.getElementById('winAllAchievements').addEventListener('click', () => {winAllAchievements()});
            document.getElementById('unlockAllUpgrades').addEventListener('click', () => {unlockAllUpgrades()});
            document.getElementById('buyAllUpgradesButton').addEventListener('click', () => {buyAllUpgrades()});
            document.getElementById('getFreeAllUpgradesButton').addEventListener('click', () => {buyAllUpgradesFree()});
            document.getElementById('sellAll').addEventListener('click', () => {sellAllObjects()});
			
			function getHackDialogHTML() {
				return `<h1 class="hacksH1"><a href='https://cchacks.netlify.app' target="_blank" rel="noopener noreferrer">Hacks</a></h1>
            
                <div>
                    <button id="buyFree" class="hackbutton">Buy <input id="buyFreeAmount" class="hackinput"> of all for free</button>
                </div>
                <div>
                    <button id="buyAll" class="hackbutton">Buy <input id="buyAllAmount" class="hackinput"> of all for money</button>
                </div>
                <div>
                    <button id="setBasePrice" class="hackbutton">Set base price of all objects to <input id="basePriceAmount" class="hackinput"></button>
                </div>
                <div>
                    <button id="clickCookieButton" class="hackbutton">Click the cookie <input id="clickCookieTimes" class="hackinput"> times, with every click being spaced <input id="clickCookieDelay" class="hackinput"> milliseconds</button>
                </div>
                <div>
                    <button id='winAllAchievements' class="hackbutton">Win all achievements</button>
                </div>
                <div>
                    <button id="unlockAllUpgrades" class="hackbutton">Unlock all upgrades</button>
                </div>
                <div>
                    <button id="buyAllUpgradesButton" class="hackbutton">Buy all upgrades with money</button>
                </div>
                <div>
                    <button id="getFreeAllUpgradesButton" class="hackbutton">Get all upgrades for free</button>
                </div>
                <div>
                    <button id="sellAll" class="hackbutton">Sell every bought object</button>
                </div>
                
                <button id="closeHackDialogButton" class="hackbutton">Close</button>`
			}