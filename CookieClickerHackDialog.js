			var versionNum = document.getElementById('versionNumber');
			var openHackDialogButton = document.createElement("button");
			openHackDialogButton.innerHTML = "Hacks"
			versionNum.appendChild(openHackDialogButton)
			openHackDialogButton.id = "openHackDialogButton";
			var hackDialog = document.createElement('dialog')
			hackDialog.id = "hackDialog"
			hackDialog.innerHTML = getHackDialogHTML()
			document.body.appendChild(hackDialog)
			var closeHackDialogButton = document.getElementById('closeHackDialogButton')

			var nestedInputs = ['buyFreeAmount','buyAllAmount','setBasePrice','clickCookieTimes','clickCookieDelay']

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
				return `<h3>Hacks</h3><div><button id="buyFree">Buy <input id="buyFreeAmount"> of all for free</button</div><div><button id="buyAll">Buy <input id="buyAllAmount"> of all for money</button></div><div><button id="setBasePrice">Set base price of all objects to <input id="basePriceAmount"></button></div><div><button id="clickCookieButton">Click the cookie <input id="clickCookieTimes"> times, with every click being spaced <input id="clickCookieDelay"> milliseconds</button></div><div><button id='winAllAchievements'>Win all achievements</button></div><div><button id="unlockAllUpgrades">Unlock all upgrades</button></div><div><button id="buyAllUpgradesButton">Buy all upgrades with money</button></div><div><button id="getFreeAllUpgradesButton">Get all upgrades for free</button></div><div><button id="sellAll">Sell every bought object</button></div><button id="closeHackDialogButton">Close</button>`
			}